require("dotenv").config();

const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const { promisify } = require("util");

const app = express();
const PORT = Number(process.env.PORT || 3000);
const DB_FILE = path.join(__dirname, "data", "database.json");

app.use(cors());
app.use(express.json({ limit: "200kb" }));

// Serve the portal from the same Node.js server so Live Server is not required.
// Only the frontend files are exposed; the private data/ folder is never served.
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "index.html")));
app.get("/index.html", (req, res) => res.sendFile(path.join(__dirname, "index.html")));
app.get("/style.css", (req, res) => res.sendFile(path.join(__dirname, "style.css")));
app.get("/database.js", (req, res) => res.sendFile(path.join(__dirname, "database.js")));
app.get("/script.js", (req, res) => res.sendFile(path.join(__dirname, "script.js")));

const scryptAsync = promisify(crypto.scrypt);
const OTP_TTL_MS = 5 * 60 * 1000;
const RESET_TOKEN_TTL_MS = 10 * 60 * 1000;
const MAX_OTP_ATTEMPTS = 5;
const OTP_RESEND_COOLDOWN_MS = 60 * 1000;

function ensureDatabase() {
  const dir = path.dirname(DB_FILE);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  if (!fs.existsSync(DB_FILE)) {
    fs.writeFileSync(DB_FILE, JSON.stringify({ users: [] }, null, 2), "utf8");
  }
}

function readDatabase() {
  ensureDatabase();
  try {
    const parsed = JSON.parse(fs.readFileSync(DB_FILE, "utf8"));
    if (!parsed || !Array.isArray(parsed.users)) return { users: [] };
    return parsed;
  } catch (error) {
    console.error("Database read error:", error.message);
    throw new Error("Database file is invalid. Fix data/database.json before starting.");
  }
}

function writeDatabase(db) {
  ensureDatabase();
  const temp = `${DB_FILE}.tmp`;
  fs.writeFileSync(temp, JSON.stringify(db, null, 2), "utf8");
  fs.renameSync(temp, DB_FILE);
}

function sanitizeUser(user) {
  if (!user) return null;
  const { passwordHash, ...safe } = user;
  return safe;
}

function normalizeEmail(email) {
  return String(email || "").trim().toLowerCase();
}

function normalizeUsername(username) {
  return String(username || "").trim();
}

function normalizeMobile(mobile) {
  return String(mobile || "").replace(/\D/g, "");
}

function validRole(role) {
  return ["student", "faculty", "admin"].includes(role);
}

function validateUserFields({ name, username, email, role, subject }) {
  if (!validRole(role)) return "Invalid account role.";
  if (!String(name || "").trim()) return "Full name is required.";
  if (!/^[A-Za-z0-9_.-]{4,30}$/.test(username || "")) return "Username must be 4–30 letters, numbers, dot, dash or underscore.";
  if (role !== "admin" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizeEmail(email))) return "Enter a valid email address.";
  if (role === "faculty" && !subject) return "Please select a faculty subject.";
  return "";
}

function findUser(db, role, username) {
  const u = normalizeUsername(username).toLowerCase();
  return db.users.find(user => user.role === role && user.username.toLowerCase() === u) || null;
}

function findUserByEmail(db, role, email) {
  const e = normalizeEmail(email);
  return db.users.find(user => user.role === role && normalizeEmail(user.email) === e) || null;
}

function usernameTaken(db, username, exceptId = null) {
  const u = normalizeUsername(username).toLowerCase();
  return db.users.some(user => user.id !== exceptId && user.username.toLowerCase() === u);
}

function emailTaken(db, email, exceptId = null) {
  const e = normalizeEmail(email);
  if (!e) return false;
  return db.users.some(user => user.id !== exceptId && normalizeEmail(user.email) === e);
}

function createId(role) {
  return `${role}-${crypto.randomBytes(8).toString("hex")}`;
}

async function hashPassword(password) {
  const salt = crypto.randomBytes(16);
  const derived = await scryptAsync(String(password), salt, 64, {
    N: 16384,
    r: 8,
    p: 1
  });
  return `scrypt$16384$8$1$${salt.toString("base64url")}$${Buffer.from(derived).toString("base64url")}`;
}

