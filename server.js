require("dotenv").config();

const express = require("express");
const cors = require("cors");
const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const { promisify } = require("util");
const mongoose = require("mongoose");

const webpush = require("web-push");
const cron = require("node-cron");

// Mongoose Models
const User = require("./models/User");
const Notice = require("./models/Notice");
const Attendance = require("./models/Attendance");
const Mark = require("./models/Mark");
const Assignment = require("./models/Assignment");
const Timetable = require("./models/Timetable");
const AcademicStore = require("./models/AcademicStore");

const app = express();
const PORT = Number(process.env.PORT || 3000);
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/smart_student_portal";
const DB_FILE = path.join(__dirname, "data", "database.json");

// VAPID Keys Setup for Web Push Notifications
let vapidPublicKey = process.env.VAPID_PUBLIC_KEY;
let vapidPrivateKey = process.env.VAPID_PRIVATE_KEY;

if (!vapidPublicKey || !vapidPrivateKey) {
  const vapidKeys = webpush.generateVAPIDKeys();
  vapidPublicKey = vapidKeys.publicKey;
  vapidPrivateKey = vapidKeys.privateKey;
  process.env.VAPID_PUBLIC_KEY = vapidPublicKey;
  process.env.VAPID_PRIVATE_KEY = vapidPrivateKey;

  try {
    const envPath = path.join(__dirname, ".env");
    let envContent = fs.existsSync(envPath) ? fs.readFileSync(envPath, "utf8") : "";
    if (!envContent.includes("VAPID_PUBLIC_KEY")) {
      envContent += `\nVAPID_PUBLIC_KEY=${vapidPublicKey}\nVAPID_PRIVATE_KEY=${vapidPrivateKey}\n`;
      fs.writeFileSync(envPath, envContent, "utf8");
    }
  } catch (e) {
    console.error("Could not save VAPID keys to .env:", e.message);
  }
}

webpush.setVapidDetails(
  "mailto:admin@smartportal.edu",
  vapidPublicKey,
  vapidPrivateKey
);

app.use(cors());
app.use(express.json({ limit: "50mb" }));

// Serve static portal assets and service worker
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "index.html")));
app.get("/index.html", (req, res) => res.sendFile(path.join(__dirname, "index.html")));
app.get("/style.css", (req, res) => res.sendFile(path.join(__dirname, "style.css")));
app.get("/script.js", (req, res) => res.sendFile(path.join(__dirname, "script.js")));
app.get("/sw.js", (req, res) => {
  res.setHeader("Content-Type", "application/javascript");
  res.sendFile(path.join(__dirname, "sw.js"));
});

const scryptAsync = promisify(crypto.scrypt);

function sanitizeUser(user) {
  if (!user) return null;
  const doc = typeof user.toPublicJSON === "function" ? user.toPublicJSON() : (user.toObject ? user.toObject() : { ...user });
  delete doc.passwordHash;
  delete doc.__v;
  delete doc._id;
  return doc;
}

function normalizeEmail(email) {
  return String(email || "").trim().toLowerCase();
}

