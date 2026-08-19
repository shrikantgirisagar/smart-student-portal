require("dotenv").config();

const express = require("express");
const cors = require("cors");
const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const { promisify } = require("util");

const app = express();
const PORT = Number(process.env.PORT || 3000);
const DB_FILE = path.join(__dirname, "data", "database.json");

app.use(cors());
app.use(express.json({ limit: "50mb" }));

// Serve the portal from the same Node.js server so Live Server is not required.
// Only the frontend files are exposed; the private data/ folder is never served.
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "index.html")));
app.get("/index.html", (req, res) => res.sendFile(path.join(__dirname, "index.html")));
app.get("/style.css", (req, res) => res.sendFile(path.join(__dirname, "style.css")));
app.get("/database.js", (req, res) => res.sendFile(path.join(__dirname, "database.js")));
app.get("/script.js", (req, res) => res.sendFile(path.join(__dirname, "script.js")));

const scryptAsync = promisify(crypto.scrypt);

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
  "admin:admin": "admin@123"
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



app.get("/api/status", (req, res) => {
  res.json({ success: true, message: "Smart Student Portal backend is running." });
});

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
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
          if (item.email) existing.email = normalizeEmail(item.email);
          if (item.name) existing.name = String(item.name).trim();
          if (item.subject !== undefined) existing.subject = String(item.subject).trim();
          if (item.department !== undefined) existing.department = String(item.department).trim();
          if (!existing.passwordHash && item.password) existing.passwordHash = await hashPassword(item.password);
          if (role === "student") {
            if (item.division !== undefined && item.division !== "") existing.division = String(item.division).trim();
            if (item.semester !== undefined && item.semester !== "") existing.semester = String(item.semester).trim();
            if (item.courseYear !== undefined && item.courseYear !== "") existing.courseYear = String(item.courseYear).trim();
            if (item.course !== undefined && item.course !== "") existing.course = String(item.course).trim();
            if (item.languageChoice !== undefined && item.languageChoice !== "") existing.languageChoice = String(item.languageChoice).trim();
            if (item.mathChoice !== undefined && item.mathChoice !== "") existing.mathChoice = String(item.mathChoice).trim();
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
          newUser.division = String(item.division || "").trim();
          newUser.semester = String(item.semester || "").trim();
          newUser.courseYear = String(item.courseYear || "").trim();
          newUser.course = String(item.course || "").trim();
          newUser.languageChoice = String(item.languageChoice || "").trim();
          newUser.mathChoice = String(item.mathChoice || "").trim();
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
    const { name, username, password, email, role, subject, department, division, semester, courseYear, course, languageChoice, mathChoice } = req.body || {};
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
      department: role === "faculty" ? String(department || "Department of Computer Science & Applications").trim() : "",
      passwordHash: await hashPassword(password),
      createdAt: now,
      updatedAt: now
    };

    if (role === "student") {
      user.division = String(division || "Div A").trim();
      user.semester = String(semester || "1st Semester").trim();
      user.courseYear = String(courseYear || "1st Year").trim();
      user.course = String(course || "Bachelor of Computer Applications (BCA)").trim();
      user.languageChoice = String(languageChoice || "Kannada").trim();
      user.mathChoice = String(mathChoice || "Mathematics").trim();
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
    const decodedUsername = normalizeUsername(decodeURIComponent(username));
    const { name, newUsername, password, email, subject, department, division, semester, courseYear, course, languageChoice, mathChoice, profilePic } = req.body || {};
    const current = readDatabase();
    const user = findUser(current, role, decodedUsername);
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
      if (profilePic !== undefined) user.profilePic = String(profilePic);
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

    const targetRole = String(role || "").trim().toLowerCase();
    const targetUsername = normalizeUsername(decodeURIComponent(username));

    const current = readDatabase();
    const before = current.users.length;
    current.users = current.users.filter(user => {
      const matchRole = user.role.toLowerCase() === targetRole;
      const matchUser = normalizeUsername(user.username) === targetUsername;
      return !(matchRole && matchUser);
    });

    if (current.users.length === before) return res.status(404).json({ success: false, message: "Account not found." });

    writeDatabase(current);
    res.json({ success: true, message: "Account and details removed successfully.", remaining: current.users.length });
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

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Smart Student Portal backend running on port ${PORT}`);
  console.log(`Database: ${DB_FILE}`);
});