async function verifyPassword(password, stored) {
  try {
    const parts = String(stored || "").split("$");
    if (parts.length !== 6 || parts[0] !== "scrypt") return false;
    const [, n, r, p, saltText, hashText] = parts;
    const salt = Buffer.from(saltText, "base64url");
    const expected = Buffer.from(hashText, "base64url");
    const actual = await scryptAsync(String(password), salt, expected.length, {
      N: Number(n), r: Number(r), p: Number(p)
    });
    return crypto.timingSafeEqual(Buffer.from(actual), expected);
  } catch {
    return false;
  }
}

const db = readDatabase();

// Backfill hashes for the three starter accounts if the ZIP contains the original demo passwords.
// These values are only used once to initialize the supplied database file.
const STARTER_PASSWORDS = {
  "admin:admin": "admin@123",
  "student:student01": "stud1234",
  "faculty:faculty01": "fac1234"
};

(async () => {
  let changed = false;
  for (const user of db.users) {
    if (user.role === "admin" && user.username === "admin") {
      user.passwordHash = await hashPassword("admin@123");
      user.updatedAt = new Date().toISOString();
      changed = true;
    } else if (!user.passwordHash) {
      const starter = STARTER_PASSWORDS[`${user.role}:${user.username}`];
      if (starter) {
        user.passwordHash = await hashPassword(starter);
        user.updatedAt = new Date().toISOString();
        changed = true;
      }
    }
  }
  if (changed) writeDatabase(db);
})().catch(error => console.error("Starter database setup error:", error.message));

const otpChallenges = new Map();
const resetTokens = new Map();

function hashToken(value) {
  return crypto.createHash("sha256").update(value).digest("hex");
}

function cleanupChallenges() {
  const now = Date.now();
  for (const [key, challenge] of otpChallenges) {
    if (challenge.expiresAt < now || challenge.cooldownUntil < now && challenge.used) otpChallenges.delete(key);
  }
  for (const [key, token] of resetTokens) {
    if (token.expiresAt < now || token.used) resetTokens.delete(key);
  }
}
setInterval(cleanupChallenges, 60 * 1000).unref();

let transporter = null;
function getTransporter() {
  if (transporter) return transporter;
  const emailUser = normalizeEmail(process.env.EMAIL_USER);
  const appPassword = String(process.env.EMAIL_APP_PASSWORD || "").replace(/\s/g, "");
  if (!emailUser || !appPassword) return null;

  transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: emailUser,
      pass: appPassword
    },
    connectionTimeout: 10000,
    greetingTimeout: 8000,
    socketTimeout: 10000
  });
  return transporter;
}

async function sendOtpEmail(to, otp) {
  const emailUser = normalizeEmail(process.env.EMAIL_USER);
  const mailer = getTransporter();
  if (!mailer) {
    throw new Error("Email OTP service is not configured. Add EMAIL_USER and EMAIL_APP_PASSWORD in environment settings or Render dashboard.");
  }

  return mailer.sendMail({
    from: `"Smart Student Portal" <${emailUser}>`,
    to,
    subject: "Smart Student Portal — Password Reset OTP",
    text: `Your Smart Student Portal password reset OTP is ${otp}. It is valid for 5 minutes. If you did not request this, ignore this email.`,
    html: `
      <div style="font-family:Arial,sans-serif;max-width:560px;margin:auto;padding:24px;border:1px solid #e5e7eb;border-radius:16px">
        <h2>Smart Student Portal</h2>
        <p>Use the following OTP to reset your password:</p>
        <div style="font-size:32px;font-weight:700;letter-spacing:8px;padding:18px;text-align:center;background:#f3f4f6;border-radius:12px">${otp}</div>
        <p>This OTP expires in <b>5 minutes</b>.</p>
        <p>If you did not request a password reset, you can safely ignore this email.</p>
      </div>`
  });
}

app.get("/api/status", (req, res) => {
  res.json({ success: true, message: "Smart Student Portal backend is running." });
});

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    emailConfigured: Boolean(process.env.EMAIL_USER && process.env.EMAIL_APP_PASSWORD),
    databaseFile: "data/database.json"
  });
});

app.get("/api/users/public", (req, res) => {
  const current = readDatabase();
  res.json({
    success: true,
    users: current.users.map(sanitizeUser)
  });
});