function normalizeUsername(username) {
  return String(username || "").trim();
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

// Connect to MongoDB & Seed Initial Accounts
async function initDatabase() {
  try {
    await mongoose.connect(MONGODB_URI, {
      serverSelectionTimeoutMS: 5000
    });
    console.log("Connected to MongoDB successfully.");

    // Seed default admin or migrate local json if user count is zero
    const userCount = await User.countDocuments();
    if (userCount === 0) {
      console.log("No users found in MongoDB. Checking local database.json for migration...");
      if (fs.existsSync(DB_FILE)) {
        try {
          const parsed = JSON.parse(fs.readFileSync(DB_FILE, "utf8"));
          const users = Array.isArray(parsed?.users) ? parsed.users : [];
          if (users.length > 0) {
            for (const u of users) {
              await User.updateOne({ id: u.id }, { $set: u }, { upsert: true });
            }
            console.log(`Migrated ${users.length} users from data/database.json into MongoDB.`);
          }
        } catch (e) {
          console.error("Auto-migration error:", e.message);
        }
      }

      // Ensure admin account exists
      const adminExists = await User.findOne({ role: "admin", username: "admin" });
      if (!adminExists) {
        const adminPasswordHash = await hashPassword("admin@123");
        await User.create({
          id: "admin-001",
          role: "admin",
          name: "Administrator",
          username: "admin",
          email: "admin@smartportal.edu",
          passwordHash: adminPasswordHash
        });
        console.log("Default admin account created in MongoDB (admin / admin@123).");
      }
    }
  } catch (error) {
    console.error("MongoDB Connection Error:", error.message);
    console.log("Note: Please make sure MongoDB is running locally or set MONGODB_URI in your .env file.");
  }
}

initDatabase();

// --- API Endpoints ---

app.use("/api", async (req, res, next) => {
  if (req.path === "/status" || req.path === "/health") return next();
  if (mongoose.connection.readyState !== 1) {
    try {
      console.log("Database disconnected. Attempting to reconnect to MongoDB...");
      await mongoose.connect(MONGODB_URI, { serverSelectionTimeoutMS: 5000 });
      console.log("Reconnected to MongoDB successfully.");
    } catch (e) {
      return res.status(503).json({
        success: false,
        message: "Database connection error. Please check your MongoDB status or add your IP address to MongoDB Atlas Network Access whitelist."
      });
    }
  }
  next();
});

app.get("/api/status", (req, res) => {
  const states = ["disconnected", "connected", "connecting", "disconnecting"];
  const dbState = states[mongoose.connection.readyState] || "unknown";
  res.json({
    success: true,
    message: "Smart Student Portal backend is running.",
    database: "MongoDB",
    databaseState: dbState
  });
});

app.get("/api/health", (req, res) => {
  const states = ["disconnected", "connected", "connecting", "disconnecting"];
  res.json({
    success: true,
    databaseMode: "MongoDB",
    databaseState: states[mongoose.connection.readyState] || "unknown",
    connectionUri: MONGODB_URI.replace(/\/\/([^:]+):([^@]+)@/, "//***:***@")
  });
});

app.get("/api/users/public", async (req, res) => {
  try {
    const users = await User.find({});
    res.json({
      success: true,
      users: users.map(sanitizeUser)
    });
  } catch (error) {
    console.error("Get users error:", error);
    res.status(500).json({ success: false, message: "Unable to fetch users." });
  }
});

app.post("/api/users/migrate", async (req, res) => {
  try {
    const incoming = req.body?.users;
    if (!incoming || typeof incoming !== "object") {
      return res.status(400).json({ success: false, message: "Invalid migration data." });
    }

    let added = 0;
    let updated = 0;

    for (const role of ["student", "faculty", "admin"]) {
      const list = Array.isArray(incoming[role]) ? incoming[role] : [];
      for (const item of list) {
        const username = normalizeUsername(item.username);
        if (!username) continue;

        const existing = await User.findOne({ role, username: new RegExp(`^${username}$`, "i") });
        if (existing) {
          if (item.email) existing.email = normalizeEmail(item.email);
          if (item.name) existing.name = String(item.name).trim();
          if (item.subject !== undefined) existing.subject = String(item.subject).trim();
          if (item.department !== undefined) existing.department = String(item.department).trim();
          if (!existing.passwordHash && item.password) existing.passwordHash = await hashPassword(item.password);
          if (role === "student") {
            if (item.division) existing.division = String(item.division).trim();
            if (item.semester) existing.semester = String(item.semester).trim();
            if (item.courseYear) existing.courseYear = String(item.courseYear).trim();
            if (item.course) existing.course = String(item.course).trim();
            if (item.languageChoice) existing.languageChoice = String(item.languageChoice).trim();
            if (item.mathChoice) existing.mathChoice = String(item.mathChoice).trim();
          }
          await existing.save();
          updated++;
          continue;
        }

        const newUser = {
          id: createId(role),
          role,
          name: String(item.name || username).trim(),
          username,
          email: normalizeEmail(item.email),
          subject: role === "faculty" ? String(item.subject || "") : "",
          department: role === "faculty" ? String(item.department || "Department of Computer Science & Applications") : "",
          passwordHash: item.password ? await hashPassword(item.password) : ""
        };
        if (role === "student") {
          newUser.division = String(item.division || "").trim();
          newUser.semester = String(item.semester || "").trim();
          newUser.courseYear = String(item.courseYear || "").trim();
          newUser.course = String(item.course || "").trim();
          newUser.languageChoice = String(item.languageChoice || "").trim();
          newUser.mathChoice = String(item.mathChoice || "").trim();
        }
        await User.create(newUser);
        added++;
      }
    }

    const allUsers = await User.find({});
    res.json({ success: true, added, updated, users: allUsers.map(sanitizeUser) });
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

    const existingUsername = await User.findOne({ username: new RegExp(`^${normalizeUsername(username)}$`, "i") });
    if (existingUsername) return res.status(409).json({ success: false, message: "That username is already in use." });

    if (email && normalizeEmail(email)) {
      const existingEmail = await User.findOne({ email: normalizeEmail(email) });
      if (existingEmail) return res.status(409).json({ success: false, message: "That email address is already in use." });
    }

    const userObj = {
      id: createId(role),
      role,
      name: String(name).trim(),
      username: normalizeUsername(username),
      email: normalizeEmail(email),
      subject: role === "faculty" ? String(subject || "") : "",
      department: role === "faculty" ? String(department || "Department of Computer Science & Applications").trim() : "",
      passwordHash: await hashPassword(password)
    };

    if (role === "student") {
      userObj.division = String(division || "Div A").trim();
      userObj.semester = String(semester || "1st Semester").trim();
      userObj.courseYear = String(courseYear || "1st Year").trim();
      userObj.course = String(course || "Bachelor of Computer Applications (BCA)").trim();
      userObj.languageChoice = String(languageChoice || "Kannada").trim();
      userObj.mathChoice = String(mathChoice || "Mathematics").trim();
    }

    const createdUser = await User.create(userObj);
    res.status(201).json({ success: true, user: sanitizeUser(createdUser) });
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

    const user = await User.findOne({ role, username: new RegExp(`^${decodedUsername}$`, "i") });
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

    if (nextUsername.toLowerCase() !== user.username.toLowerCase()) {
      const takenUser = await User.findOne({ username: new RegExp(`^${nextUsername}$`, "i"), id: { $ne: user.id } });
      if (takenUser) return res.status(409).json({ success: false, message: "That username is already in use." });
    }

    if (nextEmail && nextEmail !== user.email) {
      const takenEmail = await User.findOne({ email: nextEmail, id: { $ne: user.id } });
      if (takenEmail) return res.status(409).json({ success: false, message: "That email address is already in use." });
    }

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

    await user.save();
    res.json({ success: true, user: sanitizeUser(user) });
  } catch (error) {
    console.error("Update user error:", error);
    res.status(500).json({ success: false, message: "Unable to update the user." });
  }
});

app.delete("/api/users/:role/:username", async (req, res) => {
  try {
    const { role, username } = req.params;
    if (role === "admin") return res.status(403).json({ success: false, message: "Admin accounts cannot be deleted here." });

    const targetRole = String(role || "").trim().toLowerCase();
    const targetUsername = normalizeUsername(decodeURIComponent(username));

    const result = await User.deleteOne({
      role: targetRole,
      username: new RegExp(`^${targetUsername}$`, "i")
    });

    if (result.deletedCount === 0) return res.status(404).json({ success: false, message: "Account not found." });

    const remaining = await User.countDocuments();
    res.json({ success: true, message: "Account and details removed successfully.", remaining });
  } catch (error) {
    console.error("Delete user error:", error);
    res.status(500).json({ success: false, message: "Unable to delete the user." });
  }
});

app.post("/api/auth/login", async (req, res) => {
  try {
    const { role, username, password } = req.body || {};
    if (!validRole(role) || !username || !password) return res.status(400).json({ success: false, message: "Role, username and password are required." });

    const user = await User.findOne({
      role,
      username: new RegExp(`^${normalizeUsername(username)}$`, "i")
    });

    if (!user || !user.passwordHash || !(await verifyPassword(password, user.passwordHash))) {
      return res.status(401).json({ success: false, message: "Invalid username or password." });
    }

    res.json({ success: true, user: sanitizeUser(user) });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ success: false, message: "Unable to sign in right now." });
  }
});