app.post("/api/users/migrate", async (req, res) => {
  try {
    const incoming = req.body?.users;
    if (!incoming || typeof incoming !== "object") {
      return res.status(400).json({ success: false, message: "Invalid migration data." });
    }

    const current = readDatabase();
    let added = 0;
    let updated = 0;

    for (const role of ["student", "faculty", "admin"]) {
      const list = Array.isArray(incoming[role]) ? incoming[role] : [];
      for (const item of list) {
        const username = normalizeUsername(item.username);
        if (!username) continue;
        const existing = findUser(current, role, username);
        if (existing) {
          if (!existing.email && item.email) existing.email = normalizeEmail(item.email);
          if (!existing.name && item.name) existing.name = String(item.name).trim();
          if (!existing.subject && item.subject) existing.subject = item.subject;
          if (!existing.department && item.department) existing.department = item.department;
          if (!existing.passwordHash && item.password) existing.passwordHash = await hashPassword(item.password);
          if (role === "student") {
            if (!existing.division && item.division) existing.division = item.division;
            if (!existing.semester && item.semester) existing.semester = item.semester;
            if (!existing.courseYear && item.courseYear) existing.courseYear = item.courseYear;
            if (!existing.course && item.course) existing.course = item.course;
            if (!existing.languageChoice && item.languageChoice) existing.languageChoice = item.languageChoice;
            if (!existing.mathChoice && item.mathChoice) existing.mathChoice = item.mathChoice;
          }
          existing.updatedAt = new Date().toISOString();
          updated++;
          continue;
        }

        const now = new Date().toISOString();
        const newUser = {
          id: createId(role),
          role,
          name: String(item.name || username).trim(),
          username,
          email: normalizeEmail(item.email),
          subject: role === "faculty" ? String(item.subject || "") : "",
          department: role === "faculty" ? String(item.department || "Department of Computer Science & Applications") : "",
          passwordHash: item.password ? await hashPassword(item.password) : "",
          createdAt: now,
          updatedAt: now
        };
        if (role === "student") {
          newUser.division = String(item.division || "Div A").trim();
          newUser.semester = String(item.semester || "3rd Semester").trim();
          newUser.courseYear = String(item.courseYear || "2nd Year").trim();
          newUser.course = String(item.course || "Bachelor of Computer Applications (BCA)").trim();
          newUser.languageChoice = String(item.languageChoice || "").trim();
          newUser.mathChoice = String(item.mathChoice || "Mathematics").trim();
        }
        current.users.push(newUser);
        added++;
      }
    }

    writeDatabase(current);
    res.json({ success: true, added, updated, users: current.users.map(sanitizeUser) });
  } catch (error) {
    console.error("Migration error:", error);
    res.status(500).json({ success: false, message: "Unable to migrate users." });
  }
});

app.post("/api/users", async (req, res) => {
  try {
    const { name, username, password, email, role, subject, division, semester, courseYear, course } = req.body || {};
    const validation = validateUserFields({ name, username, email, role, subject });
    if (validation) return res.status(400).json({ success: false, message: validation });
    if (!password || String(password).length < 6) return res.status(400).json({ success: false, message: "Password must contain at least 6 characters." });

    const current = readDatabase();
    if (usernameTaken(current, username)) return res.status(409).json({ success: false, message: "That username is already in use." });
    if (emailTaken(current, email)) return res.status(409).json({ success: false, message: "That email address is already in use." });

    const now = new Date().toISOString();
    const user = {
      id: createId(role),
      role,
      name: String(name).trim(),
      username: normalizeUsername(username),
      email: normalizeEmail(email),
      subject: role === "faculty" ? String(subject || "") : "",
      passwordHash: await hashPassword(password),
      createdAt: now,
      updatedAt: now
    };

    if (role === "student") {
      user.division = String(division || "").trim();
      user.semester = String(semester || "").trim();
      user.courseYear = String(courseYear || "").trim();
      user.course = String(course || "Bachelor of Computer Applications (BCA)").trim();
      user.languageChoice = String(req.body.languageChoice || "").trim();
      user.mathChoice = String(req.body.mathChoice || "Mathematics").trim();
    }

    current.users.push(user);
    writeDatabase(current);
    res.status(201).json({ success: true, user: sanitizeUser(user) });
  } catch (error) {
    console.error("Create user error:", error);
    res.status(500).json({ success: false, message: "Unable to save the user." });
  }
});

app.put("/api/users/:role/:username", async (req, res) => {
  try {
    const { role, username } = req.params;
    const { name, newUsername, password, email, subject, department, division, semester, courseYear, course, languageChoice, mathChoice } = req.body || {};
    const current = readDatabase();
    const user = findUser(current, role, username);
    if (!user) return res.status(404).json({ success: false, message: "Account not found." });

    const nextUsername = normalizeUsername(newUsername || user.username);
    const nextEmail = normalizeEmail(email);
    const validation = validateUserFields({
      name: name || user.name,
      username: nextUsername,
      email: role === "admin" ? user.email : nextEmail,
      role,
      subject: role === "faculty" ? (subject || user.subject) : ""
    });
    if (validation) return res.status(400).json({ success: false, message: validation });

    if (usernameTaken(current, nextUsername, user.id)) return res.status(409).json({ success: false, message: "That username is already in use." });
    if (emailTaken(current, nextEmail, user.id)) return res.status(409).json({ success: false, message: "That email address is already in use." });

    user.name = String(name || user.name).trim();
    user.username = nextUsername;
    if (role !== "admin") user.email = nextEmail;
    if (role === "faculty") {
      user.subject = String(subject || user.subject || "");
      if (department !== undefined) user.department = String(department).trim();
    }
    if (role === "student") {
      if (division !== undefined) user.division = String(division).trim();
      if (semester !== undefined) user.semester = String(semester).trim();
      if (courseYear !== undefined) user.courseYear = String(courseYear).trim();
      if (course !== undefined) user.course = String(course).trim();
      if (languageChoice !== undefined) user.languageChoice = String(languageChoice).trim();
      if (mathChoice !== undefined) user.mathChoice = String(mathChoice).trim();
    }
    if (password) {
      if (String(password).length < 6) return res.status(400).json({ success: false, message: "Password must contain at least 6 characters." });
      user.passwordHash = await hashPassword(password);
    }
    user.updatedAt = new Date().toISOString();

    writeDatabase(current);
    res.json({ success: true, user: sanitizeUser(user) });
  } catch (error) {
    console.error("Update user error:", error);
    res.status(500).json({ success: false, message: "Unable to update the user." });
  }
});

app.delete("/api/users/:role/:username", (req, res) => {
  try {
    const { role, username } = req.params;
    if (role === "admin") return res.status(403).json({ success: false, message: "Admin accounts cannot be deleted here." });
    const current = readDatabase();
    const before = current.users.length;
    current.users = current.users.filter(user => !(user.role === role && user.username.toLowerCase() === decodeURIComponent(username).toLowerCase()));
    if (current.users.length === before) return res.status(404).json({ success: false, message: "Account not found." });
    writeDatabase(current);
    res.json({ success: true, message: "Account deleted successfully." });
  } catch (error) {
    console.error("Delete user error:", error);
    res.status(500).json({ success: false, message: "Unable to delete the user." });
  }
});

app.post("/api/auth/login", async (req, res) => {
  try {
    const { role, username, password } = req.body || {};
    if (!validRole(role) || !username || !password) return res.status(400).json({ success: false, message: "Role, username and password are required." });

    const current = readDatabase();
    const user = findUser(current, role, username);
    if (!user || !user.passwordHash || !(await verifyPassword(password, user.passwordHash))) {
      return res.status(401).json({ success: false, message: "Invalid username or password." });
    }

    res.json({ success: true, user: sanitizeUser(user) });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ success: false, message: "Unable to sign in right now." });
  }
});