// --- Push Notification & Timetable Endpoints ---

app.get("/api/notifications/vapid-public-key", (req, res) => {
  res.json({ success: true, publicKey: vapidPublicKey });
});

app.post("/api/notifications/subscribe", async (req, res) => {
  try {
    const { username, subscription } = req.body || {};
    if (!username || !subscription) {
      return res.status(400).json({ success: false, message: "Username and subscription required." });
    }

    const user = await User.findOne({ username: new RegExp(`^${normalizeUsername(username)}$`, "i") });
    if (!user) {
      return res.status(404).json({ success: false, message: "Faculty account not found." });
    }

    user.pushSubscription = subscription;
    await user.save();

    res.json({ success: true, message: "15-minute class warning push notifications enabled!" });
  } catch (error) {
    console.error("Subscribe push error:", error);
    res.status(500).json({ success: false, message: "Failed to save push subscription." });
  }
});

app.post("/api/notifications/test-push", async (req, res) => {
  try {
    const { username } = req.body || {};
    const user = await User.findOne({ username: new RegExp(`^${normalizeUsername(username)}$`, "i") });
    if (!user || !user.pushSubscription) {
      return res.status(400).json({ success: false, message: "No active push subscription found for this account." });
    }

    const payload = JSON.stringify({
      title: "🧪 Test Class Warning Alert",
      body: "Notifications are working! You will receive alerts 15 minutes before your scheduled classes.",
      icon: "/favicon.ico",
      url: "/index.html#timetable"
    });

    await webpush.sendNotification(user.pushSubscription, payload);
    res.json({ success: true, message: "Test notification sent to your device!" });
  } catch (error) {
    console.error("Test push error:", error);
    res.status(500).json({ success: false, message: "Failed to send test push notification: " + error.message });
  }
});

app.get("/api/timetable", async (req, res) => {
  try {
    const entries = await Timetable.find({});
    res.json({ success: true, timetable: entries });
  } catch (error) {
    console.error("Fetch timetable error:", error);
    res.status(500).json({ success: false, message: "Failed to fetch timetable." });
  }
});

app.post("/api/timetable/sync", async (req, res) => {
  try {
    const { timetable } = req.body || {};
    if (Array.isArray(timetable)) {
      await Timetable.deleteMany({});
      if (timetable.length > 0) {
        const docs = timetable.map(item => ({
          division: item.division || "Div A",
          semester: item.semester || "",
          day: item.day,
          time: item.time,
          subject: item.subject || "",
          subjectText: item.subjectText || item.subject || "Class",
          faculty: item.faculty || ""
        }));
        await Timetable.insertMany(docs);
      }
    }
    res.json({ success: true, message: "Timetable synchronized." });
  } catch (error) {
    console.error("Sync timetable error:", error);
    res.status(500).json({ success: false, message: "Failed to sync timetable." });
  }
});

// --- 15-Minute Class Warning Cron Scheduler ---

function parseStartMinutes(timeStr) {
  if (!timeStr) return null;
  const startPart = String(timeStr).split("-")[0].trim();
  const match = startPart.match(/^(\d{1,2}):(\d{2})(?:\s*([AP]M))?$/i);
  if (!match) return null;
  let hours = parseInt(match[1], 10);
  const minutes = parseInt(match[2], 10);
  const ampm = match[3] ? match[3].toUpperCase() : null;

  if (ampm === "PM" && hours < 12) hours += 12;
  if (ampm === "AM" && hours === 12) hours = 0;

  return hours * 60 + minutes;
}

const notifiedClasses = new Set();