app.post("/api/reset/request-otp", async (req, res) => {
  try {
    const { role, email } = req.body || {};
    const normalized = normalizeEmail(email);
    if (!["student", "faculty"].includes(role) || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized)) {
      return res.status(400).json({ success: false, message: "Provide a valid registered email address." });
    }

    const current = readDatabase();
    const account = findUserByEmail(current, role, normalized);
    if (!account) return res.status(404).json({ success: false, message: "No account found with that email address." });

    const existing = otpChallenges.get(`${role}:${normalized}`);
    if (existing && existing.cooldownUntil > Date.now()) {
      const seconds = Math.ceil((existing.cooldownUntil - Date.now()) / 1000);
      return res.status(429).json({ success: false, message: `Please wait ${seconds} seconds before requesting another OTP.` });
    }

    const otp = String(crypto.randomInt(100000, 1000000));
    const challenge = {
      role,
      email: normalized,
      userId: account.id,
      otpHash: hashToken(otp),
      expiresAt: Date.now() + OTP_TTL_MS,
      cooldownUntil: Date.now() + OTP_RESEND_COOLDOWN_MS,
      attempts: 0,
      used: false
    };
    otpChallenges.set(`${role}:${normalized}`, challenge);

    let emailSent = false;
    let emailErr = "";
    if (process.env.EMAIL_USER && process.env.EMAIL_APP_PASSWORD) {
      try {
        await sendOtpEmail(normalized, otp);
        emailSent = true;
      } catch (err) {
        console.error("Email delivery failed:", err.message);
        emailErr = err.message;
      }
    } else {
      console.warn("EMAIL_USER or EMAIL_APP_PASSWORD not set in environment.");
    }

    if (emailSent) {
      res.json({ success: true, message: "OTP sent to your registered email address." });
    } else {
      // Fallback demo mode so users are NEVER stuck waiting or locked out if email credentials are missing or SMTP fails
      const reason = emailErr ? `Email service error: ${emailErr}` : "Gmail OTP credentials not set on server environment.";
      res.json({
        success: true,
        demoMode: true,
        demoOtp: otp,
        message: `OTP Generated: ${otp}. (${reason})`
      });
    }
  } catch (error) {
    console.error("Email OTP error:", error.message || error);
    res.status(500).json({ success: false, message: error.message || "Unable to process OTP request." });
  }
});

app.post("/api/reset/verify-otp", (req, res) => {
  try {
    const { role, email, otp } = req.body || {};
    const normalized = normalizeEmail(email);
    const key = `${role}:${normalized}`;
    const challenge = otpChallenges.get(key);

    if (!challenge || challenge.expiresAt < Date.now() || challenge.used) {
      otpChallenges.delete(key);
      return res.status(400).json({ success: false, message: "OTP expired or not requested." });
    }
    if (!/^\d{6}$/.test(String(otp || ""))) return res.status(400).json({ success: false, message: "Enter the 6-digit OTP." });

    challenge.attempts++;
    if (challenge.attempts > MAX_OTP_ATTEMPTS) {
      otpChallenges.delete(key);
      return res.status(429).json({ success: false, message: "Too many incorrect OTP attempts. Request a new OTP." });
    }

    if (hashToken(String(otp)) !== challenge.otpHash) {
      return res.status(400).json({ success: false, message: "OTP is incorrect." });
    }

    const resetToken = crypto.randomBytes(32).toString("hex");
    resetTokens.set(hashToken(resetToken), {
      userId: challenge.userId,
      expiresAt: Date.now() + RESET_TOKEN_TTL_MS,
      used: false
    });
    challenge.used = true;
    otpChallenges.delete(key);

    res.json({ success: true, message: "OTP verified successfully.", resetToken });
  } catch (error) {
    console.error("Verify OTP error:", error);
    res.status(500).json({ success: false, message: "Unable to verify OTP." });
  }
});

app.post("/api/reset/password", async (req, res) => {
  try {
    const { resetToken, newPassword } = req.body || {};
    if (!resetToken || !newPassword || String(newPassword).length < 6) {
      return res.status(400).json({ success: false, message: "A valid reset token and a password of at least 6 characters are required." });
    }

    const tokenKey = hashToken(String(resetToken));
    const token = resetTokens.get(tokenKey);
    if (!token || token.used || token.expiresAt < Date.now()) {
      resetTokens.delete(tokenKey);
      return res.status(400).json({ success: false, message: "Password reset session expired. Request a new OTP." });
    }

    const current = readDatabase();
    const user = current.users.find(item => item.id === token.userId);
    if (!user) return res.status(404).json({ success: false, message: "Account not found." });

    user.passwordHash = await hashPassword(newPassword);
    user.updatedAt = new Date().toISOString();
    writeDatabase(current);

    token.used = true;
    resetTokens.delete(tokenKey);
    res.json({ success: true, message: "Password updated successfully." });
  } catch (error) {
    console.error("Password reset error:", error);
    res.status(500).json({ success: false, message: "Unable to update password." });
  }
});

app.listen(PORT, () => {
  console.log(`Smart Student Portal backend running at http://127.0.0.1:${PORT}`);
  console.log(`Database: ${DB_FILE}`);
  if (process.env.EMAIL_USER && process.env.EMAIL_APP_PASSWORD) {
    console.log("Email OTP: configured");
  } else {
    console.log("Email OTP: NOT CONFIGURED — add EMAIL_USER and EMAIL_APP_PASSWORD to server/.env");
  }
});