async function check15MinClassWarnings() {
  try {
    if (mongoose.connection.readyState !== 1) return;

    const now = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDay = days[now.getDay()];
    if (currentDay === "Sunday") return;

    const currentMinutes = now.getHours() * 60 + now.getMinutes();

    const entries = await Timetable.find({ day: currentDay });
    if (!entries.length) return;

    for (const entry of entries) {
      const classStart = parseStartMinutes(entry.time);
      if (classStart === null) continue;

      const diff = classStart - currentMinutes;
      // Triggers if class starts in 14 to 16 minutes from now
      if (diff >= 14 && diff <= 16) {
        const notifKey = `${now.toISOString().slice(0, 10)}_${entry._id}`;
        if (notifiedClasses.has(notifKey)) continue;

        let facultyQuery = { role: "faculty", pushSubscription: { $ne: null } };
        if (entry.faculty) {
          facultyQuery.username = new RegExp(`^${entry.faculty}$`, "i");
        }
        let faculties = await User.find(facultyQuery);

        if (!faculties.length && entry.subject) {
          faculties = await User.find({
            role: "faculty",
            subject: new RegExp(`^${entry.subject}$`, "i"),
            pushSubscription: { $ne: null }
          });
        }

        const payload = JSON.stringify({
          title: "⏰ 15-Minute Class Warning!",
          body: `Your next class (${entry.subjectText || entry.subject}) for ${entry.semester || "Semester"} (${entry.division}) starts in 15 minutes at ${entry.time}!`,
          icon: "/favicon.ico",
          url: "/index.html#timetable"
        });

        for (const faculty of faculties) {
          if (!faculty.pushSubscription) continue;
          try {
            await webpush.sendNotification(faculty.pushSubscription, payload);
            console.log(`[WebPush] Alert sent to faculty ${faculty.username} for class at ${entry.time}`);
            notifiedClasses.add(notifKey);
          } catch (err) {
            console.error(`[WebPush Error] ${faculty.username}:`, err.message);
            if (err.statusCode === 410 || err.statusCode === 404) {
              faculty.pushSubscription = null;
              await faculty.save();
            }
          }
        }
      }
    }

    if (now.getHours() === 0 && now.getMinutes() === 0) {
      notifiedClasses.clear();
    }
  } catch (err) {
    console.error("[Cron Job Error]", err.message);
  }
}

cron.schedule("* * * * *", () => {
  check15MinClassWarnings();
});

// --- Academic Data MongoDB Persistence Endpoints ---

app.get("/api/academic/data", async (req, res) => {
  try {
    let store = await AcademicStore.findOne({ storeKey: "default_academic_store" });
    if (!store) {
      store = await AcademicStore.create({ storeKey: "default_academic_store" });
    }
    res.json({
      success: true,
      data: {
        students: store.students || {},
        notices: store.notices || [],
        timetable: store.timetable || [],
        timetableHeader: store.timetableHeader || {},
        customBreakRows: store.customBreakRows || {},
        assignments: store.assignments || [],
        notes: store.notes || [],
        deletedAssignments: store.deletedAssignments || [],
        dailyAttendance: store.dailyAttendance || [],
        subjectMarksConfig: store.subjectMarksConfig || {}
      }
    });
  } catch (error) {
    console.error("Fetch academic data error:", error);
    res.status(500).json({ success: false, message: "Failed to fetch academic data." });
  }
});

app.post("/api/academic/sync", async (req, res) => {
  try {
    const payload = req.body?.data || req.body || {};
    let store = await AcademicStore.findOne({ storeKey: "default_academic_store" });
    if (!store) {
      store = new AcademicStore({ storeKey: "default_academic_store" });
    }

    if (payload.students && typeof payload.students === "object") store.students = payload.students;
    if (Array.isArray(payload.notices)) store.notices = payload.notices;
    if (Array.isArray(payload.timetable)) store.timetable = payload.timetable;
    if (payload.timetableHeader && typeof payload.timetableHeader === "object") store.timetableHeader = payload.timetableHeader;
    if (payload.customBreakRows && typeof payload.customBreakRows === "object") store.customBreakRows = payload.customBreakRows;
    if (Array.isArray(payload.assignments)) store.assignments = payload.assignments;
    if (Array.isArray(payload.notes)) store.notes = payload.notes;
    if (Array.isArray(payload.deletedAssignments)) store.deletedAssignments = payload.deletedAssignments;
    if (Array.isArray(payload.dailyAttendance)) store.dailyAttendance = payload.dailyAttendance;
    if (payload.subjectMarksConfig && typeof payload.subjectMarksConfig === "object") store.subjectMarksConfig = payload.subjectMarksConfig;

    store.markModified("students");
    store.markModified("timetableHeader");
    store.markModified("customBreakRows");
    store.markModified("subjectMarksConfig");

    await store.save();
    res.json({ success: true, message: "Academic data permanently saved to MongoDB!" });
  } catch (error) {
    console.error("Sync academic data error:", error);
    res.status(500).json({ success: false, message: "Failed to sync academic data." });
  }
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Smart Student Portal backend running on port ${PORT}`);
  console.log(`Database Mode: MongoDB (${MONGODB_URI})`);
});
