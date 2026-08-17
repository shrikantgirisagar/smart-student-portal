const SUBJECTS = [
  // 1st Sem Core, Languages & Labs
  { id: "kannada", name: "Kannada", short: "Kannada", icon: "", semester: "1st Semester" },
  { id: "hindi", name: "Hindi", short: "Hindi", icon: "", semester: "1st Semester" },
  { id: "english", name: "English", short: "English", icon: "", semester: "1st Semester" },
  { id: "maths", name: "Mathematics", short: "Maths", icon: "", semester: "1st Semester" },
  { id: "accountancy", name: "Accountancy", short: "Acc", icon: "", semester: "1st Semester" },
  { id: "cprog", name: "C Programming", short: "C Prog", icon: "", semester: "1st Semester" },
  { id: "dbms", name: "DBMS", short: "DBMS", icon: "", semester: "1st Semester" },
  { id: "ic", name: "Indian Constitution", short: "IC", icon: "", semester: "1st Semester" },
  { id: "clab", name: "C Lab", short: "C Lab", icon: "", semester: "1st Semester" },
  { id: "dbmslab", name: "DBMS Lab", short: "DBMS Lab", icon: "", semester: "1st Semester" },
  { id: "oalab", name: "OA Lab", short: "OA Lab", icon: "", semester: "1st Semester" },

  // 2nd Sem Core, Languages & Labs
  { id: "kannada_sem2", name: "Kannada", short: "Kannada", icon: "", semester: "2nd Semester" },
  { id: "hindi_sem2", name: "Hindi", short: "Hindi", icon: "", semester: "2nd Semester" },
  { id: "english_sem2", name: "English", short: "English", icon: "", semester: "2nd Semester" },
  { id: "nsm", name: "Numerical & Statistical Methods", short: "NSM", icon: "", semester: "2nd Semester" },
  { id: "ds", name: "Data Structure", short: "DS", icon: "", semester: "2nd Semester" },
  { id: "java", name: "Java", short: "Java", icon: "", semester: "2nd Semester" },
  { id: "nsmlab", name: "NSM Lab", short: "NSM Lab", icon: "", semester: "2nd Semester" },
  { id: "dslab", name: "DS Lab", short: "DS Lab", icon: "", semester: "2nd Semester" },
  { id: "javalab", name: "Java Lab", short: "Java Lab", icon: "", semester: "2nd Semester" },

  // 3rd Sem Core, Languages & Labs
  { id: "kannada_sem3", name: "Kannada", short: "Kannada", icon: "", semester: "3rd Semester" },
  { id: "hindi_sem3", name: "Hindi", short: "Hindi", icon: "", semester: "3rd Semester" },
  { id: "english_sem3", name: "English", short: "English", icon: "", semester: "3rd Semester" },
  { id: "python", name: "Python", short: "Python", icon: "", semester: "3rd Semester" },
  { id: "os", name: "Operating System", short: "OS", icon: "", semester: "3rd Semester" },
  { id: "advjava", name: "Advance Java", short: "Adv.Java", icon: "", semester: "3rd Semester" },
  { id: "ost", name: "Open Source Tool", short: "OST", icon: "", semester: "3rd Semester" },
  { id: "evs", name: "Environmental Studies", short: "EVS", icon: "", semester: "3rd Semester" },
  { id: "oslab", name: "OS Lab", short: "OS Lab", icon: "", semester: "3rd Semester" },
  { id: "pythonlab", name: "Python Lab", short: "Python Lab", icon: "", semester: "3rd Semester" },
  { id: "advjavalab", name: "Adv.Java Lab", short: "Adv.Java Lab", icon: "", semester: "3rd Semester" },

  // 4th Sem Core, Languages & Labs
  { id: "kannada_sem4", name: "Kannada", short: "Kannada", icon: "", semester: "4th Semester" },
  { id: "hindi_sem4", name: "Hindi", short: "Hindi", icon: "", semester: "4th Semester" },
  { id: "english_sem4", name: "English", short: "English", icon: "", semester: "4th Semester" },
  { id: "cn", name: "Computer Networks", short: "CN", icon: "", semester: "4th Semester" },
  { id: "se", name: "Software Engineering", short: "SE", icon: "", semester: "4th Semester" },
  { id: "webtech", name: "Web Technology", short: "Web Tech", icon: "", semester: "4th Semester" },
  { id: "cnlab", name: "CN Lab", short: "CN Lab", icon: "", semester: "4th Semester" },
  { id: "weblab", name: "Web Lab", short: "Web Lab", icon: "", semester: "4th Semester" },

  // 5th Sem Core, Languages & Labs
  { id: "kannada_sem5", name: "Kannada", short: "Kannada", icon: "", semester: "5th Semester" },
  { id: "hindi_sem5", name: "Hindi", short: "Hindi", icon: "", semester: "5th Semester" },
  { id: "english_sem5", name: "English", short: "English", icon: "", semester: "5th Semester" },
  { id: "ai", name: "Artificial Intelligence", short: "AI", icon: "", semester: "5th Semester" },
  { id: "cloud", name: "Cloud Computing", short: "Cloud", icon: "", semester: "5th Semester" },
  { id: "cyber", name: "Cyber Security", short: "Cyber", icon: "", semester: "5th Semester" },
  { id: "ailab", name: "AI Lab", short: "AI Lab", icon: "", semester: "5th Semester" },
  { id: "cloudlab", name: "Cloud Lab", short: "Cloud Lab", icon: "", semester: "5th Semester" },

  // 6th Sem Core, Languages & Labs
  { id: "kannada_sem6", name: "Kannada", short: "Kannada", icon: "", semester: "6th Semester" },
  { id: "hindi_sem6", name: "Hindi", short: "Hindi", icon: "", semester: "6th Semester" },
  { id: "english_sem6", name: "English", short: "English", icon: "", semester: "6th Semester" },
  { id: "ml", name: "Machine Learning", short: "ML", icon: "", semester: "6th Semester" },
  { id: "iot", name: "Internet of Things", short: "IoT", icon: "", semester: "6th Semester" },
  { id: "majorproject", name: "Major Project", short: "Project", icon: "", semester: "6th Semester" },
  { id: "mllab", name: "ML Lab", short: "ML Lab", icon: "", semester: "6th Semester" },
  { id: "iotlab", name: "IoT Lab", short: "IoT Lab", icon: "", semester: "6th Semester" }
];

const subjectById = id => SUBJECTS.find(s => s.id === id);

function getSemesterForSubject(subjectId) {
  const s = subjectById(subjectId);
  if (s && s.semester) return s.semester;
  if (["cprog", "dbms", "ic", "clab", "dbmslab", "oalab", "maths", "accountancy"].includes(subjectId)) return "1st Semester";
  if (["nsm", "ds", "java", "nsmlab", "dslab", "javalab"].includes(subjectId)) return "2nd Semester";
  if (["python", "os", "advjava", "ost", "evs", "oslab", "pythonlab", "advjavalab"].includes(subjectId)) return "3rd Semester";
  if (["cn", "se", "webtech", "cnlab", "weblab"].includes(subjectId)) return "4th Semester";
  if (["ai", "cloud", "cyber", "ailab", "cloudlab"].includes(subjectId)) return "5th Semester";
  if (["ml", "iot", "majorproject", "mllab", "iotlab"].includes(subjectId)) return "6th Semester";
  return "1st Semester";
}

function getCourseYearForSemester(sem) {
  if (sem === "1st Semester" || sem === "2nd Semester") return "1st Year";
  if (sem === "3rd Semester" || sem === "4th Semester") return "2nd Year";
  if (sem === "5th Semester" || sem === "6th Semester") return "3rd Year";
  return "1st Year";
}

function getSemestersForCourseYear(courseYear) {
  if (courseYear === "1st Year") {
    return ["1st Semester", "2nd Semester"];
  } else if (courseYear === "2nd Year") {
    return ["3rd Semester", "4th Semester"];
  } else if (courseYear === "3rd Year") {
    return ["5th Semester", "6th Semester"];
  }
  return ["1st Semester", "2nd Semester", "3rd Semester", "4th Semester", "5th Semester", "6th Semester"];
}

function updateEditProfileSemesterOptions(courseYear, selectedSem) {
  const semSelect = $("editProfileSemester");
  if (!semSelect) return;

  const validSemesters = getSemestersForCourseYear(courseYear);
  semSelect.innerHTML = `<option value="">Select Semester</option>` +
    validSemesters.map(sem => `<option value="${sem}">${sem}</option>`).join("");

  if (selectedSem && validSemesters.includes(selectedSem)) {
    semSelect.value = selectedSem;
  } else if (validSemesters.length) {
    semSelect.value = validSemesters[0];
  } else {
    semSelect.value = "";
  }

  const is1stSem = semSelect.value === "1st Semester";
  if ($("editProfileMathWrap")) {
    $("editProfileMathWrap").style.display = is1stSem ? "block" : "none";
  }
}

function getSubjectsForStudent(student) {
  if (!student || student.role !== "student") return SUBJECTS;

  const sem = student.semester || "1st Semester";
  const lang = student.languageChoice;
  const mathOpt = student.mathChoice || "Mathematics";

  let langId = "kannada";
  let engId = "english";
  if (sem === "2nd Semester") {
    langId = lang === "Hindi" ? "hindi_sem2" : "kannada_sem2";
    engId = "english_sem2";
  } else if (sem === "3rd Semester") {
    langId = lang === "Hindi" ? "hindi_sem3" : "kannada_sem3";
    engId = "english_sem3";
  } else if (sem === "4th Semester") {
    langId = lang === "Hindi" ? "hindi_sem4" : "kannada_sem4";
    engId = "english_sem4";
  } else if (sem === "5th Semester") {
    langId = lang === "Hindi" ? "hindi_sem5" : "kannada_sem5";
    engId = "english_sem5";
  } else if (sem === "6th Semester") {
    langId = lang === "Hindi" ? "hindi_sem6" : "kannada_sem6";
    engId = "english_sem6";
  } else {
    langId = lang === "Hindi" ? "hindi" : "kannada";
    engId = "english";
  }

  const langSubject = lang ? subjectById(langId) : null;
  const engSubject = subjectById(engId);

  if (sem === "1st Semester") {
    const mathSubject = mathOpt === "Accountancy" ? subjectById("accountancy") : subjectById("maths");
    return [
      langSubject,
      engSubject,
      mathSubject,
      subjectById("cprog"),
      subjectById("dbms"),
      subjectById("ic"),
      subjectById("clab"),
      subjectById("dbmslab"),
      subjectById("oalab")
    ].filter(Boolean);
  } else if (sem === "2nd Semester") {
    return [
      langSubject,
      engSubject,
      subjectById("nsm"),
      subjectById("ds"),
      subjectById("java"),
      subjectById("ic"),
      subjectById("nsmlab"),
      subjectById("dslab"),
      subjectById("javalab")
    ].filter(Boolean);
  } else {
    // 3rd Semester (and fallback for 4th, 5th, 6th)
    return [
      langSubject,
      engSubject,
      subjectById("python"),
      subjectById("os"),
      subjectById("advjava"),
      subjectById("ost"),
      subjectById("evs"),
      subjectById("oslab"),
      subjectById("pythonlab"),
      subjectById("advjavalab")
    ].filter(Boolean);
  }
}

function getStudentsForSubject(subjectId) {
  if (!subjectId) return USERS.student || [];
  const facultySem = getSemesterForSubject(subjectId);
  const facultyYear = getCourseYearForSemester(facultySem);

  const matched = (USERS.student || []).filter(s => {
    const studentSem = s.semester || "1st Semester";
    const studentYear = s.courseYear || "1st Year";
    if (studentSem !== facultySem || studentYear !== facultyYear) {
      return false;
    }
    const studentSubjects = getSubjectsForStudent(s);
    return studentSubjects.some(sub => sub && sub.id === subjectId);
  });

  if (!matched.length && (USERS.student || []).length) {
    const semMatched = (USERS.student || []).filter(s => (s.semester || "1st Semester") === facultySem);
    if (semMatched.length) return semMatched;
    return USERS.student;
  }

  return matched;
}

const DEFAULT_USERS = typeof DB_USERS !== "undefined" ? DB_USERS : {
  student: [],
  faculty: [],
  admin: [{ username: "admin", name: "Administrator", role: "admin", email: "" }]
};

let USERS = loadUsers();

function normalizeClientUsers(data) {
  return {
    student: Array.isArray(data?.student) ? data.student.map(sanitizeClientUser) : [],
    faculty: Array.isArray(data?.faculty) ? data.faculty.map(sanitizeClientUser) : [],
    admin: Array.isArray(data?.admin) ? data.admin.map(sanitizeClientUser) : []
  };
}

function sanitizeClientUser(user) {
  const { password, passwordHash, ...safe } = user || {};
  if (safe && safe.role === "student") {
    safe.course = safe.course || "Bachelor of Computer Applications (BCA)";
    safe.courseYear = safe.courseYear || "";
    safe.semester = safe.semester || "3rd Semester";
    safe.division = safe.division ? (safe.division === "Section A" || safe.division === "Division A" ? "Div A" : (safe.division === "Section B" || safe.division === "Division B" ? "Div B" : safe.division)) : "Div A";
    safe.languageChoice = safe.languageChoice || "";
    safe.mathChoice = safe.mathChoice || "Mathematics";
  }
  if (safe && safe.role === "faculty") {
    safe.department = safe.department || "Department of Computer Science & Applications";
    safe.email = safe.email || (safe.username ? `${safe.username}@smartportal.edu` : "faculty@smartportal.edu");
  }
  return safe;
}

function loadUsers() {
  const saved = localStorage.getItem("smartPortalUsers");
  if (saved) {
    try {
      return normalizeClientUsers(JSON.parse(saved));
    } catch { }
  }
  return normalizeClientUsers(DEFAULT_USERS);
}

function saveUsers() {
  localStorage.setItem("smartPortalUsers", JSON.stringify(normalizeClientUsers(USERS)));
}

async function hydrateUsersFromServer() {
  try {
    const saved = localStorage.getItem("smartPortalUsers");
    if (saved) {
      const parsed = JSON.parse(saved);
      const hasLocalAccounts = ["student", "faculty", "admin"].some(role =>
        Array.isArray(parsed?.[role]) && parsed[role].length > 0
      );
      if (hasLocalAccounts) {
        await fetch(`${API_BASE_URL}/api/users/migrate`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ users: parsed })
        });
      }
    }

    const response = await fetch(`${API_BASE_URL}/api/users/public`);
    const data = await response.json();
    if (!response.ok || !data.success) throw new Error(data.message || "Unable to load database users.");
    USERS = normalizeClientUsers({
      student: data.users.filter(u => u.role === "student"),
      faculty: data.users.filter(u => u.role === "faculty"),
      admin: data.users.filter(u => u.role === "admin")
    });
    saveUsers();
  } catch (error) {
    console.warn("Database sync unavailable:", error.message);
  }
}

async function createUserOnServer(userData) {
  const response = await fetch(`${API_BASE_URL}/api/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData)
  });
  const data = await response.json();
  if (!response.ok || !data.success) throw new Error(data.message || "Unable to create account.");
  return data.user;
}

async function updateUserOnServer(role, oldUsername, userData) {
  const response = await fetch(`${API_BASE_URL}/api/users/${encodeURIComponent(role)}/${encodeURIComponent(oldUsername)}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData)
  });
  const data = await response.json();
  if (!response.ok || !data.success) throw new Error(data.message || "Unable to update account.");
  return data.user;
}

async function deleteUserOnServer(role, username) {
  const response = await fetch(`${API_BASE_URL}/api/users/${encodeURIComponent(role)}/${encodeURIComponent(username)}`, {
    method: "DELETE"
  });
  const data = await response.json();
  if (!response.ok || !data.success) throw new Error(data.message || "Unable to delete account.");
  return data;
}

async function loginOnServer(role, username, password) {
  const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ role, username, password })
  });
  const data = await response.json();
  if (!response.ok || !data.success) throw new Error(data.message || "Invalid username or password.");
  return data.user;
}

async function removeUserAccount(role, username) {
  const target = role === "student" ? "student" : "faculty";
  const user = USERS[target].find(item => item.username.toLowerCase() === username.toLowerCase());
  if (!user) return false;

  await deleteUserOnServer(role, username);
  USERS[target] = USERS[target].filter(item => item.username.toLowerCase() !== username.toLowerCase());
  if (target === "student") {
    if (ACADEMIC.students[username]) delete ACADEMIC.students[username];
    Object.keys(ACADEMIC.students).forEach(key => {
      if (key.toLowerCase() === username.toLowerCase()) delete ACADEMIC.students[key];
    });
    ACADEMIC.assignments = ACADEMIC.assignments.filter(entry => entry.student.toLowerCase() !== username.toLowerCase());
  }
  saveUsers();
  saveAcademicData();
  return true;
}

function validateUserInput({ username, password, email, role, subject, currentUsername }) {
  if (role !== "admin" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email || "")) {
    return "Enter a valid email address.";
  }
  if (!/^[A-Za-z0-9_.-]{4,30}$/.test(username)) {
    const field = "Username";
    return `${field} must be 4–30 letters, numbers, dot, dash or underscore.`;
  }
  if (password && password.length < 6) {
    return "Password must contain at least 6 characters.";
  }
  if (role === "faculty" && !subject) {
    return "Please select a subject for the faculty member.";
  }

  const duplicateCheck = USERS[role].some(u => {
    if (currentUsername && u.username.toLowerCase() === currentUsername.toLowerCase()) return false;
    return u.username.toLowerCase() === username.toLowerCase();
  });

  if (duplicateCheck ||
    USERS[(role === "student" ? "faculty" : "student")].some(u => u.username.toLowerCase() === username.toLowerCase()) ||
    USERS.admin.some(u => u.username.toLowerCase() === username.toLowerCase())) {
    return "That username is already in use.";
  }

  if (email) {
    const normEmail = email.trim().toLowerCase();
    const emailCheck = ["student", "faculty", "admin"].some(r =>
      USERS[r].some(u => {
        if (currentUsername && u.username.toLowerCase() === currentUsername.toLowerCase()) return false;
        return (u.email || "").trim().toLowerCase() === normEmail;
      })
    );
    if (emailCheck) return "That email address is already registered.";
  }
  return "";
}

let adminNotice = { text: "", type: "success" };
let adminNoticeTimer = null;

function getAdminNoticeMarkup() {
  if (!adminNotice.text) return "";
  return `<div class="admin-feedback ${adminNotice.type}">${adminNotice.text}</div>`;
}

function setAdminNotice(text, type = "success") {
  adminNotice = { text, type };
  if (adminNoticeTimer) clearTimeout(adminNoticeTimer);
  adminNoticeTimer = setTimeout(() => {
    resetAdminNotice();
    const feedbackEl = document.querySelector(".admin-feedback");
    if (feedbackEl) {
      feedbackEl.style.transition = "opacity 0.4s ease, max-height 0.4s ease, margin 0.4s ease, padding 0.4s ease";
      feedbackEl.style.opacity = "0";
      feedbackEl.style.maxHeight = "0";
      feedbackEl.style.margin = "0";
      feedbackEl.style.padding = "0";
      setTimeout(() => {
        if (feedbackEl && feedbackEl.parentNode) {
          feedbackEl.remove();
        }
      }, 400);
    }
  }, 1000);
}

function resetAdminNotice() {
  adminNotice = { text: "", type: "success" };
}

const DEFAULT_ACADEMIC = {
  students: {},
  notices: [],
  timetable: [],
  timetableHeader: {},
  customBreakRows: {},
  assignments: [],
  notes: [],
  deletedAssignments: [],
  dailyAttendance: [],
  subjectMarksConfig: {}
};

let ACADEMIC = loadAcademicData();

function loadAcademicData() {
  const saved = localStorage.getItem("smartPortalAcademic");
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      return {
        students: parsed.students && typeof parsed.students === "object" ? parsed.students : {},
        notices: Array.isArray(parsed.notices) ? parsed.notices : [],
        timetable: Array.isArray(parsed.timetable) ? parsed.timetable : [],
        timetableHeader: parsed.timetableHeader && typeof parsed.timetableHeader === "object" ? parsed.timetableHeader : {},
        customBreakRows: parsed.customBreakRows && typeof parsed.customBreakRows === "object" ? parsed.customBreakRows : {},
        assignments: Array.isArray(parsed.assignments) ? parsed.assignments : [],
        notes: Array.isArray(parsed.notes) ? parsed.notes : [],
        deletedAssignments: Array.isArray(parsed.deletedAssignments) ? parsed.deletedAssignments : [],
        dailyAttendance: Array.isArray(parsed.dailyAttendance) ? parsed.dailyAttendance : [],
        subjectMarksConfig: parsed.subjectMarksConfig && typeof parsed.subjectMarksConfig === "object" ? parsed.subjectMarksConfig : {}
      };
    } catch { }
  }
  return JSON.parse(JSON.stringify(DEFAULT_ACADEMIC));
}

function getSubjectMarksConfig(subjectId) {
  if (!ACADEMIC.subjectMarksConfig) ACADEMIC.subjectMarksConfig = {};
  if (!ACADEMIC.subjectMarksConfig[subjectId]) {
    ACADEMIC.subjectMarksConfig[subjectId] = { maxInternal1: 20, maxInternal2: 20 };
  }
  return ACADEMIC.subjectMarksConfig[subjectId];
}

let attendanceFilterDivision = "";
let attendanceFilterSemester = "";
let attendanceFilterCourseYear = "";
let attendanceFilterDate = getTodayISODate();
let isAttendanceDetailsEntered = false;
let activeAttendanceMap = {};
let isAttendanceReadOnly = false;
let attendanceSaveSuccessMessage = "";
let assignmentFilterDivision = "All Divisions";
let assignmentSearchQuery = "";
let editingTimetableIndex = -1;
let activeTimetableDivision = "Div A";
let isTimetableEditMode = false;

function resetAttendanceFilters() {
  if (currentUser && currentUser.role === "faculty" && currentUser.subject) {
    const facultySem = getSemesterForSubject(currentUser.subject);
    const facultyYear = getCourseYearForSemester(facultySem);
    attendanceFilterSemester = facultySem;
    attendanceFilterCourseYear = facultyYear;
  } else {
    attendanceFilterSemester = "";
    attendanceFilterCourseYear = "";
  }
  attendanceFilterDivision = "";
  attendanceFilterDate = getTodayISODate();
  isAttendanceDetailsEntered = false;
  isAttendanceReadOnly = false;
  activeAttendanceMap = {};
  attendanceSaveSuccessMessage = "";
}

function formatDateDDMMYY(dateStr) {
  if (!dateStr) return "";
  const parts = dateStr.split("-");
  if (parts.length === 3) {
    const [yyyy, mm, dd] = parts;
    const yy = yyyy.length === 4 ? yyyy.slice(-2) : yyyy;
    return `${dd}-${mm}-${yy}`;
  }
  return dateStr;
}

function formatTime12h(time24) {
  if (!time24) return "";
  const parts = String(time24).split(":");
  if (parts.length < 2) return time24;
  let hours = parseInt(parts[0], 10);
  const minutes = parts[1];
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  return `${hours}:${minutes} ${ampm}`;
}

function getOrdinalSuffix(day) {
  const d = parseInt(day, 10);
  if (d > 3 && d < 21) return "th";
  switch (d % 10) {
    case 1: return "st";
    case 2: return "nd";
    case 3: return "rd";
    default: return "th";
  }
}

function formatDateDDOrdinalMonth(dateStr) {
  if (!dateStr) return "";
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const str = String(dateStr).trim();
  const parts = str.split(/[-/.]/);

  if (parts.length === 3) {
    let yyyy, mm, dd;
    if (parts[0].length === 4) {
      // YYYY-MM-DD
      [yyyy, mm, dd] = parts;
    } else if (parts[2].length === 4) {
      // DD-MM-YYYY
      [dd, mm, yyyy] = parts;
    } else {
      const p0 = parseInt(parts[0], 10);
      if (p0 > 12) {
        [dd, mm, yyyy] = parts;
      } else {
        [yyyy, mm, dd] = parts;
      }
    }
    const dayNum = parseInt(dd, 10);
    const monthIdx = parseInt(mm, 10) - 1;
    if (!isNaN(dayNum) && dayNum >= 1 && dayNum <= 31 && monthIdx >= 0 && monthIdx < 12) {
      return `${dayNum}${getOrdinalSuffix(dayNum)} ${monthNames[monthIdx]}`;
    }
  }

  const cleanStr = str.includes("T") ? str : str.replace(/(\d{2})-(\d{2})-(\d{4})/, "$3-$2-$1");
  const d = new Date(cleanStr);
  if (!isNaN(d.getTime())) {
    const dayNum = d.getDate();
    const monthName = monthNames[d.getMonth()];
    return `${dayNum}${getOrdinalSuffix(dayNum)} ${monthName}`;
  }

  return dateStr;
}

function getTodayISODate() {
  const d = new Date();
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

function updateStudentOverallAttendance(subjectId) {
  if (!subjectId) return;
  const dailyLogs = ACADEMIC.dailyAttendance || [];
  const subjectLogs = dailyLogs.filter(log => log.subject === subjectId);

  USERS.student.forEach(student => {
    let totalClasses = 0;
    let presentClasses = 0;

    subjectLogs.forEach(log => {
      if (log.records && typeof log.records[student.username] === "string") {
        totalClasses++;
        if (log.records[student.username] === "P") {
          presentClasses++;
        }
      }
    });

    if (totalClasses > 0) {
      const record = ensureStudentRecord(student.username);
      record.attendance[subjectId] = Math.round((presentClasses / totalClasses) * 100);
    }
  });

  saveAcademicData();
}

function saveAcademicData() {
  localStorage.setItem("smartPortalAcademic", JSON.stringify(ACADEMIC));
  window.dispatchEvent(new CustomEvent("academicDataUpdated"));
  updateNoticeBadges();
  updateNotesBadges();
}

function renameStudentAcademicData(oldUsername, newUsername) {
  if (!oldUsername || !newUsername || oldUsername.toLowerCase() === newUsername.toLowerCase()) return;
  const existing = ACADEMIC.students[oldUsername];
  if (existing) {
    ACADEMIC.students[newUsername] = existing;
    delete ACADEMIC.students[oldUsername];
  }
  ACADEMIC.assignments = ACADEMIC.assignments.map(entry => entry.student.toLowerCase() === oldUsername.toLowerCase() ? { ...entry, student: newUsername } : entry);
  saveAcademicData();
}

function getStudentRecord(username) {
  return ACADEMIC.students[username] || { attendance: {}, marks: {}, assignments: [] };
}

function ensureStudentRecord(username) {
  if (!ACADEMIC.students[username]) {
    ACADEMIC.students[username] = { attendance: {}, marks: {}, assignments: [] };
  }
  return ACADEMIC.students[username];
}

function buildStudentOptions() {
  if (!USERS.student.length) return "";
  return USERS.student.map(s => `<option value="${s.username}">${s.name} (${s.username})</option>`).join("");
}

let currentUser = null;
let currentRole = "student";

const $ = id => document.getElementById(id);

function updateLoginUsernameLabel(role) {
  const label = $("loginUsernameLabel");
  const input = $("username");
  if (label && input) {
    label.textContent = "Username";
    input.placeholder = "Enter your username";
    input.setAttribute("autocomplete", "username");
  }
}

const eyeOpenSVG = `<svg class="eye-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M2.2 12s3.5-6 9.8-6 9.8 6 9.8 6-3.5 6-9.8 6-9.8-6-9.8-6Z"></path><circle cx="12" cy="12" r="2.7"></circle></svg>`;
const eyeClosedSVG = `<svg class="eye-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 3l18 18"></path><path d="M10.6 6.2A10.9 10.9 0 0 1 12 6c6.3 0 9.8 6 9.8 6a18.4 18.4 0 0 1-3.3 4.1"></path><path d="M6.2 6.2A18.5 18.5 0 0 0 2.2 12s3.5 6 9.8 6c.5 0 1 0 1.5-.1"></path><path d="M9.9 9.9a3 3 0 0 0 4.2 4.2"></path></svg>`;

function resetLoginForm() {
  if ($("username")) $("username").value = "";
  if ($("password")) {
    $("password").value = "";
    if ($("password").type === "text") {
      $("password").type = "password";
      const toggleBtn = $("togglePassword");
      if (toggleBtn) {
        toggleBtn.classList.remove("is-visible");
        toggleBtn.innerHTML = eyeOpenSVG;
        toggleBtn.setAttribute("aria-label", "Show password");
        toggleBtn.setAttribute("title", "Show password");
      }
    }
  }
  if ($("loginMessage")) {
    $("loginMessage").textContent = "";
    $("loginMessage").className = "message";
  }
}

document.querySelectorAll(".role-tab").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".role-tab").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentRole = btn.dataset.role;
    resetLoginForm();
    updateLoginUsernameLabel(currentRole);
    if ($("username")) $("username").focus();
  });
});
updateLoginUsernameLabel(currentRole);

$("togglePassword").addEventListener("click", () => {
  const p = $("password");
  const button = $("togglePassword");
  const visible = p.type === "password";
  p.type = visible ? "text" : "password";
  button.classList.toggle("is-visible", visible);
  button.innerHTML = visible ? eyeClosedSVG : eyeOpenSVG;
  button.setAttribute("aria-label", visible ? "Hide password" : "Show password");
  button.setAttribute("title", visible ? "Hide password" : "Show password");
});


function populateFacultySubjectOptions(query = "") {
  const select = $("signupSubject");
  if (!select) return;

  const keyword = (query || "").trim().toLowerCase();
  const filtered = SUBJECTS.filter(s =>
    !keyword ||
    s.name.toLowerCase().includes(keyword) ||
    s.short.toLowerCase().includes(keyword) ||
    s.id.toLowerCase().includes(keyword)
  );

  const currentValue = select.value;
  select.innerHTML = `<option value="">Choose your subject / lab</option>` +
    filtered.map(s => `<option value="${s.id}">${s.name}</option>`).join("");

  if (currentValue && filtered.some(s => s.id === currentValue)) {
    select.value = currentValue;
  }
}

const signupModal = document.createElement("div");
signupModal.id = "signupModal";
signupModal.className = "modal-backdrop hidden";
signupModal.innerHTML = `
  <div class="signup-modal">
    <button type="button" id="closeSignup" class="close-modal" aria-label="Close">×</button>
    <div class="modal-icon" id="modalIcon">🎓</div>
    <div class="modal-title">
      <span id="modalRoleLabel">STUDENT ACCOUNT</span>
      <h2 id="modalTitle">Student Signup</h2>
      <p>Create your own username and password to login.</p>
    </div>
    <form id="signupForm">
      <input type="hidden" id="signupRole">
      <input type="hidden" id="signupCurrentUsername">
      <label>Full Name</label>
      <div class="input-wrap"><span class="input-icon">👤</span><input id="signupName" required placeholder="Enter full name"></div>
      <label id="signupUsernameLabel">Username</label>
      <div class="input-wrap"><span class="input-icon">🪪</span><input id="signupUsername" required placeholder="Choose a username"></div>
      <label>Password</label>
      <div class="input-wrap"><span class="input-icon">🔒</span><input id="signupPassword" type="password" required minlength="6" placeholder="Create a password"></div>
      <label>Email Address</label>
      <div class="input-wrap"><span class="input-icon">✉️</span><input id="signupEmail" type="email" required placeholder="Enter your email address" autocomplete="email"></div>
      <div id="facultySubjectField" class="hidden">
        <label>Faculty Subject / Lab</label>
        <div class="subject-search-wrap">
          <input type="text" id="facultySubjectSearch" placeholder="🔍 Search subject or lab..." class="search-input">
          <button type="button" id="btnSearchFacultySubject" class="search-btn"><span>Search</span></button>
        </div>
        <select id="signupSubject" required>
          <option value="">Choose your subject / lab</option>
        </select>
      </div>
      <button class="primary-btn" type="submit"><span class="submit-label">Create Account</span><span class="arrow">→</span></button>
      <p id="signupMessage" class="message"></p>
    </form>
  </div>`;
document.body.appendChild(signupModal);

const editProfileModal = document.createElement("div");
editProfileModal.id = "editProfileModal";
editProfileModal.className = "modal-backdrop hidden";
editProfileModal.innerHTML = `
  <div class="signup-modal edit-profile-modal-card">
    <button type="button" id="closeEditProfile" class="close-modal" aria-label="Close">×</button>
    <div class="modal-icon">👤</div>
    <div class="modal-title">
      <span>STUDENT PROFILE</span>
      <h2>Edit Profile Details</h2>
      <p>Update your details serialwise step by step below.</p>
    </div>
    <form id="editProfileForm">
      <label>1. Full Name</label>
      <div class="input-wrap"><span class="input-icon">👤</span><input id="editProfileName" disabled readonly placeholder="Full name"></div>

      <label>2. Username</label>
      <div class="input-wrap"><span class="input-icon">🪪</span><input id="editProfileUsername" disabled readonly placeholder="Username"></div>

      <label>3. Division</label>
      <div class="input-wrap">
        <select id="editProfileDivision" required>
          <option value="">Select Division</option>
          <option value="Div A">Div A</option>
          <option value="Div B">Div B</option>
        </select>
      </div>

      <label>4. Course Year</label>
      <div class="input-wrap">
        <select id="editProfileCourseYear" required>
          <option value="">Select Course Year</option>
          <option value="1st Year">1st Year</option>
          <option value="2nd Year">2nd Year</option>
          <option value="3rd Year">3rd Year</option>
        </select>
      </div>

      <label>5. Semester</label>
      <div class="input-wrap">
        <select id="editProfileSemester" required>
          <option value="">Select Semester</option>
          <option value="1st Semester">1st Semester</option>
          <option value="2nd Semester">2nd Semester</option>
          <option value="3rd Semester">3rd Semester</option>
          <option value="4th Semester">4th Semester</option>
          <option value="5th Semester">5th Semester</option>
          <option value="6th Semester">6th Semester</option>
        </select>
      </div>

      <label>6. Course</label>
      <div class="input-wrap"><span class="input-icon">🎓</span><input id="editProfileCourse" disabled readonly placeholder="Bachelor of Computer Applications (BCA)"></div>

      <label>7. Email Address</label>
      <div class="input-wrap"><span class="input-icon">✉️</span><input id="editProfileEmail" type="email" disabled readonly placeholder="Email address"></div>

      <label>8. Language Subject Choice</label>
      <div class="input-wrap">
        <select id="editProfileLanguage" required>
          <option value="">Select Language Subject</option>
          <option value="Kannada">Kannada</option>
          <option value="Hindi">Hindi</option>
        </select>
      </div>

      <div id="editProfileMathWrap">
        <label>9. Mathematics / Accountancy Choice (1st Semester Only)</label>
        <div class="input-wrap">
          <select id="editProfileMathChoice">
            <option value="Mathematics">Mathematics</option>
            <option value="Accountancy">Accountancy</option>
          </select>
        </div>
      </div>

      <button class="primary-btn" type="submit"><span>Save Profile Changes</span><span class="arrow">→</span></button>
      <p id="editProfileMessage" class="message"></p>
    </form>
  </div>`;
document.body.appendChild(editProfileModal);

const facultyEditProfileModal = document.createElement("div");
facultyEditProfileModal.id = "facultyEditProfileModal";
facultyEditProfileModal.className = "modal-backdrop hidden";
facultyEditProfileModal.innerHTML = `
  <div class="signup-modal edit-profile-modal-card">
    <button type="button" id="closeFacultyEditProfile" class="close-modal" aria-label="Close">×</button>
    <div class="modal-icon">🧑‍🏫</div>
    <div class="modal-title">
      <span>FACULTY PROFILE</span>
      <h2>Edit Profile Details</h2>
      <p>Update your full name and email address below.</p>
    </div>
    <form id="facultyEditProfileForm">
      <label>1. Full Name</label>
      <div class="input-wrap"><span class="input-icon">👤</span><input id="facultyEditName" type="text" required placeholder="Full Name"></div>

      <label>2. Username</label>
      <div class="input-wrap"><span class="input-icon">🪪</span><input id="facultyEditUsername" disabled readonly placeholder="Username"></div>

      <label>3. Email Address</label>
      <div class="input-wrap"><span class="input-icon">✉️</span><input id="facultyEditEmail" type="email" required placeholder="Email address"></div>

      <button class="primary-btn" type="submit"><span>Save Faculty Profile</span><span class="arrow">→</span></button>
      <p id="facultyEditMessage" class="message"></p>
    </form>
  </div>`;
document.body.appendChild(facultyEditProfileModal);

const API_BASE_URL = window.location.protocol.startsWith("http") ? window.location.origin : "http://127.0.0.1:3000";



function openSignup(role, user = null) {
  $("signupForm").reset();
  if ($("facultySubjectSearch")) $("facultySubjectSearch").value = "";
  populateFacultySubjectOptions("");
  $("signupRole").value = role;
  $("signupCurrentUsername").value = user ? user.username : "";
  $("modalIcon").textContent = role === "student" ? "🎓" : "👨‍🏫";
  $("modalRoleLabel").textContent = role === "student" ? "STUDENT ACCOUNT" : "FACULTY ACCOUNT";
  $("modalTitle").textContent = user ? (role === "student" ? "Edit Student" : "Edit Faculty") : (role === "student" ? "Student Signup" : "Faculty Signup");
  $("facultySubjectField").classList.toggle("hidden", role !== "faculty");
  $("signupSubject").required = role === "faculty";
  $("signupMessage").textContent = "";
  const usernameLabel = $("signupUsernameLabel");
  const usernameInput = $("signupUsername");
  if (usernameLabel && usernameInput) {
    usernameLabel.textContent = "Username";
    usernameInput.placeholder = "Choose a username";
  }
  const signupIntro = signupModal.querySelector('.modal-title p');
  if (signupIntro) {
    signupIntro.textContent = "Create your own username and password to login.";
  }
  $("signupName").value = user ? user.name : "";
  $("signupUsername").value = user ? user.username : "";
  $("signupPassword").value = "";
  $("signupPassword").placeholder = user ? "Leave blank to keep current password" : "Create a password";
  $("signupEmail").value = user ? (user.email || "") : "";
  $("signupSubject").value = user && role === "faculty" ? user.subject : "";
  signupModal.classList.remove("hidden");
  const submitLabel = signupModal.querySelector(".submit-label");
  if (submitLabel) {
    submitLabel.textContent = user ? "Save Changes" : "Create Account";
  }
  setTimeout(() => $("signupName").focus(), 50);
}

$("studentSignupBtn").addEventListener("click", () => openSignup("student"));
$("facultySignupBtn").addEventListener("click", () => openSignup("faculty"));
$("closeSignup").addEventListener("click", () => signupModal.classList.add("hidden"));
signupModal.addEventListener("click", e => { if (e.target === signupModal) signupModal.classList.add("hidden"); });

const facultySearchInput = $("facultySubjectSearch");
const facultySearchBtn = $("btnSearchFacultySubject");
if (facultySearchInput && facultySearchBtn) {
  const runFacultySubjectSearch = () => populateFacultySubjectOptions(facultySearchInput.value);
  facultySearchBtn.addEventListener("click", runFacultySubjectSearch);
  facultySearchInput.addEventListener("input", runFacultySubjectSearch);
  facultySearchInput.addEventListener("keyup", e => { if (e.key === "Enter") runFacultySubjectSearch(); });
}

$("signupForm").addEventListener("submit", async e => {
  e.preventDefault();
  const role = $("signupRole").value;
  const name = $("signupName").value.trim();
  const username = $("signupUsername").value.trim();
  const password = $("signupPassword").value;
  const email = $("signupEmail").value.trim().toLowerCase();
  const subject = role === "faculty" ? $("signupSubject").value : null;
  const currentUsername = $("signupCurrentUsername").value || null;

  if (!currentUsername && !password) {
    $("signupMessage").textContent = "Password is required.";
    $("signupMessage").className = "message error";
    return;
  }

  const error = validateUserInput({ username, password, email, role, subject, currentUsername });
  if (error) {
    $("signupMessage").textContent = error;
    $("signupMessage").className = "message error";
    return;
  }

  const submitButton = signupModal.querySelector('button[type="submit"]');
  if (submitButton) submitButton.disabled = true;

  try {
    if (currentUsername) {
      const existing = USERS[role].find(u => u.username.toLowerCase() === currentUsername.toLowerCase());
      if (!existing) throw new Error("Could not find the user to update.");

      const updated = await updateUserOnServer(role, currentUsername, {
        name, newUsername: username, email, subject, password
      });

      if (role === "student" && currentUsername.toLowerCase() !== username.toLowerCase()) {
        renameStudentAcademicData(currentUsername, username);
      }
      USERS[role] = USERS[role].map(u => u.id === existing.id || u.username.toLowerCase() === currentUsername.toLowerCase() ? updated : u);
      saveUsers();
      $("signupMessage").textContent = "Account updated successfully.";
      $("signupMessage").className = "message success";
    } else {
      const created = await createUserOnServer({
        name, username, password, email, role, subject,
        division: "Div A",
        semester: "3rd Semester",
        courseYear: "2nd Year",
        course: "Bachelor of Computer Applications (BCA)",
        languageChoice: "",
        mathChoice: "Mathematics"
      });
      USERS[role].push(created);
      saveUsers();
      $("signupMessage").textContent = "Account created successfully. You can now sign in.";
      $("signupMessage").className = "message success";
      $("username").value = username;
      $("password").value = "";
      document.querySelectorAll(".role-tab").forEach(b => b.classList.toggle("active", b.dataset.role === role));
      currentRole = role;
    }

    setTimeout(() => signupModal.classList.add("hidden"), 900);
  } catch (error) {
    console.error("Account save error:", error);
    $("signupMessage").textContent = error.message || "Unable to save account.";
    $("signupMessage").className = "message error";
  } finally {
    if (submitButton) submitButton.disabled = false;
  }
});

$("loginForm").addEventListener("submit", async e => {
  e.preventDefault();
  const username = $("username").value.trim();
  const password = $("password").value;
  const submitButton = $("loginForm").querySelector('button[type="submit"]');
  if (submitButton) submitButton.disabled = true;

  try {
    const user = await loginOnServer(currentRole, username, password);
    currentUser = user;
    const roleList = USERS[currentRole] || [];
    const knownIndex = roleList.findIndex(u => u.username.toLowerCase() === user.username.toLowerCase());
    if (knownIndex >= 0) roleList[knownIndex] = user;
    else roleList.push(user);
    saveUsers();
    sessionStorage.setItem("portalUser", JSON.stringify(user));
    openPortal();
  } catch (error) {
    $("loginMessage").textContent = error.message || "Unable to sign in.";
    $("loginMessage").className = "message error";
  } finally {
    if (submitButton) submitButton.disabled = false;
  }
});

$("logoutBtn").addEventListener("click", logout);
$("mobileMenu").addEventListener("click", () => document.querySelector(".sidebar").classList.toggle("open"));

function openPortal() {
  if (currentUser && currentUser.role === "faculty") {
    resetAttendanceFilters();
  }
  $("loginPage").classList.add("hidden");
  $("app").classList.remove("hidden");
  $("userName").textContent = currentUser.name;
  $("userRole").textContent = roleLabel(currentUser.role, currentUser.subject);
  $("userAvatar").textContent = (currentUser.name || "U").charAt(0).toUpperCase();

  const mobileBtn = $("mobileMenu");
  const sidebar = document.querySelector(".sidebar");
  const backdrop = $("sidebarBackdrop");

  const closeMobileSidebar = () => {
    if (sidebar) sidebar.classList.remove("open", "active");
    if (backdrop) backdrop.classList.add("hidden");
  };

  if (mobileBtn && sidebar) {
    mobileBtn.onclick = (e) => {
      e.stopPropagation();
      sidebar.classList.toggle("open");
      sidebar.classList.toggle("active");
      if (backdrop) {
        backdrop.classList.toggle("hidden", !sidebar.classList.contains("active"));
      }
    };
  }

  if (backdrop) {
    backdrop.onclick = closeMobileSidebar;
  }

  buildNav();
  navigate("dashboard");
}

function roleLabel(role, subject) {
  if (role === "admin") return "Administrator";
  if (role === "faculty") {
    const s = subjectById(subject);
    return `${s ? (s.short || s.name) : "BCA"} Faculty`;
  }
  return "Student";
}

function canDeleteNotice(notice, user) {
  if (!user || !notice) return false;
  if (notice.authorRole === "faculty") {
    return user.role === "faculty";
  }
  if (notice.authorRole === "admin") {
    return user.role === "admin";
  }
  if (user.role === "admin") return true;
  if (user.role === "faculty") return true;
  return false;
}

function isFacultyNotice(n) {
  if (!n) return false;
  return n.authorRole === "faculty" || (!n.authorRole && n.target === "student");
}

function getRelevantNoticesForUser(user) {
  if (!user || !ACADEMIC || !Array.isArray(ACADEMIC.notices)) return [];
  return ACADEMIC.notices.filter(n => {
    const target = n.target || "all";
    if (user.role === "admin") {
      return true;
    }
    if (user.role === "faculty") {
      return true;
    }
    if (user.role === "student") {
      return target === "student" || target === "all";
    }
    return true;
  });
}

function getUnreadNoticeCount() {
  if (!currentUser) return 0;
  const relevantNotices = getRelevantNoticesForUser(currentUser);
  const totalCount = relevantNotices.length;
  const key = `seenNoticeCount_${currentUser.username}`;
  const seenCount = parseInt(localStorage.getItem(key) || "0", 10);
  return Math.max(0, totalCount - seenCount);
}

function markNoticesAsSeen() {
  if (!currentUser) return;
  const relevantNotices = getRelevantNoticesForUser(currentUser);
  const totalCount = relevantNotices.length;
  const key = `seenNoticeCount_${currentUser.username}`;
  localStorage.setItem(key, totalCount.toString());
  updateNoticeBadges();
}

function updateNoticeBadges() {
  const unreadCount = getUnreadNoticeCount();
  const sidebarNoticeBtn = document.querySelector('.nav-item[data-page="notices"]');
  if (sidebarNoticeBtn) {
    let badge = sidebarNoticeBtn.querySelector(".nav-badge");
    if (unreadCount > 0) {
      if (!badge) {
        badge = document.createElement("span");
        badge.className = "nav-badge notice-badge";
        sidebarNoticeBtn.appendChild(badge);
      }
      badge.textContent = unreadCount;
    } else if (badge) {
      badge.remove();
    }
  }

  const topbarBadge = $("topbarNoticeBadge");
  if (topbarBadge) {
    topbarBadge.textContent = unreadCount;
    topbarBadge.classList.toggle("hidden", unreadCount === 0);
  }

  const topbarBtn = $("topbarNoticeBtn");
  if (topbarBtn) {
    topbarBtn.classList.toggle("hidden", unreadCount === 0);
  }
}

function getRelevantNotesForUser(user) {
  if (!user || !ACADEMIC || !Array.isArray(ACADEMIC.notes)) return [];
  if (user.role === "admin" || user.role === "faculty") {
    return ACADEMIC.notes;
  }
  if (user.role === "student") {
    const studentSubjects = getSubjectsForStudent(user).map(s => s.id);
    const studentDiv = user.division || "Div A";
    return ACADEMIC.notes.filter(n => {
      const matchSubject = !n.subject || studentSubjects.includes(n.subject) || n.subject === "general";
      const matchDiv = !n.division || n.division === "All Divisions" || n.division === studentDiv;
      return matchSubject && matchDiv;
    });
  }
  return [];
}

function getUnreadNotesCount() {
  if (!currentUser || currentUser.role !== "student") return 0;
  const relevantNotes = getRelevantNotesForUser(currentUser);
  const totalCount = relevantNotes.length;
  const key = `seenNotesCount_${currentUser.username}`;
  const seenCount = parseInt(localStorage.getItem(key) || "0", 10);
  return Math.max(0, totalCount - seenCount);
}

function markNotesAsSeen() {
  if (!currentUser || currentUser.role !== "student") return;
  const relevantNotes = getRelevantNotesForUser(currentUser);
  const totalCount = relevantNotes.length;
  const key = `seenNotesCount_${currentUser.username}`;
  localStorage.setItem(key, totalCount.toString());
  updateNotesBadges();
}

function updateNotesBadges() {
  const unreadCount = getUnreadNotesCount();
  const sidebarNotesBtn = document.querySelector('.nav-item[data-page="notes"]');
  if (sidebarNotesBtn) {
    let badge = sidebarNotesBtn.querySelector(".nav-badge");
    if (unreadCount > 0) {
      if (!badge) {
        badge = document.createElement("span");
        badge.className = "nav-badge notes-badge";
        sidebarNotesBtn.appendChild(badge);
      }
      badge.textContent = unreadCount;
    } else if (badge) {
      badge.remove();
    }
  }
}

function buildNav() {
  const items = currentUser.role === "student"
    ? [["dashboard", "🏠", "Dashboard"], ["profile", "👤", "Profile"], ["attendance", "📊", "Attendance"], ["marks", "📈", "Marks"], ["assignments", "📝", "Assignments"], ["notes", "📚", "Notes"], ["timetable", "🗓️", "Timetable"], ["notices", "📢", "Notices"]]
    : currentUser.role === "faculty"
      ? [["dashboard", "🏠", "Dashboard"], ["attendance", "📊", "Attendance"], ["marks", "📈", "Marks"], ["assignments", "📝", "Assignments"], ["notes", "📚", "Notes"], ["timetable", "🗓️", "Timetable"], ["notices", "📢", "Notices"]]
      : [["dashboard", "🏠", "Dashboard"], ["students", "👥", "Students"], ["faculty", "🧑‍🏫", "Faculty"], ["timetable", "🗓️", "Timetable"], ["notices", "📢", "Notices"]];
  
  const unreadNoticeCount = getUnreadNoticeCount();
  const unreadNotesCount = getUnreadNotesCount();

  $("sidebarNav").innerHTML = items.map(([id, icon, label]) => {
    let badgeMarkup = "";
    if (id === "notices" && unreadNoticeCount > 0) {
      badgeMarkup = `<span class="nav-badge notice-badge">${unreadNoticeCount}</span>`;
    } else if (id === "notes" && unreadNotesCount > 0) {
      badgeMarkup = `<span class="nav-badge notes-badge">${unreadNotesCount}</span>`;
    }
    return `<button class="nav-item" data-page="${id}"><span>${icon}</span><span>${label}</span>${badgeMarkup}</button>`;
  }).join("");

  document.querySelectorAll(".nav-item").forEach(b => b.addEventListener("click", () => navigate(b.dataset.page)));

  const topbarBtn = $("topbarNoticeBtn");
  if (topbarBtn) {
    topbarBtn.onclick = () => navigate("notices");
  }

  updateNoticeBadges();
  updateNotesBadges();
}

function navigate(page) {
  document.querySelectorAll(".nav-item").forEach(b => b.classList.toggle("active", b.dataset.page === page));
  const titles = {
    dashboard: "Dashboard", profile: "My Profile", attendance: "Attendance", marks: "Marks",
    assignments: "Assignments", notes: "Subject Notes", timetable: "Timetable", notices: "Notices", students: "Students", faculty: "Faculty"
  };
  $("pageEyebrow").textContent = roleLabel(currentUser.role, currentUser.subject);
  $("pageTitle").textContent = titles[page] || "Dashboard";
  $("content").innerHTML = pages[page] ? pages[page]() : pages.dashboard();
  initPage(page);

  const sidebar = document.querySelector(".sidebar");
  const backdrop = $("sidebarBackdrop");
  if (sidebar) sidebar.classList.remove("open", "active");
  if (backdrop) backdrop.classList.add("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function initPage(page) {
  if (page === "dashboard" && currentUser && currentUser.role === "faculty") initFacultyDashboardPage();
  if (page === "profile") initProfilePage();
  if (page === "attendance") initAttendancePage();
  if (page === "marks") initMarksPage();
  if (page === "assignments") initAssignmentsPage();
  if (page === "notes") initNotesPage();
  if (page === "notices") initNoticesPage();
  if (page === "timetable") initTimetablePage();
  if (page === "students") initAdminUserManagement("student");
  if (page === "faculty") initAdminUserManagement("faculty");
}

function initFacultyDashboardPage() {
  const btn = $("openFacultyEditProfileBtn");
  if (btn) {
    btn.addEventListener("click", openFacultyEditProfileModal);
  }
  document.querySelectorAll(".nav-action-btn").forEach(b => {
    b.addEventListener("click", () => {
      const target = b.dataset.navTarget;
      if (target) navigate(target);
    });
  });
}

function initProfilePage() {
  const studentBtn = $("openEditProfileBtn");
  if (studentBtn) {
    studentBtn.addEventListener("click", openEditProfileModal);
  }
  const facultyBtn = $("openFacultyEditProfileBtn");
  if (facultyBtn) {
    facultyBtn.addEventListener("click", openFacultyEditProfileModal);
  }

  const statusEl = document.getElementById("profileStatusMessage");
  if (statusEl) {
    setTimeout(() => {
      statusEl.remove();
      clearProfileStatusMessage();
    }, 1500);
  }
}

function getProfileStatusMessage() {
  try {
    const raw = sessionStorage.getItem("profileStatusMessage");
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    sessionStorage.removeItem("profileStatusMessage");
    return parsed;
  } catch {
    sessionStorage.removeItem("profileStatusMessage");
    return null;
  }
}

function setProfileStatusMessage(message, type = "success") {
  sessionStorage.setItem("profileStatusMessage", JSON.stringify({ message, type }));
}

function clearProfileStatusMessage() {
  sessionStorage.removeItem("profileStatusMessage");
}

function openEditProfileModal() {
  if (!currentUser || currentUser.role !== "student") return;
  clearProfileStatusMessage();
  $("editProfileName").value = currentUser.name || "Student Name";
  $("editProfileUsername").value = currentUser.username || "Username";
  $("editProfileDivision").value = currentUser.division || "";
  $("editProfileCourseYear").value = currentUser.courseYear || "1st Year";

  updateEditProfileSemesterOptions($("editProfileCourseYear").value, currentUser.semester);

  $("editProfileCourse").value = currentUser.course || "Bachelor of Computer Applications (BCA)";
  $("editProfileEmail").value = currentUser.email || "Not provided";
  $("editProfileLanguage").value = currentUser.languageChoice || "";
  $("editProfileMathChoice").value = currentUser.mathChoice || "Mathematics";

  $("editProfileMessage").textContent = "";
  $("editProfileMessage").className = "message";
  editProfileModal.classList.remove("hidden");
  setTimeout(() => $("editProfileDivision").focus(), 50);
}

function closeEditProfileModal() {
  editProfileModal.classList.add("hidden");
}

function bindEditProfileEvents() {
  $("closeEditProfile").addEventListener("click", closeEditProfileModal);
  editProfileModal.addEventListener("click", e => { if (e.target === editProfileModal) closeEditProfileModal(); });

  const yearSelect = $("editProfileCourseYear");
  if (yearSelect) {
    yearSelect.addEventListener("change", e => {
      updateEditProfileSemesterOptions(e.target.value, "");
    });
  }

  const semSelect = $("editProfileSemester");
  if (semSelect) {
    semSelect.addEventListener("change", e => {
      const is1st = e.target.value === "1st Semester";
      if ($("editProfileMathWrap")) {
        $("editProfileMathWrap").style.display = is1st ? "block" : "none";
      }
    });
  }

  $("editProfileForm").addEventListener("submit", async e => {
    e.preventDefault();
    const name = currentUser.name || $("editProfileName").value.trim();
    const username = currentUser.username || $("editProfileUsername").value.trim();
    const course = currentUser.course || $("editProfileCourse").value.trim() || "Bachelor of Computer Applications (BCA)";
    const email = currentUser.email || $("editProfileEmail").value.trim().toLowerCase();
    const division = $("editProfileDivision").value.trim();
    const semester = $("editProfileSemester").value.trim();
    const courseYear = $("editProfileCourseYear").value.trim();
    const languageChoice = $("editProfileLanguage").value || "";
    const mathChoice = $("editProfileMathChoice").value || "Mathematics";

    if (!division || !semester || !courseYear || !languageChoice) {
      $("editProfileMessage").textContent = "Please select Division, Semester, Course Year, and Language Subject Choice.";
      $("editProfileMessage").className = "message error";
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      $("editProfileMessage").textContent = "Enter a valid email address.";
      $("editProfileMessage").className = "message error";
      return;
    }

    if (!/^[A-Za-z0-9_.-]{4,30}$/.test(username)) {
      $("editProfileMessage").textContent = "Username must be 4–30 letters, numbers, dot, dash or underscore.";
      $("editProfileMessage").className = "message error";
      return;
    }

    const oldUsername = currentUser.username;
    const usernameConflict = USERS.student.some(u => u.username.toLowerCase() !== oldUsername.toLowerCase() && u.username.toLowerCase() === username.toLowerCase()) ||
      USERS.faculty.some(u => u.username.toLowerCase() === username.toLowerCase()) ||
      USERS.admin.some(u => u.username.toLowerCase() === username.toLowerCase());
    if (usernameConflict) {
      $("editProfileMessage").textContent = "That username is already in use by another account.";
      $("editProfileMessage").className = "message error";
      return;
    }

    const emailConflict = USERS.student.some(u => u.username.toLowerCase() !== oldUsername.toLowerCase() && (u.email || "").toLowerCase() === email) ||
      USERS.faculty.some(u => (u.email || "").toLowerCase() === email);
    if (emailConflict) {
      $("editProfileMessage").textContent = "That email address is already in use by another account.";
      $("editProfileMessage").className = "message error";
      return;
    }

    const submitButton = editProfileModal.querySelector('button[type="submit"]');
    if (submitButton) submitButton.disabled = true;

    try {
      let updated;
      try {
        updated = await updateUserOnServer("student", oldUsername, {
          name,
          newUsername: username,
          email,
          course,
          courseYear,
          semester,
          division,
          languageChoice,
          mathChoice
        });
      } catch (err) {
        console.warn("Server update unavailable, updating locally:", err.message);
        const existing = USERS.student.find(u => u.username.toLowerCase() === oldUsername.toLowerCase()) || currentUser;
        updated = {
          ...existing,
          name,
          username: username,
          email,
          course,
          courseYear,
          semester,
          division,
          languageChoice,
          mathChoice
        };
      }

      // Explicitly guarantee language & math choices on updated user object
      updated.languageChoice = languageChoice;
      updated.mathChoice = mathChoice;

      if (oldUsername.toLowerCase() !== username.toLowerCase()) {
        renameStudentAcademicData(oldUsername, username);
      }

      const index = USERS.student.findIndex(u => u.username.toLowerCase() === oldUsername.toLowerCase() || u.id === currentUser.id);
      if (index >= 0) USERS.student[index] = updated;
      else USERS.student.push(updated);

      saveUsers();
      currentUser = sanitizeClientUser(updated);
      sessionStorage.setItem("portalUser", JSON.stringify(currentUser));

      $("userName").textContent = currentUser.name;
      $("userAvatar").textContent = currentUser.name.charAt(0).toUpperCase();

      setProfileStatusMessage("Profile updated successfully!", "success");
      $("editProfileMessage").textContent = "Profile updated successfully!";
      $("editProfileMessage").className = "message success";

      setTimeout(() => {
        closeEditProfileModal();
        navigate("profile");
      }, 800);
    } catch (error) {
      console.error("Profile update error:", error);
      $("editProfileMessage").textContent = error.message || "Unable to update profile.";
      $("editProfileMessage").className = "message error";
    } finally {
      if (submitButton) submitButton.disabled = false;
    }
  });
}

bindEditProfileEvents();

function openFacultyEditProfileModal() {
  if (!currentUser || currentUser.role !== "faculty") return;
  $("facultyEditName").value = currentUser.name || "";
  $("facultyEditUsername").value = currentUser.username || "";
  $("facultyEditEmail").value = currentUser.email || `${currentUser.username}@smartportal.edu`;
  $("facultyEditMessage").textContent = "";
  $("facultyEditMessage").className = "message";
  const modal = $("facultyEditProfileModal");
  if (modal) modal.classList.remove("hidden");
  setTimeout(() => $("facultyEditName").focus(), 50);
}

function closeFacultyEditProfileModal() {
  const modal = $("facultyEditProfileModal");
  if (modal) modal.classList.add("hidden");
}

function bindFacultyEditProfileEvents() {
  const closeBtn = $("closeFacultyEditProfile");
  const modal = $("facultyEditProfileModal");
  if (closeBtn) closeBtn.addEventListener("click", closeFacultyEditProfileModal);
  if (modal) modal.addEventListener("click", e => { if (e.target === modal) closeFacultyEditProfileModal(); });

  const form = $("facultyEditProfileForm");
  if (form) {
    form.addEventListener("submit", async e => {
      e.preventDefault();
      const name = $("facultyEditName").value.trim();
      const email = $("facultyEditEmail").value.trim().toLowerCase();
      const submitBtn = form.querySelector("button[type='submit']");

      if (!name || !email) {
        $("facultyEditMessage").textContent = "Please fill in all profile fields.";
        $("facultyEditMessage").className = "message error";
        return;
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        $("facultyEditMessage").textContent = "Please enter a valid email address.";
        $("facultyEditMessage").className = "message error";
        return;
      }

      if (submitBtn) submitBtn.disabled = true;

      try {
        currentUser.name = name;
        currentUser.email = email;

        const targetFaculty = (USERS.faculty || []).find(f => f.username.toLowerCase() === currentUser.username.toLowerCase());
        if (targetFaculty) {
          targetFaculty.name = name;
          targetFaculty.email = email;
        }

        saveUsers();
        sessionStorage.setItem("portalUser", JSON.stringify(currentUser));

        try {
          await fetch(`${API_BASE_URL}/api/users/faculty/${encodeURIComponent(currentUser.username)}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email })
          });
        } catch (err) { }

        closeFacultyEditProfileModal();
        $("userName").textContent = currentUser.name;
        $("userAvatar").textContent = currentUser.name.charAt(0).toUpperCase();

        const activeItem = document.querySelector(".nav-item.active");
        const activePage = activeItem ? activeItem.dataset.page : "dashboard";
        navigate(activePage);
      } catch (err) {
        $("facultyEditMessage").textContent = err.message || "Failed to update faculty profile.";
        $("facultyEditMessage").className = "message error";
      } finally {
        if (submitBtn) submitBtn.disabled = false;
      }
    });
  }
}

bindFacultyEditProfileEvents();

function initAdminUserManagement(role) {
  const input = document.querySelector(`[data-user-search="${role}"]`);
  if (input) {
    input.oninput = () => {
      const query = input.value.trim().toLowerCase();
      document.querySelectorAll(`[data-user-row="${role}"]`).forEach(item => {
        const name = (item.dataset.userName || "").toLowerCase();
        const username = (item.dataset.userUsername || "").toLowerCase();
        const matches = !query || name.includes(query) || username.includes(query);
        item.style.display = matches ? "" : "none";
      });
    };
  }

  document.querySelectorAll("[data-remove-user-role]").forEach(button => {
    button.addEventListener("click", () => {
      const userRole = button.dataset.removeUserRole;
      const username = button.dataset.removeUserUsername;
      const name = button.dataset.removeUserName;
      removeUserAccount(userRole, username)
        .then(removed => {
          if (!removed) return;
          setAdminNotice(`${name} was removed from ${userRole === "student" ? "students" : "faculty"}.`, "success");
          navigate(userRole === "student" ? "students" : "faculty");
        })
        .catch(error => setAdminNotice(error.message || "Unable to delete user.", "error"));
    });
  });
}

function recordAverage(values, ids) {
  const numbers = ids.map(id => values[id]).filter(v => typeof v === "number");
  if (!numbers.length) return 0;
  return numbers.reduce((sum, value) => sum + value, 0) / numbers.length;
}

function syncAssignmentsForStudents() {
  if (!ACADEMIC || !Array.isArray(ACADEMIC.assignments) || !ACADEMIC.assignments.length) return;
  if (!Array.isArray(ACADEMIC.deletedAssignments)) ACADEMIC.deletedAssignments = [];

  const groupMap = new Map();
  const assignmentGroups = [];

  ACADEMIC.assignments.forEach(a => {
    const key = `${a.subject}___${a.title}___${a.due}`;
    if (!groupMap.has(key)) {
      groupMap.set(key, a);
      assignmentGroups.push(a);
    }
  });

  let added = false;
  assignmentGroups.forEach(group => {
    const targetStudents = getStudentsForSubject(group.subject);
    targetStudents.forEach(st => {
      if (!st || !st.username) return;
      const deleteKey = `${String(st.username).toLowerCase()}___${group.subject}___${group.title}___${group.due}`;
      if (ACADEMIC.deletedAssignments.includes(deleteKey)) return;

      const exists = ACADEMIC.assignments.some(
        a => a.subject === group.subject &&
          a.title === group.title &&
          a.due === group.due &&
          String(a.student).toLowerCase() === String(st.username).toLowerCase()
      );
      if (!exists) {
        ACADEMIC.assignments.push({
          id: group.id || ("assign_" + Date.now()),
          student: st.username,
          subject: group.subject,
          title: group.title,
          description: group.description || "",
          fileName: group.fileName || "",
          fileData: group.fileData || "",
          due: group.due,
          status: "Pending",
          submittedDate: ""
        });
        added = true;
      }
    });
  });

  if (added) {
    saveAcademicData();
  }
}

function getStudentAssignments(username) {
  syncAssignmentsForStudents();
  if (!username) return [];
  return ACADEMIC.assignments.filter(a => String(a.student).toLowerCase() === String(username).toLowerCase());
}

function getSubjectAssignments(subject) {
  syncAssignmentsForStudents();
  return ACADEMIC.assignments.filter(a => a.subject === subject);
}

function getNoticeList() {
  if (!ACADEMIC || !Array.isArray(ACADEMIC.notices)) return [];
  if (!currentUser) {
    return ACADEMIC.notices.slice().sort((a, b) => (b.date || "").localeCompare(a.date || ""));
  }
  return getRelevantNoticesForUser(currentUser)
    .slice()
    .sort((a, b) => (b.date || "").localeCompare(a.date || ""));
}

function parseTimeStartMinutes(timeStr) {
  if (!timeStr) return 0;
  const startPart = timeStr.split("-")[0].trim();
  const parts = startPart.split(":");
  let hours = parseInt(parts[0], 10) || 0;
  let minutes = parseInt(parts[1], 10) || 0;

  if (hours >= 1 && hours <= 7) {
    hours += 12;
  }
  return hours * 60 + minutes;
}

function sortTimingsSerialwise(timesArray) {
  return timesArray.slice().sort((a, b) => parseTimeStartMinutes(a) - parseTimeStartMinutes(b));
}

function isFacultyOwnEntry(entry, facultyUser) {
  if (!facultyUser || facultyUser.role !== "faculty") return true;
  if (!facultyUser.subject) return true;

  if (entry.subject && entry.subject === facultyUser.subject) return true;
  if (entry.faculty && entry.faculty === facultyUser.username) return true;

  const fSub = subjectById(facultyUser.subject);
  if (fSub) {
    const text = (entry.subjectText || "").toLowerCase();
    const subName = (fSub.name || "").toLowerCase();
    const subShort = (fSub.short || "").toLowerCase();
    if ((subName && text.includes(subName)) || (subShort && text.includes(subShort))) return true;
  }

  return false;
}

function getTimetableEntries(division = activeTimetableDivision) {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const isMaster = division === "Master View" || division === "All Divisions";
  const targetDiv = (division || "Div A").replace("Section ", "Div ").replace("Division ", "Div ");

  return ACADEMIC.timetable
    .filter(e => {
      if (isMaster) return true;
      const entryDiv = (e.division || "Div A").replace("Section ", "Div ").replace("Division ", "Div ");
      return entryDiv === targetDiv;
    })
    .slice()
    .sort((a, b) => {
      const dayDiff = days.indexOf(a.day) - days.indexOf(b.day);
      if (dayDiff !== 0) return dayDiff;
      return parseTimeStartMinutes(a.time) - parseTimeStartMinutes(b.time);
    });
}

function initAttendancePage() {
  // Student view interactive date toggles
  document.querySelectorAll(".student-date-row").forEach(row => {
    row.addEventListener("click", e => {
      const targetId = row.dataset.target;
      if (!targetId) return;

      const detailRow = document.getElementById(targetId);
      if (!detailRow) return;

      const toggleBtn = row.querySelector(".btn-date-toggle");
      const isExpanded = detailRow.style.display !== "none";

      if (isExpanded) {
        detailRow.style.display = "none";
        row.classList.remove("expanded");
        if (toggleBtn) toggleBtn.setAttribute("aria-expanded", "false");
      } else {
        detailRow.style.display = "table-row";
        row.classList.add("expanded");
        if (toggleBtn) toggleBtn.setAttribute("aria-expanded", "true");
      }
    });
  });

  if (currentUser.role !== "faculty") return;

  const divSelect = $("attDivisionSelect");
  if (divSelect) {
    divSelect.addEventListener("change", e => {
      attendanceFilterDivision = e.target.value;
      isAttendanceDetailsEntered = false;
      activeAttendanceMap = {};
      attendanceSaveSuccessMessage = "";
      navigate("attendance");
    });
  }

  const semSelect = $("attSemesterSelect");
  if (semSelect) {
    semSelect.addEventListener("change", e => {
      attendanceFilterSemester = e.target.value;
      isAttendanceDetailsEntered = false;
      activeAttendanceMap = {};
      attendanceSaveSuccessMessage = "";
      navigate("attendance");
    });
  }

  const yearSelect = $("attCourseYearSelect");
  if (yearSelect) {
    yearSelect.addEventListener("change", e => {
      attendanceFilterCourseYear = e.target.value;
      const validSems = getSemestersForCourseYear(attendanceFilterCourseYear);
      if (!validSems.includes(attendanceFilterSemester)) {
        attendanceFilterSemester = "";
      }
      isAttendanceDetailsEntered = false;
      activeAttendanceMap = {};
      attendanceSaveSuccessMessage = "";
      const sSelect = $("attSemesterSelect");
      if (sSelect) {
        sSelect.innerHTML = `<option value="">-- Select Semester --</option>` +
          validSems.map(s => `<option value="${s}" ${attendanceFilterSemester === s ? "selected" : ""}>${s}</option>`).join("");
      }
      navigate("attendance");
    });
  }

  const dateInput = $("attDateInput");
  if (dateInput) {
    dateInput.addEventListener("change", e => {
      attendanceFilterDate = e.target.value || getTodayISODate();
      isAttendanceDetailsEntered = false;
      activeAttendanceMap = {};
      attendanceSaveSuccessMessage = "";
      navigate("attendance");
    });
  }

  const submitBtn = $("submitAttDetailsBtn");
  if (submitBtn) {
    submitBtn.addEventListener("click", () => {
      const err = $("attFilterErrorMsg");
      if (!attendanceFilterDivision || !attendanceFilterDate) {
        if (err) {
          err.textContent = "⚠️ Please select Division and Particular Date to view attendance.";
          err.style.display = "block";
        }
        return;
      }
      if (err) err.style.display = "none";
      attendanceSaveSuccessMessage = "";
      isAttendanceReadOnly = false;
      isAttendanceDetailsEntered = true;
      navigate("attendance");
    });
  }

  const resetBtn = $("resetAttDetailsBtn");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      resetAttendanceFilters();
      navigate("attendance");
    });
  }

  // Handle P & A button clicks
  document.querySelectorAll(".btn-pa").forEach(btn => {
    btn.addEventListener("click", () => {
      if (isAttendanceReadOnly) return;
      const username = btn.dataset.username;
      const status = btn.dataset.status; // "P" or "A"
      activeAttendanceMap[username] = status;

      const parent = btn.closest(".pa-toggle-group");
      if (parent) {
        parent.querySelectorAll(".btn-pa").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
      }
    });
  });

  // Save Daily Attendance
  const saveBtn = $("saveDailyAttendanceBtn");
  if (saveBtn) {
    saveBtn.addEventListener("click", () => {
      if (isAttendanceReadOnly) return;

      const facultySem = getSemesterForSubject(currentUser.subject);
      const facultyYear = getCourseYearForSemester(facultySem);

      const currentStudents = USERS.student.filter(s => {
        const studentSem = s.semester || "1st Semester";
        const studentYear = s.courseYear || "1st Year";
        const studentDiv = s.division || "Div A";

        const matchSem = studentSem === facultySem;
        const matchYear = studentYear === facultyYear;
        const matchDiv = !attendanceFilterDivision || studentDiv === attendanceFilterDivision;
        return matchSem && matchYear && matchDiv;
      });

      const hasUnselected = currentStudents.some(s => !activeAttendanceMap[s.username] || (activeAttendanceMap[s.username] !== "P" && activeAttendanceMap[s.username] !== "A"));
      const msg = $("attSaveMessage");
      if (hasUnselected) {
        if (msg) {
          msg.textContent = "⚠️ Please select attendance status (P or A) for all students before saving.";
          msg.className = "message error";
        }
        return;
      }

      if (!ACADEMIC.dailyAttendance) ACADEMIC.dailyAttendance = [];
      const isoDate = attendanceFilterDate;
      const formattedDate = formatDateDDMMYY(isoDate);

      let existingIndex = ACADEMIC.dailyAttendance.findIndex(entry =>
        entry.subject === currentUser.subject &&
        entry.isoDate === isoDate &&
        entry.division === attendanceFilterDivision &&
        entry.semester === attendanceFilterSemester &&
        entry.courseYear === attendanceFilterCourseYear
      );

      const recordToSave = {
        id: existingIndex >= 0 ? ACADEMIC.dailyAttendance[existingIndex].id : "att-" + Date.now(),
        date: formattedDate,
        isoDate: isoDate,
        subject: currentUser.subject,
        division: attendanceFilterDivision,
        semester: attendanceFilterSemester,
        courseYear: attendanceFilterCourseYear,
        records: { ...activeAttendanceMap },
        updatedAt: new Date().toISOString()
      };

      if (existingIndex >= 0) {
        ACADEMIC.dailyAttendance[existingIndex] = recordToSave;
      } else {
        ACADEMIC.dailyAttendance.push(recordToSave);
      }

      updateStudentOverallAttendance(currentUser.subject);
      saveAcademicData();

      const successMsg = `✅ Daily attendance for ${formattedDate} saved successfully!`;
      resetAttendanceFilters();
      attendanceSaveSuccessMessage = successMsg;
      navigate("attendance");

      if (window.saveSuccessTimer) clearTimeout(window.saveSuccessTimer);
      window.saveSuccessTimer = setTimeout(() => {
        attendanceSaveSuccessMessage = "";
        const msgEl = document.getElementById("attFilterSuccessMsg");
        if (msgEl) {
          msgEl.style.display = "none";
        }
      }, 1500);
    });
  }

  // Load past log button (Read-Only Mode)
  document.querySelectorAll(".load-log-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      isAttendanceReadOnly = true;
      isAttendanceDetailsEntered = true;
      attendanceFilterDate = btn.dataset.date || getTodayISODate();
      attendanceFilterDivision = btn.dataset.div || "";
      attendanceFilterSemester = btn.dataset.sem || "";
      attendanceFilterCourseYear = btn.dataset.year || "";
      navigate("attendance");
      setTimeout(() => {
        const entryPanel = document.querySelector(".attendance-panel");
        if (entryPanel) entryPanel.scrollIntoView({ behavior: "smooth" });
      }, 50);
    });
  });

  // Edit past log button (Editing Mode)
  document.querySelectorAll(".edit-log-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      isAttendanceReadOnly = false;
      isAttendanceDetailsEntered = true;
      if (btn.dataset.date) attendanceFilterDate = btn.dataset.date;
      if (btn.dataset.div) attendanceFilterDivision = btn.dataset.div;
      if (btn.dataset.sem) attendanceFilterSemester = btn.dataset.sem;
      if (btn.dataset.year) attendanceFilterCourseYear = btn.dataset.year;
      navigate("attendance");
      setTimeout(() => {
        const entryPanel = document.querySelector(".attendance-panel");
        if (entryPanel) entryPanel.scrollIntoView({ behavior: "smooth" });
      }, 50);
    });
  });

  // Delete past log button
  document.querySelectorAll(".delete-log-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const dDate = btn.dataset.date;
      const dDiv = btn.dataset.div;
      const dSem = btn.dataset.sem;
      const dYear = btn.dataset.year;

      if (confirm("Are you sure you want to delete this attendance record?")) {
        ACADEMIC.dailyAttendance = (ACADEMIC.dailyAttendance || []).filter(entry =>
          !(entry.subject === currentUser.subject &&
            entry.isoDate === dDate &&
            entry.division === dDiv &&
            entry.semester === dSem &&
            entry.courseYear === dYear)
        );
        updateStudentOverallAttendance(currentUser.subject);
        saveAcademicData();
        navigate("attendance");
      }
    });
  });

  // Clear all past logs button
  const deleteAllBtn = $("deleteAllLogsBtn");
  if (deleteAllBtn) {
    deleteAllBtn.addEventListener("click", () => {
      const subjectObj = subjectById(currentUser ? currentUser.subject : "") || { name: "this subject" };
      if (confirm(`Are you sure you want to delete ALL stored attendance records for ${subjectObj.name}?`)) {
        ACADEMIC.dailyAttendance = (ACADEMIC.dailyAttendance || []).filter(entry => entry.subject !== currentUser.subject);
        updateStudentOverallAttendance(currentUser.subject);
        saveAcademicData();
        navigate("attendance");
      }
    });
  }
}

function initMarksPage() {
  if (currentUser.role !== "faculty") return;

  const configForm = $("maxMarksConfigForm");
  if (configForm) {
    configForm.addEventListener("submit", e => {
      e.preventDefault();
      const m1 = parseInt($("maxInternal1Select").value, 10) || 20;
      const m2 = parseInt($("maxInternal2Select").value, 10) || 20;
      if (!ACADEMIC.subjectMarksConfig) ACADEMIC.subjectMarksConfig = {};
      ACADEMIC.subjectMarksConfig[currentUser.subject] = { maxInternal1: m1, maxInternal2: m2 };
      saveAcademicData();
      navigate("marks");
    });
  }

  // Live total calculation when typing marks in table
  document.querySelectorAll(".marks-input-field").forEach(input => {
    input.addEventListener("input", () => {
      const username = input.dataset.username;
      if (!username) return;
      const row = document.querySelector(`tr[data-student-row="${username}"]`);
      if (!row) return;

      const i1Inp = row.querySelector(`input[data-field="internal1"]`);
      const i2Inp = row.querySelector(`input[data-field="internal2"]`);
      const assignInp = row.querySelector(`input[data-field="assignment"]`);

      const config = getSubjectMarksConfig(currentUser.subject);
      const maxI1 = config.maxInternal1 || 20;
      const maxI2 = config.maxInternal2 || 20;
      const maxTotal = maxI1 + maxI2 + 10;

      const i1 = i1Inp && i1Inp.value.trim() !== "" ? parseFloat(i1Inp.value) : NaN;
      const i2 = i2Inp && i2Inp.value.trim() !== "" ? parseFloat(i2Inp.value) : NaN;
      const assign = assignInp && assignInp.value.trim() !== "" ? parseFloat(assignInp.value) : NaN;

      const badge = document.getElementById(`total-badge-${username}`);
      if (badge) {
        if (!isNaN(i1) || !isNaN(i2) || !isNaN(assign)) {
          const tot = (isNaN(i1) ? 0 : i1) + (isNaN(i2) ? 0 : i2) + (isNaN(assign) ? 0 : assign);
          badge.innerHTML = `<strong>${tot}</strong> / ${maxTotal}`;
        } else {
          badge.textContent = "Not set";
        }
      }
    });
  });

  // Batch Form Submit
  const batchForm = $("marksBatchForm");
  if (batchForm) {
    batchForm.addEventListener("submit", event => {
      event.preventDefault();
      const config = getSubjectMarksConfig(currentUser.subject);
      const maxI1 = config.maxInternal1 || 20;
      const maxI2 = config.maxInternal2 || 20;

      const facultySem = getSemesterForSubject(currentUser.subject);
      const facultyYear = getCourseYearForSemester(facultySem);

      const filteredStudents = USERS.student.filter(s => {
        const studentSem = s.semester || "1st Semester";
        const studentYear = s.courseYear || "1st Year";
        return studentSem === facultySem && studentYear === facultyYear;
      });

      let hasError = false;
      const msg = $("marksBatchMessage");

      filteredStudents.forEach(s => {
        if (hasError) return;
        const row = document.querySelector(`tr[data-student-row="${s.username}"]`);
        if (!row) return;

        const i1Inp = row.querySelector(`input[data-field="internal1"]`);
        const i2Inp = row.querySelector(`input[data-field="internal2"]`);
        const assignInp = row.querySelector(`input[data-field="assignment"]`);

        const i1Val = i1Inp ? i1Inp.value.trim() : "";
        const i2Val = i2Inp ? i2Inp.value.trim() : "";
        const assignVal = assignInp ? assignInp.value.trim() : "";

        const i1 = i1Val !== "" ? parseFloat(i1Val) : null;
        const i2 = i2Val !== "" ? parseFloat(i2Val) : null;
        const assign = assignVal !== "" ? parseFloat(assignVal) : null;

        if (i1 !== null && (isNaN(i1) || i1 < 0 || i1 > maxI1)) {
          if (msg) {
            msg.textContent = `⚠️ 1st Internal mark for ${s.name} must be between 0 and ${maxI1}.`;
            msg.className = "message error";
          }
          hasError = true;
          return;
        }

        if (i2 !== null && (isNaN(i2) || i2 < 0 || i2 > maxI2)) {
          if (msg) {
            msg.textContent = `⚠️ 2nd Internal mark for ${s.name} must be between 0 and ${maxI2}.`;
            msg.className = "message error";
          }
          hasError = true;
          return;
        }

        if (assign !== null && (isNaN(assign) || assign < 0 || assign > 10)) {
          if (msg) {
            msg.textContent = `⚠️ Assignment mark for ${s.name} must be between 0 and 10.`;
            msg.className = "message error";
          }
          hasError = true;
          return;
        }
      });

      if (hasError) return;

      filteredStudents.forEach(s => {
        const row = document.querySelector(`tr[data-student-row="${s.username}"]`);
        if (!row) return;

        const i1Inp = row.querySelector(`input[data-field="internal1"]`);
        const i2Inp = row.querySelector(`input[data-field="internal2"]`);
        const assignInp = row.querySelector(`input[data-field="assignment"]`);

        const i1Val = i1Inp ? i1Inp.value.trim() : "";
        const i2Val = i2Inp ? i2Inp.value.trim() : "";
        const assignVal = assignInp ? assignInp.value.trim() : "";

        const i1 = i1Val !== "" ? parseFloat(i1Val) : null;
        const i2 = i2Val !== "" ? parseFloat(i2Val) : null;
        const assign = assignVal !== "" ? parseFloat(assignVal) : null;

        const record = ensureStudentRecord(s.username);
        record.marks[currentUser.subject] = {
          internal1: i1,
          internal2: i2,
          assignment: assign,
          maxInternal1: maxI1,
          maxInternal2: maxI2,
          maxAssignment: 10
        };
      });

      saveAcademicData();

      if (msg) {
        msg.textContent = "✅ All student marks saved successfully!";
        msg.className = "message success";
      }

      setTimeout(() => navigate("marks"), 800);
    });
  }
}

function initAssignmentsPage() {
  if (currentUser.role === "faculty") {
    const form = $("assignmentForm");
    if (form) {
      form.addEventListener("submit", event => {
        event.preventDefault();
        const title = $("assignmentTitle").value.trim();
        const description = $("assignmentDescription") ? $("assignmentDescription").value.trim() : "";
        const due = $("assignmentDue").value;
        const status = $("assignmentStatus").value;
        const fileInput = $("assignmentDocFile");

        if (!title || !due) {
          $("assignmentMessage").textContent = "Fill in title and submission date.";
          $("assignmentMessage").className = "message error";
          return;
        }
        const targetStudents = getStudentsForSubject(currentUser.subject);
        if (!targetStudents.length) {
          $("assignmentMessage").textContent = "No students found for this subject.";
          $("assignmentMessage").className = "message error";
          return;
        }

        const saveAndNavigate = (fileName, fileData) => {
          const assignId = "assign_" + Date.now();
          const todayISO = getTodayISODate();
          if (!Array.isArray(ACADEMIC.deletedAssignments)) ACADEMIC.deletedAssignments = [];
          targetStudents.forEach(s => {
            const deleteKey = `${String(s.username).toLowerCase()}___${currentUser.subject}___${title}___${due}`;
            ACADEMIC.deletedAssignments = ACADEMIC.deletedAssignments.filter(k => k !== deleteKey);
            ACADEMIC.assignments.push({
              id: assignId,
              student: s.username,
              subject: currentUser.subject,
              title,
              description,
              fileName: fileName || "",
              fileData: fileData || "",
              due,
              status,
              submittedDate: status === "Submitted" ? todayISO : ""
            });
          });
          saveAcademicData();
          navigate("assignments");
        };

        if (fileInput && fileInput.files && fileInput.files[0]) {
          const file = fileInput.files[0];
          const reader = new FileReader();
          reader.onload = function (e) {
            saveAndNavigate(file.name, e.target.result);
          };
          reader.onerror = function () {
            saveAndNavigate(file.name, "");
          };
          reader.readAsDataURL(file);
        } else {
          saveAndNavigate("", "");
        }
      });
    }

    const searchInput = $("assignmentStudentSearch");
    const clearBtn = $("clearAssignmentSearch");
    if (searchInput) {
      const filterTableRows = () => {
        const query = searchInput.value.trim().toLowerCase();
        assignmentSearchQuery = searchInput.value;
        if (clearBtn) {
          clearBtn.style.display = query ? "inline-block" : "none";
        }
        const rows = document.querySelectorAll(".assignment-table-row");
        let visibleCount = 0;
        rows.forEach(row => {
          const name = (row.dataset.studentName || "").toLowerCase();
          const username = (row.dataset.studentUsername || "").toLowerCase();
          const title = (row.dataset.assignmentTitle || "").toLowerCase();
          const matches = !query || name.includes(query) || username.includes(query) || title.includes(query);
          row.style.display = matches ? "" : "none";
          if (matches) visibleCount++;
        });

        const countBadge = $("assignmentRecordCount");
        if (countBadge) {
          countBadge.textContent = `${visibleCount} Records`;
        }

        const noResultsRow = $("assignmentNoResultsRow");
        if (noResultsRow) {
          noResultsRow.style.display = (visibleCount === 0 && rows.length > 0) ? "" : "none";
        }
      };

      searchInput.addEventListener("input", filterTableRows);

      if (clearBtn) {
        clearBtn.addEventListener("click", () => {
          searchInput.value = "";
          assignmentSearchQuery = "";
          filterTableRows();
          searchInput.focus();
        });
      }
    }

    document.querySelectorAll(".btn-faculty-set-status").forEach(btn => {
      btn.addEventListener("click", () => {
        const idx = parseInt(btn.dataset.assignIndex, 10);
        const newStatus = btn.dataset.status;
        const subjectList = getSubjectAssignments(currentUser.subject);

        const assign = subjectList[idx];
        if (assign) {
          assign.status = newStatus;
          assign.submittedDate = newStatus === "Submitted" ? (assign.submittedDate || getTodayISODate()) : "";
          saveAcademicData();
          navigate("assignments");
        }
      });
    });

    document.querySelectorAll(".btn-delete-assignment").forEach(btn => {
      btn.addEventListener("click", () => {
        const idx = parseInt(btn.dataset.assignIndex, 10);
        const subjectList = getSubjectAssignments(currentUser.subject);
        const assign = subjectList[idx];
        if (assign) {
          const st = (USERS.student || []).find(u => u.username === assign.student);
          const studentName = st ? st.name : assign.student;
          if (confirm(`Delete assignment "${assign.title}" for ${studentName}?`)) {
            if (!Array.isArray(ACADEMIC.deletedAssignments)) ACADEMIC.deletedAssignments = [];
            const deleteKey = `${String(assign.student).toLowerCase()}___${assign.subject}___${assign.title}___${assign.due}`;
            if (!ACADEMIC.deletedAssignments.includes(deleteKey)) {
              ACADEMIC.deletedAssignments.push(deleteKey);
            }
            ACADEMIC.assignments = ACADEMIC.assignments.filter(a => a !== assign);
            saveAcademicData();
            navigate("assignments");
          }
        }
      });
    });

    const divFilter = $("assignmentDivisionFilter");
    if (divFilter) {
      divFilter.addEventListener("change", () => {
        assignmentFilterDivision = divFilter.value;
        navigate("assignments");
      });
    }

    const clearAllBtn = $("btnClearAllAssignments");
    if (clearAllBtn) {
      clearAllBtn.addEventListener("click", () => {
        const subjectObj = subjectById(currentUser.subject) || { name: currentUser.subject || "Subject" };
        const subjectList = getSubjectAssignments(currentUser.subject);
        if (!subjectList.length) return;

        let scopeText = `ALL assignment status records for ${subjectObj.name}`;
        if (assignmentFilterDivision && assignmentFilterDivision !== "All Divisions") {
          scopeText = `all assignment status records for ${assignmentFilterDivision} in ${subjectObj.name}`;
        }

        if (confirm(`Are you sure you want to clear ${scopeText}? This action cannot be undone.`)) {
          if (!Array.isArray(ACADEMIC.deletedAssignments)) ACADEMIC.deletedAssignments = [];
          if (assignmentFilterDivision && assignmentFilterDivision !== "All Divisions") {
            ACADEMIC.assignments = ACADEMIC.assignments.filter(a => {
              if (a.subject !== currentUser.subject) return true;
              const st = (USERS.student || []).find(u => u.username === a.student);
              const div = st ? (st.division || "Div A") : "Div A";
              if (div === assignmentFilterDivision) {
                const deleteKey = `${String(a.student).toLowerCase()}___${a.subject}___${a.title}___${a.due}`;
                if (!ACADEMIC.deletedAssignments.includes(deleteKey)) {
                  ACADEMIC.deletedAssignments.push(deleteKey);
                }
                return false;
              }
              return true;
            });
          } else {
            ACADEMIC.assignments.filter(a => a.subject === currentUser.subject).forEach(a => {
              const deleteKey = `${String(a.student).toLowerCase()}___${a.subject}___${a.title}___${a.due}`;
              if (!ACADEMIC.deletedAssignments.includes(deleteKey)) {
                ACADEMIC.deletedAssignments.push(deleteKey);
              }
            });
            ACADEMIC.assignments = ACADEMIC.assignments.filter(a => a.subject !== currentUser.subject);
          }
          saveAcademicData();
          navigate("assignments");
        }
      });
    }
  }
}

function initNotesPage() {
  markNotesAsSeen();
  if (currentUser.role === "faculty") {
    const uploadBtn = $("btnUploadNotes");
    if (uploadBtn) {
      uploadBtn.addEventListener("click", () => {
        const titleEl = $("notesTitle");
        const divEl = $("notesDivision");
        const fileEl = $("notesFile");
        const msgEl = $("notesMessage");

        const title = titleEl ? titleEl.value.trim() : "";
        const division = divEl ? divEl.value : "All Divisions";

        if (!title) {
          if (msgEl) {
            msgEl.textContent = "⚠️ Please enter a title for the study notes.";
            msgEl.className = "message error";
          }
          return;
        }

        const saveAndNavigate = (fileName, fileData) => {
          if (!Array.isArray(ACADEMIC.notes)) ACADEMIC.notes = [];
          ACADEMIC.notes.unshift({
            id: "note_" + Date.now(),
            subject: currentUser.subject || "general",
            title: title,
            division: division || "All Divisions",
            fileName: fileName || "",
            fileData: fileData || "",
            uploadedBy: currentUser.username,
            uploadedByName: currentUser.name || "Faculty",
            date: new Date().toISOString().slice(0, 10)
          });
          saveAcademicData();
          navigate("notes");
        };

        if (fileEl && fileEl.files && fileEl.files[0]) {
          const file = fileEl.files[0];
          const reader = new FileReader();
          reader.onload = function (e) {
            saveAndNavigate(file.name, e.target.result);
          };
          reader.onerror = function () {
            saveAndNavigate(file.name, "");
          };
          reader.readAsDataURL(file);
        } else {
          saveAndNavigate("", "");
        }
      });
    }

    document.querySelectorAll(".btn-delete-note").forEach(btn => {
      btn.addEventListener("click", () => {
        const noteId = btn.dataset.noteId;
        if (noteId && Array.isArray(ACADEMIC.notes)) {
          if (confirm("Are you sure you want to delete this study note?")) {
            ACADEMIC.notes = ACADEMIC.notes.filter(n => n.id !== noteId);
            saveAcademicData();
            navigate("notes");
          }
        }
      });
    });
  }

  if (currentUser.role === "student") {
    const searchInput = $("notesSearchInput");
    const subjectFilter = $("notesSubjectFilter");

    const filterNotes = () => {
      const q = (searchInput ? searchInput.value : "").trim().toLowerCase();
      const sub = subjectFilter ? subjectFilter.value : "All Subjects";

      document.querySelectorAll(".note-card-item").forEach(card => {
        const cardTitle = (card.dataset.title || "").toLowerCase();
        const cardDesc = (card.dataset.desc || "").toLowerCase();
        const cardSubject = card.dataset.subject || "";

        const matchQ = !q || cardTitle.includes(q) || cardDesc.includes(q);
        const matchSub = (sub === "All Subjects") || (cardSubject === sub);

        card.style.display = (matchQ && matchSub) ? "" : "none";
      });
    };

    if (searchInput) searchInput.addEventListener("input", filterNotes);
    if (subjectFilter) subjectFilter.addEventListener("change", filterNotes);
  }
}

function initNoticesPage() {
  markNoticesAsSeen();
  if (currentUser && (currentUser.role === "faculty" || currentUser.role === "admin")) {
    const form = $("noticeForm");
    if (form) {
      form.addEventListener("submit", event => {
        event.preventDefault();
        const title = $("noticeTitle").value.trim();
        const text = $("noticeText").value.trim();
        const date = $("noticeDate").value;
        const targetAudienceInput = $("noticeTargetAudience");

        const fileInput = $("noticeFile");

        let target = "student";
        if (currentUser.role === "admin") {
          target = targetAudienceInput ? targetAudienceInput.value : "all";
        } else if (currentUser.role === "faculty") {
          target = "student";
        }

        if (!title || !text || !date) {
          $("noticeMessage").textContent = "Fill in all notice fields.";
          $("noticeMessage").className = "message error";
          return;
        }

        const publishNoticeObj = (fileName = "", fileData = "") => {
          ACADEMIC.notices.push({
            title,
            text,
            date,
            target,
            authorRole: currentUser.role,
            authorName: currentUser.name || (currentUser.role === "admin" ? "Admin" : "Faculty"),
            fileName,
            fileData
          });

          saveAcademicData();
          updateNoticeBadges();
          navigate("notices");
        };

        const file = (fileInput && fileInput.files && fileInput.files.length) ? fileInput.files[0] : null;
        if (file) {
          const reader = new FileReader();
          reader.onload = function(e) {
            publishNoticeObj(file.name, e.target.result);
          };
          reader.readAsDataURL(file);
        } else {
          publishNoticeObj();
        }
      });
    }

    document.querySelectorAll("[data-delete-notice-index]").forEach(btn => {
      btn.addEventListener("click", () => {
        const idx = parseInt(btn.dataset.deleteNoticeIndex, 10);
        if (!isNaN(idx) && idx >= 0) {
          const sortedList = getNoticeList();
          const targetNotice = sortedList[idx];
          if (targetNotice && canDeleteNotice(targetNotice, currentUser)) {
            const originalIdx = ACADEMIC.notices.indexOf(targetNotice);
            if (originalIdx !== -1) {
              ACADEMIC.notices.splice(originalIdx, 1);
              saveAcademicData();
              updateNoticeBadges();
              navigate("notices");
            }
          }
        }
      });
    });
  }
}

function initAdminUserManagement(role = "student") {
  const searchInput = document.querySelector(`[data-user-search="${role}"]`);
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      const q = searchInput.value.trim().toLowerCase();
      document.querySelectorAll(`[data-user-row="${role}"]`).forEach(row => {
        const name = (row.dataset.userName || "").toLowerCase();
        const username = (row.dataset.userUsername || "").toLowerCase();
        const div = (row.dataset.userDivision || "").toLowerCase();
        const match = !q || name.includes(q) || username.includes(q) || div.includes(q);
        row.style.display = match ? "" : "none";
      });
    });
  }

  document.querySelectorAll(`[data-remove-user-role="${role}"]`).forEach(btn => {
    btn.onclick = async (e) => {
      e.preventDefault();
      const userRole = btn.dataset.removeUserRole;
      const username = btn.dataset.removeUserUsername;
      const name = btn.dataset.removeUserName || username;

      if (confirm(`Are you sure you want to remove ${role === "student" ? "student" : "faculty"} "${name}"?`)) {
        btn.disabled = true;
        try {
          const removed = await removeUserAccount(userRole, username);
          if (removed) {
            setAdminNotice(`${role === "student" ? "Student" : "Faculty"} "${name}" was removed successfully.`, "success");
            navigate(role === "student" ? "students" : "faculty");
          }
        } catch (err) {
          alert(err.message || "Failed to remove user account.");
          btn.disabled = false;
        }
      }
    };
  });
}

function downloadTimetableCSV(division = activeTimetableDivision) {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const daysHeader = ["Timing", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  
  const isMasterView = division === "Master View" || division === "All Divisions";
  const displayDivision = isMasterView ? "All Divisions" : division;
  const rows = getTimetableEntries(displayDivision);

  const BASE_TIMES = [
    "9:00-10:00", "10:00-11:00", "11:00-11:15", "11:15-12:15",
    "12:15-1:15", "1:15-2:00", "2:00-3:00", "3:00-4:00", "4:00-5:00"
  ];
  const combinedTimes = Array.from(new Set([...BASE_TIMES, ...rows.map(r => r.time)]));
  const rowTimings = sortTimingsSerialwise(combinedTimes);

  let csvContent = `BHARATESH COLLEGE OF COMPUTER APPLICATIONS 2026\n`;
  csvContent += `Time Table - ${displayDivision}\n\n`;
  csvContent += daysHeader.join(",") + "\n";

  rowTimings.forEach(timeVal => {
    const normT = (timeVal || "").replace(/\s+/g, "").toLowerCase();
    const isBreak = normT.includes("11:00-11:15") || normT.includes("11-11:15");
    const isLunch = normT.includes("1:15-2:00");

    if (isBreak) {
      csvContent += `"${timeVal}",BREAK TIME,BREAK TIME,BREAK TIME,BREAK TIME,BREAK TIME,BREAK TIME\n`;
      return;
    }
    if (isLunch) {
      csvContent += `"${timeVal}",LUNCH BREAK,LUNCH BREAK,LUNCH BREAK,LUNCH BREAK,LUNCH BREAK,LUNCH BREAK\n`;
      return;
    }

    const rowCells = [timeVal];
    days.forEach(dayName => {
      const cellEntries = rows.filter(e => 
        (e.time || "").replace(/\s+/g, "").toLowerCase() === (timeVal || "").replace(/\s+/g, "").toLowerCase() && 
        e.day === dayName
      );
      const text = Array.from(new Set(cellEntries.map(e => e.subjectText || (subjectById(e.subject) ? subjectById(e.subject).short || subjectById(e.subject).name : e.subject)).filter(Boolean))).join(" / ");
      rowCells.push(`"${text || '-'}"`);
    });
    csvContent += rowCells.join(",") + "\n";
  });

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);
  link.setAttribute("href", url);
  link.setAttribute("download", `Timetable_${displayDivision.replace(/[\s()]+/g, '_')}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function printColorTimetablePDF(division) {
  const targetDivision = (currentUser && currentUser.role === "student") 
    ? (currentUser.division || "Div A") 
    : (division || activeTimetableDivision || "Div A");

  const rows = getTimetableEntries(targetDivision);

  const DAYS_HEADER = [
    { short: "Mon", full: "Monday" },
    { short: "Tue", full: "Tuesday" },
    { short: "Wed", full: "Wednesday" },
    { short: "Thu", full: "Thursday" },
    { short: "Fri", full: "Friday" },
    { short: "Sat", full: "Saturday" }
  ];

  const BASE_TIMES = [
    "9:00-10:00", "10:00-11:00", "11:00-11:15", "11:15-12:15",
    "12:15-1:15", "1:15-2:00", "2:00-3:00", "3:00-4:00", "4:00-5:00"
  ];
  const combinedTimes = Array.from(new Set([...BASE_TIMES, ...rows.map(r => r.time)]));
  const rowTimings = sortTimingsSerialwise(combinedTimes);

  const storedHeader = (ACADEMIC.timetableHeader && ACADEMIC.timetableHeader[targetDivision]) || {};
  const headerTitle = storedHeader.title || "BHARATESH COLLEGE OF COMPUTER APPLICATIONS 2026";
  const headerSubtitle = storedHeader.subtitle || `Time Table - ${targetDivision}`;

  const printWin = window.open('', '_blank');
  if (!printWin) return;

  printWin.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>${headerTitle} - ${targetDivision}</title>
      <style>
        * {
          box-sizing: border-box;
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
          color-adjust: exact !important;
        }
        body {
          font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
          padding: 24px;
          margin: 0;
          color: #1e293b;
          background: #ffffff;
        }
        .banner {
          text-align: center;
          margin-bottom: 20px;
          padding-bottom: 12px;
          border-bottom: 3px double #c084fc;
        }
        .banner h1 {
          font-size: 22px;
          font-weight: 800;
          margin: 0 0 6px 0;
          color: #1e293b;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }
        .banner p {
          font-size: 15px;
          font-weight: 700;
          color: #475569;
          margin: 0;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          text-align: center;
          font-size: 13px;
          border: 2px solid #7c3aed;
          border-radius: 8px;
          overflow: hidden;
        }
        th {
          background: #7c3aed !important;
          color: #ffffff !important;
          padding: 10px 6px;
          border: 1px solid #6d28d9;
          font-weight: 800;
          font-size: 13px;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }
        td {
          border: 1px solid #e9d5ff;
          padding: 8px 6px;
          vertical-align: middle;
          background: #ffffff;
        }
        .time-col {
          font-weight: 800;
          background: #f3e8ff !important;
          color: #581c87 !important;
          white-space: nowrap;
          border-right: 2px solid #c084fc;
        }
        .break-row td, .lunch-row td {
          background: #f3e8ff !important;
          color: #581c87 !important;
          font-weight: 800 !important;
          letter-spacing: 1px;
          text-transform: uppercase;
          border-top: 1px solid #d8b4fe;
          border-bottom: 1px solid #d8b4fe;
        }
        .subject-chip {
          display: block;
          background: #faf5ff !important;
          color: #3b0764 !important;
          font-weight: 700;
          padding: 4px 6px;
          border-radius: 6px;
          border: 1px solid #c084fc;
        }
        @media print {
          @page {
            size: landscape;
            margin: 10mm;
          }
          body {
            padding: 0;
          }
        }
      </style>
    </head>
    <body>
      <div class="banner">
        <h1>${headerTitle}</h1>
        <p>${headerSubtitle}</p>
      </div>
      <table>
        <thead>
          <tr>
            <th style="width: 110px;">Timing</th>
            ${DAYS_HEADER.map(d => `<th>${d.short}</th>`).join('')}
          </tr>
        </thead>
        <tbody>
          ${rowTimings.map(timeVal => {
            const customBreaks = (ACADEMIC.customBreakRows && ACADEMIC.customBreakRows[targetDivision]) || {};
            const cBreakTime = customBreaks.breakTime || "11:00-11:15";
            const cBreakLabel = customBreaks.breakLabel || "Break Time";
            const cLunchTime = customBreaks.lunchTime || "1:15-2:00";
            const cLunchLabel = customBreaks.lunchLabel || "Lunch Break";

            const normT = (timeVal || "").replace(/\s+/g, "").toLowerCase();
            const isBreak = normT.includes("11:00-11:15") || normT.includes("11-11:15") || normT === cBreakTime.replace(/\s+/g, "").toLowerCase();
            const isLunch = normT.includes("1:15-2:00") || normT === cLunchTime.replace(/\s+/g, "").toLowerCase();

            if (isBreak) {
              return `<tr class="break-row"><td class="time-col">${cBreakTime}</td><td colspan="6">${cBreakLabel}</td></tr>`;
            }
            if (isLunch) {
              return `<tr class="lunch-row"><td class="time-col">${cLunchTime}</td><td colspan="6">${cLunchLabel}</td></tr>`;
            }
            return `<tr>
              <td class="time-col">${timeVal}</td>
              ${DAYS_HEADER.map(d => {
                const cellEntries = rows.filter(e => (e.time || "").replace(/\s+/g, "").toLowerCase() === (timeVal || "").replace(/\s+/g, "").toLowerCase() && e.day === d.full);
                const ownEntries = cellEntries.filter(e => isFacultyOwnEntry(e, currentUser));
                const subjectText = currentUser.role === "faculty"
                  ? (ownEntries.length ? (ownEntries[0].subjectText || (subjectById(ownEntries[0].subject) ? subjectById(ownEntries[0].subject).short || subjectById(ownEntries[0].subject).name : ownEntries[0].subject)) : "")
                  : Array.from(new Set(cellEntries.map(e => e.subjectText || (subjectById(e.subject) ? subjectById(e.subject).short || subjectById(e.subject).name : e.subject)).filter(Boolean))).join(" / ");
                return `<td>${subjectText ? `<span class="subject-chip">${subjectText}</span>` : '-'}</td>`;
              }).join('')}
            </tr>`;
          }).join('')}
        </tbody>
      </table>
      <script>
        window.onload = function() {
          setTimeout(function() {
            window.print();
          }, 300);
        };
      </script>
    </body>
    </html>
  `);
  printWin.document.close();
}

function initTimetablePage() {
  const select = $("timetableDivisionSelect");
  if (select) {
    select.addEventListener("change", () => {
      activeTimetableDivision = select.value;
      isTimetableEditMode = false;
      navigate("timetable");
    });
  }

  const downloadBtn = $("btnDownloadTimetable");
  if (downloadBtn) {
    downloadBtn.addEventListener("click", () => {
      const targetDiv = (currentUser && currentUser.role === "student") 
        ? (currentUser.division || "Div A") 
        : activeTimetableDivision;
      printColorTimetablePDF(targetDiv);
    });
  }

  // Auto-fit cell box size to text content as user types
  document.querySelectorAll(".direct-cell-input, .direct-time-input").forEach(input => {
    const autoResize = () => {
      input.style.height = "auto";
      input.style.height = Math.max(20, input.scrollHeight) + "px";
    };
    input.addEventListener("input", autoResize);
    setTimeout(autoResize, 10);
  });

  if (currentUser.role !== "faculty") return;

  const editModeBtn = $("btnEditTimetableMode");
  if (editModeBtn) {
    editModeBtn.addEventListener("click", () => {
      isTimetableEditMode = true;
      navigate("timetable");
    });
  }

  const cancelEditBtn = $("btnCancelTimetableEdit");
  if (cancelEditBtn) {
    cancelEditBtn.addEventListener("click", () => {
      isTimetableEditMode = false;
      navigate("timetable");
    });
  }

  const saveBtn = $("btnSaveTimetable");
  if (saveBtn) {
    saveBtn.addEventListener("click", () => {
      const msgElem = $("timetableSaveMsg");
      const targetDivision = activeTimetableDivision;

      // Preserve entries for other divisions, AND preserve entries for this division belonging to OTHER faculty members!
      const targetDivNorm = (targetDivision || "Div A").replace("Section ", "Div ").replace("Division ", "Div ");

      ACADEMIC.timetable = ACADEMIC.timetable.filter(e => {
        const entryDiv = (e.division || "Div A").replace("Section ", "Div ").replace("Division ", "Div ");
        if (entryDiv !== targetDivNorm) return true;
        return !isFacultyOwnEntry(e, currentUser);
      });

      const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      const timeInputs = document.querySelectorAll(".direct-time-input");

      const titleInput = $("timetableHeaderTitleInput");
      const subtitleInput = $("timetableHeaderSubtitleInput");

      if (titleInput || subtitleInput) {
        if (!ACADEMIC.timetableHeader) ACADEMIC.timetableHeader = {};
        const titleVal = titleInput ? titleInput.value.trim() : "";
        const subtitleVal = subtitleInput ? subtitleInput.value.trim() : "";

        ACADEMIC.timetableHeader[targetDivision] = {
          title: titleVal || "BHARATESH COLLEGE OF COMPUTER APPLICATIONS 2026",
          subtitle: subtitleVal
        };
      }

      const breakTimeInp = $("breakTimeInput");
      const breakLabelInp = $("breakLabelInput");
      const lunchTimeInp = $("lunchTimeInput");
      const lunchLabelInp = $("lunchLabelInput");

      if (breakTimeInp || breakLabelInp || lunchTimeInp || lunchLabelInp) {
        if (!ACADEMIC.customBreakRows) ACADEMIC.customBreakRows = {};
        ACADEMIC.customBreakRows[targetDivision] = {
          breakTime: breakTimeInp ? breakTimeInp.value.trim() : "11:00-11:15",
          breakLabel: breakLabelInp ? breakLabelInp.value.trim() : "Break Time",
          lunchTime: lunchTimeInp ? lunchTimeInp.value.trim() : "1:15-2:00",
          lunchLabel: lunchLabelInp ? lunchLabelInp.value.trim() : "Lunch Break"
        };
      }

      timeInputs.forEach(timeInput => {
        const rowIdx = timeInput.dataset.rowIdx;
        const timeVal = timeInput.value.trim();
        if (!timeVal) return;

        days.forEach(day => {
          const cellInput = document.querySelector(`.direct-cell-input[data-row-idx="${rowIdx}"][data-day="${day}"]`);
          const cellVal = cellInput ? cellInput.value.trim() : "";
          if (cellVal) {
            ACADEMIC.timetable.push({
              division: targetDivision,
              day: day,
              time: timeVal,
              subject: currentUser.subject || "custom",
              subjectText: cellVal,
              faculty: currentUser.username
            });
          }
        });
      });

      saveAcademicData();
      isTimetableEditMode = false;
      navigate("timetable");
    });
  }

  const addRowBtn = $("btnAddTimetableRow");
  if (addRowBtn) {
    addRowBtn.addEventListener("click", () => {
      const tbody = document.querySelector(".college-timetable-table tbody");
      if (!tbody) return;
      const currentRows = tbody.querySelectorAll("tr");
      const newRowIdx = currentRows.length;
      const days = [
        { short: "Mon", full: "Monday" },
        { short: "Tue", full: "Tuesday" },
        { short: "Wed", full: "Wednesday" },
        { short: "Thu", full: "Thursday" },
        { short: "Fri", full: "Friday" },
        { short: "Sat", full: "Saturday" }
      ];

      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td class="time-col">
          <textarea class="direct-time-input" data-row-idx="${newRowIdx}" rows="1" placeholder="e.g. 5:00-6:00"></textarea>
        </td>
        ${days.map(d => `
          <td>
            <textarea class="direct-cell-input" data-row-idx="${newRowIdx}" data-day="${d.full}" rows="1" placeholder="-"></textarea>
          </td>
        `).join("")}
      `;
      tbody.appendChild(tr);
    });
  }

  if (!window.timetableSyncInitialized) {
    window.timetableSyncInitialized = true;
    window.addEventListener("storage", (e) => {
      if (e.key === "smartPortalAcademic") {
        ACADEMIC = loadAcademicData();
        updateNoticeBadges();
        updateNotesBadges();
        if (currentPage === "timetable") {
          navigate("timetable");
        }
      }
    });

    window.addEventListener("academicDataUpdated", () => {
      updateNoticeBadges();
      updateNotesBadges();
      if (currentPage === "timetable") {
        navigate("timetable");
      }
    });
  }
}

function subjectCards(type) {
  const record = currentUser && currentUser.role === "student" ? getStudentRecord(currentUser.username) : { attendance: {}, marks: {} };
  const subjectsToDisplay = currentUser && currentUser.role === "student" ? getSubjectsForStudent(currentUser) : SUBJECTS;
  return subjectsToDisplay.map(s => {
    const value = type === "attendance" ? (record.attendance[s.id] ?? 0) + "%" : (record.marks[s.id] !== undefined ? record.marks[s.id] + "/100" : "--");
    return `<div class="subject-card">
      ${s.icon ? `<div class="subject-icon">${s.icon}</div>` : ''}<div><b>${s.short}</b><small>${s.name}</small></div>
      <strong>${value}</strong>
    </div>`;
  }).join("");
}

const pages = {
  dashboard() {
    if (currentUser.role === "admin") return adminDashboard();
    if (currentUser.role === "faculty") return facultyDashboard();
    const visibleSubjects = getSubjectsForStudent(currentUser);
    const record = getStudentRecord(currentUser.username);
    const attendance = Math.round(recordAverage(record.attendance, visibleSubjects.map(s => s.id)));
    const assignmentCount = getStudentAssignments(currentUser.username).length;
    const noticeCount = getNoticeList().length;
    return `<div class="welcome"><div><p class="eyebrow">Welcome back</p><h1>${currentUser.name} 👋</h1><p>Your academic overview is ready.</p></div><div class="welcome-icon">🎓</div></div>
      <div class="stat-grid"><div class="stat"><span>📚</span><b>${visibleSubjects.length}</b><small>Subjects</small></div>
      <div class="stat"><span>📊</span><b>${attendance}%</b><small>Average Attendance</small></div>
      <div class="stat"><span>📢</span><b>${noticeCount}</b><small>Notices</small></div></div>
      <section class="panel"><div class="panel-head"><h3>Subject Overview</h3></div>
      <div class="subject-grid">${visibleSubjects.map(s => {
      const markValue = typeof record.marks[s.id] === "number" ? `${record.marks[s.id]}/100` : "--";
      return `<div class="subject-card">${s.icon ? `<div class="subject-icon">${s.icon}</div>` : ''}<div><b>${s.short}</b><small>${s.name}</small></div><strong>${markValue}</strong></div>`;
    }).join("")}</div></section>`;
  },
  profile() {
    if (currentUser.role === "student") {
      const course = currentUser.course || "Bachelor of Computer Applications (BCA)";
      const year = currentUser.courseYear || "Not set";
      const sem = currentUser.semester || "Not set";
      const div = currentUser.division || "Not set";
      const email = currentUser.email || "Not provided";
      const subtitleParts = [course, year, sem, div].filter(p => p !== "Not set");
      const subtitleText = subtitleParts.length ? subtitleParts.join(" • ") : "Profile details pending update";
      const profileStatus = getProfileStatusMessage();
      const statusMarkup = profileStatus ? `<p id="profileStatusMessage" class="message ${profileStatus.type}">${profileStatus.message}</p>` : "";

      const allEnrolled = getSubjectsForStudent(currentUser);
      const theorySubjects = allEnrolled.filter(s => !s.name.toLowerCase().includes("lab") && !s.id.toLowerCase().includes("lab"));
      const labSubjects = allEnrolled.filter(s => s.name.toLowerCase().includes("lab") || s.id.toLowerCase().includes("lab"));

      const theorySubjectsText = theorySubjects.map(s => s.name).join(", ");
      const labSubjectsText = labSubjects.length ? labSubjects.map(s => s.name).join(", ") : "None";

      return `<section class="panel profile">
        <div class="profile-head">
          <div class="big-avatar">${currentUser.name.charAt(0).toUpperCase()}</div>
          <div class="profile-main-info">
            <h2>${currentUser.name}</h2>
            <p>${subtitleText}</p>
          </div>
          <button id="openEditProfileBtn" class="primary-btn profile-edit-btn" type="button">
            <span>✏️ Edit Profile</span>
          </button>
        </div>
        ${statusMarkup}
        <div class="profile-subhead">
          <h3>Personal & Academic Information</h3>
        </div>
        <div class="info-grid profile-info-grid">
          <div><small>Full Name</small><b>${currentUser.name}</b></div>
          <div><small>Username</small><b>${currentUser.username}</b></div>
          <div><small>Division</small><b>${div}</b></div>
          <div><small>Semester</small><b>${sem}</b></div>
          <div><small>Course Year</small><b>${year}</b></div>
          <div><small>Course</small><b>${course}</b></div>
          <div><small>Email Address</small><b>${email}</b></div>
          <div><small>Account Role</small><b>Student</b></div>
          <div style="grid-column: 1 / -1; background: #f8fafc; padding: 12px 16px; border-radius: 8px; border: 1px solid #e2e8f0; margin-top: 6px;">
            <small style="color: #4f46e5; font-weight: 700; text-transform: uppercase; font-size: 11px; display: block; margin-bottom: 4px;">📖 Enrolled Semester Subjects (${sem})</small>
            <b style="color: #0f172a; font-size: 14px; line-height: 1.5; display: block;">${theorySubjectsText}</b>
          </div>
          <div style="grid-column: 1 / -1; background: #f8fafc; padding: 12px 16px; border-radius: 8px; border: 1px solid #e2e8f0; margin-top: 6px;">
            <small style="color: #0ea5e9; font-weight: 700; text-transform: uppercase; font-size: 11px; display: block; margin-bottom: 4px;">🧪 Enrolled Semester Labs (${sem})</small>
            <b style="color: #0f172a; font-size: 14px; line-height: 1.5; display: block;">${labSubjectsText}</b>
          </div>
        </div>
      </section>`;
    }

    if (currentUser.role === "faculty") {
      const email = currentUser.email || `${currentUser.username}@smartportal.edu`;
      const subjectObj = subjectById(currentUser.subject);
      return `<section class="panel profile">
        <div class="profile-head">
          <div class="big-avatar">${currentUser.name.charAt(0).toUpperCase()}</div>
          <div class="profile-main-info">
            <h2>${currentUser.name}</h2>
            <p>${roleLabel(currentUser.role, currentUser.subject)}</p>
          </div>
          <button id="openFacultyEditProfileBtn" class="primary-btn profile-edit-btn" type="button">
            <span>✏️ Edit Profile</span>
          </button>
        </div>
        <div class="profile-subhead">
          <h3>Faculty Credentials & Account Information</h3>
        </div>
        <div class="info-grid profile-info-grid">
          <div><small>Full Name</small><b>${currentUser.name}</b></div>
          <div><small>Username</small><b>${currentUser.username}</b></div>
          <div><small>Email Address</small><b>${email}</b></div>
          <div><small>Account Role</small><b>Faculty</b></div>
          <div><small>Assigned Subject</small><b>${subjectObj ? subjectObj.name : "N/A"}</b></div>
        </div>
      </section>`;
    }

    return `<section class="panel profile">
      <div class="profile-head">
        <div class="big-avatar">${currentUser.name.charAt(0).toUpperCase()}</div>
        <div>
          <h2>${currentUser.name}</h2>
          <p>${roleLabel(currentUser.role, currentUser.subject)}</p>
        </div>
      </div>
      <div class="info-grid">
        <div><small>Username</small><b>${currentUser.username}</b></div>
        <div><small>Role</small><b>Administrator</b></div>
        <div><small>Email</small><b>${currentUser.email || "Not provided"}</b></div>
        <div><small>Subject / Dept</small><b>${currentUser.subject ? subjectById(currentUser.subject).name : "N/A"}</b></div>
      </div>
    </section>`;
  },
  attendance() {
    if (currentUser.role === "admin") {
      return `<section class="panel"><div class="empty-state" style="text-align:center; padding: 40px 20px;"><span style="font-size:42px; display:block; margin-bottom:12px;">🚫</span><h4 style="font-size:18px; font-weight:700; color:#334155; margin:0 0 8px;">Access Restricted</h4><p style="font-size:14px; color:#64748b; margin:0;">Attendance management is not available in the Admin Portal.</p></div></section>`;
    }
    if (currentUser.role === "faculty") {
      const subjectObj = subjectById(currentUser.subject) || { name: currentUser.subject || "Subject", icon: "📘" };
      const displayDate = formatDateDDMMYY(attendanceFilterDate);

      const facultySem = getSemesterForSubject(currentUser.subject);
      const facultyYear = getCourseYearForSemester(facultySem);

      attendanceFilterSemester = facultySem;
      attendanceFilterCourseYear = facultyYear;

      // Filter students matching faculty subject's semester and courseYear
      const filteredStudents = USERS.student.filter(s => {
        const studentSem = s.semester || "1st Semester";
        const studentYear = s.courseYear || "1st Year";
        const studentDiv = s.division || "Div A";

        const matchSem = studentSem === facultySem;
        const matchYear = studentYear === facultyYear;
        const matchDiv = !attendanceFilterDivision || studentDiv === attendanceFilterDivision;
        return matchSem && matchYear && matchDiv;
      });

      // Find existing daily log for date + class + subject
      const existingLog = (ACADEMIC.dailyAttendance || []).find(entry =>
        entry.subject === currentUser.subject &&
        entry.isoDate === attendanceFilterDate &&
        entry.division === attendanceFilterDivision &&
        entry.semester === attendanceFilterSemester &&
        entry.courseYear === attendanceFilterCourseYear
      );

      // Sync activeAttendanceMap (defaults to unselected "")
      activeAttendanceMap = {};
      filteredStudents.forEach(s => {
        if (existingLog && existingLog.records && existingLog.records[s.username]) {
          activeAttendanceMap[s.username] = existingLog.records[s.username];
        } else {
          activeAttendanceMap[s.username] = "";
        }
      });

      // Get stored logs for this subject
      const subjectLogs = (ACADEMIC.dailyAttendance || [])
        .filter(entry => entry.subject === currentUser.subject)
        .sort((a, b) => (b.isoDate || "").localeCompare(a.isoDate || ""));

      const historyRows = subjectLogs.map(log => {
        const total = Object.keys(log.records || {}).length;
        const presents = Object.values(log.records || {}).filter(val => val === "P").length;
        const absents = total - presents;
        return `
          <tr>
            <td><strong class="date-highlight">${log.date || formatDateDDMMYY(log.isoDate)}</strong></td>
            <td><span class="chip-sm">${log.courseYear || "2nd Year"} • ${log.semester || "3rd Sem"} • ${log.division || "Sec A"}</span></td>
            <td><span class="badge-p">${presents} P</span> <span class="badge-a">${absents} A</span></td>
            <td>
              <div class="action-buttons-wrap">
                <button type="button" class="btn-sm edit-log-btn" 
                  data-date="${log.isoDate}" 
                  data-div="${log.division}" 
                  data-sem="${log.semester}" 
                  data-year="${log.courseYear}">
                  ✏️ Edit
                </button>
                <button type="button" class="btn-sm load-log-btn" 
                  data-date="${log.isoDate}" 
                  data-div="${log.division}" 
                  data-sem="${log.semester}" 
                  data-year="${log.courseYear}">
                  📥 Load
                </button>
                <button type="button" class="btn-sm delete-log-btn" 
                  data-date="${log.isoDate}" 
                  data-div="${log.division}" 
                  data-sem="${log.semester}" 
                  data-year="${log.courseYear}">
                  🗑️ Delete
                </button>
              </div>
            </td>
          </tr>
        `;
      }).join("");

      return `
        <section class="panel attendance-panel">
          <div class="panel-head">
            <div>
              <h3>Daily Attendance Entry</h3>
            </div>
          </div>
          <div class="attendance-filters-grid">
            <div class="filter-group">
              <label for="attCourseYearSelect">1. Course Year</label>
              <select id="attCourseYearSelect" class="filter-select" disabled style="background:#f1f5f9; cursor:not-allowed; opacity:0.9;">
                <option value="${facultyYear}" selected>${facultyYear}</option>
              </select>
            </div>

            <div class="filter-group">
              <label for="attSemesterSelect">2. Semester</label>
              <select id="attSemesterSelect" class="filter-select" disabled style="background:#f1f5f9; cursor:not-allowed; opacity:0.9;">
                <option value="${facultySem}" selected>${facultySem}</option>
              </select>
            </div>

            <div class="filter-group">
              <label for="attDivisionSelect">3. Division</label>
              <select id="attDivisionSelect" class="filter-select">
                <option value="" ${!attendanceFilterDivision ? "selected" : ""}>-- Select Division --</option>
                <option value="Div A" ${attendanceFilterDivision === "Div A" ? "selected" : ""}>Div A</option>
                <option value="Div B" ${attendanceFilterDivision === "Div B" ? "selected" : ""}>Div B</option>
              </select>
            </div>

            <div class="filter-group">
              <label for="attDateInput">4. Particular Date (DD-MM-YY)</label>
              <div class="date-input-wrap">
                <input type="date" id="attDateInput" value="${attendanceFilterDate}" class="filter-input-date">
                <span class="date-formatted-badge">📅 ${displayDate}</span>
              </div>
            </div>

            <div style="grid-column: 1 / -1; display: flex; gap: 12px; align-items: center; margin-top: 6px;">
              <button type="button" id="submitAttDetailsBtn" class="primary-btn" style="padding: 10px 22px; font-size: 14px;">
                <span>🔍 Fetch Attendance</span>
              </button>
              <button type="button" id="resetAttDetailsBtn" class="secondary-btn" style="padding: 10px 22px; font-size: 14px;">
                <span>🔄 Reset Details</span>
              </button>
            </div>
            <p id="attFilterErrorMsg" class="message error" style="display:none; grid-column:1/-1; margin-top:6px;"></p>
            ${attendanceSaveSuccessMessage ? `
              <p id="attFilterSuccessMsg" class="message success" style="grid-column:1/-1; margin-top:6px;">${attendanceSaveSuccessMessage}</p>
            ` : ''}
          </div>

          ${isAttendanceDetailsEntered ? `
            <div class="attendance-header-banner">
              <div class="att-title-info">
                <h4>Attendance Sheet: <span>${attendanceFilterCourseYear}</span> • <span>${attendanceFilterSemester}</span> • <span>${attendanceFilterDivision}</span></h4>
                <p>Date: <strong class="date-highlight">${displayDate}</strong> | Subject: <strong>${subjectObj.name}</strong> ${existingLog ? `<span class="badge-p" style="margin-left:8px;">Saved Record Loaded</span>` : ''}</p>
              </div>
            </div>

            ${filteredStudents.length ? `
              <div class="student-att-list">
                <table class="att-table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Student Name</th>
                      <th>Username</th>
                      <th>Course Year, Semester & Division</th>
                      <th style="text-align:center;">Attendance Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${filteredStudents.map((s, idx) => {
        const status = activeAttendanceMap[s.username] || "";
        return `
                        <tr data-username="${s.username}">
                          <td>${idx + 1}</td>
                          <td><strong class="student-name">${s.name}</strong></td>
                          <td><code class="uucms-code">${s.username}</code></td>
                          <td><span class="chip-sm">${s.courseYear || "2nd Year"} • ${s.semester || "3rd Sem"} • ${s.division || "Sec A"}</span></td>
                          <td style="text-align:center;">
                            <div class="pa-toggle-group">
                              <button type="button" class="btn-pa btn-p ${status === "P" ? "active" : ""}" ${isAttendanceReadOnly ? 'disabled style="pointer-events:none; opacity:0.85;"' : ''} data-username="${s.username}" data-status="P" title="P">P</button>
                              <button type="button" class="btn-pa btn-a ${status === "A" ? "active" : ""}" ${isAttendanceReadOnly ? 'disabled style="pointer-events:none; opacity:0.85;"' : ''} data-username="${s.username}" data-status="A" title="A">A</button>
                            </div>
                          </td>
                        </tr>
                      `;
      }).join("")}
                  </tbody>
                </table>
              </div>

              ${!isAttendanceReadOnly ? `
                <div class="att-submit-bar">
                  <button type="button" id="saveDailyAttendanceBtn" class="primary-btn save-att-btn">
                    <span>💾 Save Daily Attendance (${displayDate})</span>
                    <span class="arrow">→</span>
                  </button>
                  <p id="attSaveMessage" class="message"></p>
                </div>
              ` : ''}
            ` : `
              <div class="empty-state" style="text-align:center; padding: 40px 20px;">
                <span class="empty-icon" style="font-size:36px; display:block; margin-bottom:10px;">👥</span>
                <p style="font-size:16px; font-weight:700; color:#475569; margin:0 0 6px;">No students found for ${attendanceFilterCourseYear}, ${attendanceFilterSemester}, ${attendanceFilterDivision}.</p>
                <small style="color:#94a3b8;">Try changing the division dropdown above and click Fetch Attendance.</small>
              </div>
            `}
          ` : `
            <div class="empty-state" style="text-align:center; padding: 40px 20px; background:#f8fafc; border:1px dashed #cbd5e1; border-radius:12px; margin-top:20px;">
              <span style="font-size:42px; display:block; margin-bottom:12px;">📝</span>
              <h4 style="font-size:18px; font-weight:700; color:#334155; margin:0 0 8px;">Select Attendance Details</h4>
              <p style="font-size:14px; color:#64748b; margin:0;">Please select <strong>Division</strong>, and <strong>Date</strong> above, then click <strong>Fetch Attendance</strong> to load students list.</p>
            </div>
          `}
        </section>

        <section class="panel attendance-history-panel" style="margin-top:24px;">
          <div class="panel-head">
            <h3>Stored Daily Attendance Records (${subjectObj.name})</h3>
            <div style="display:flex; gap:8px; align-items:center;">
              <span class="badge">Subject Logs</span>
              ${historyRows ? `
                <button type="button" id="deleteAllLogsBtn" class="badge badge-clear-all">
                  🗑️ Clear All
                </button>
              ` : ''}
            </div>
          </div>
          ${historyRows ? `
            <div class="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Date (DD-MM-YY)</th>
                    <th>Course Year, Semester & Division</th>
                    <th>Attendance Summary</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  ${historyRows}
                </tbody>
              </table>
            </div>
          ` : `
            <p style="color:#64748b; font-size:14px; padding:12px 0;">No attendance records stored for ${subjectObj.name} yet.</p>
          `}
        </section>
      `;
    }

    // Student view
    const record = getStudentRecord(currentUser.username);
    const studentSubjects = getSubjectsForStudent(currentUser);
    const ids = studentSubjects.map(s => s.id);
    const studentUser = currentUser;

    // Group student's daily attendance records by date
    const dailyLogsByDate = {};
    (ACADEMIC.dailyAttendance || []).forEach(log => {
      if (log.records && log.records[studentUser.username] !== undefined) {
        const dateKey = log.isoDate || log.date || "unknown";
        if (!dailyLogsByDate[dateKey]) {
          dailyLogsByDate[dateKey] = {
            dateKey: dateKey,
            displayDate: log.date || formatDateDDMMYY(log.isoDate),
            entries: []
          };
        }
        const subj = subjectById(log.subject) || { name: log.subject || "Subject", icon: "" };
        const status = log.records[studentUser.username];
        dailyLogsByDate[dateKey].entries.push({
          subjectId: log.subject,
          subjectName: subj.name,
          subjectIcon: subj.icon,
          status: status
        });
      }
    });

    const sortedDateKeys = Object.keys(dailyLogsByDate).sort((a, b) => b.localeCompare(a));

    const myLogRows = sortedDateKeys.map((dateKey, index) => {
      const dateObj = dailyLogsByDate[dateKey];
      const totalSubjects = dateObj.entries.length;
      const presents = dateObj.entries.filter(e => e.status === "P").length;
      const absents = totalSubjects - presents;

      const subjectItemsMarkup = dateObj.entries.map(e => `
        <div class="daily-subject-item">
          <div class="subj-info">
            ${e.subjectIcon ? `<span class="subj-icon">${e.subjectIcon}</span>` : ''}
            <span class="subj-name">${e.subjectName}</span>
          </div>
          <div class="subj-status">
            ${e.status === "P"
          ? '<span class="badge-p">P</span>'
          : '<span class="badge-a">A</span>'}
          </div>
        </div>
      `).join("");

      const rowId = `student-date-detail-${index}`;

      return `
        <tr class="student-date-row" data-target="${rowId}">
          <td>
            <button type="button" class="btn-date-toggle" data-target="${rowId}" aria-expanded="false" title="Click/Tap to view subject attendance">
              <span class="date-highlight">📅 ${dateObj.displayDate}</span>
              <span class="toggle-chevron">▼</span>
            </button>
          </td>
          <td>
            <span class="chip-sm">${totalSubjects} ${totalSubjects === 1 ? 'Subject Class' : 'Subject Classes'}</span>
          </td>
          <td>
            <span class="badge-p">${presents} P</span> ${absents > 0 ? `<span class="badge-a">${absents} A</span>` : ''}
          </td>
        </tr>
        <tr id="${rowId}" class="daily-subject-expand-row" style="display: none;">
          <td colspan="3">
            <div class="daily-subject-expand-panel">
              <div class="expand-header">
                <h5>Subjects & Attendance Status for <span>${dateObj.displayDate}</span></h5>
              </div>
              <div class="daily-subject-list">
                ${subjectItemsMarkup}
              </div>
            </div>
          </td>
        </tr>
      `;
    }).join("");

    return `
      <section class="panel">
        <div class="panel-head">
          <h3>Subject Attendance Summary</h3>
          <span class="badge">Overall Progress</span>
        </div>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Subject</th>
                <th>Attendance</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              ${ids.map(id => {
      const s = subjectById(id);
      const v = typeof record.attendance[id] === 'number' ? record.attendance[id] : 0;
      return `
                  <tr>
                    <td>${s.icon ? s.icon + ' ' : ''}<b>${s.name}</b></td>
                    <td><div class="progress"><span style="width:${v}%"></span></div><b>${v}%</b></td>
                    <td><span class="status ${v >= 75 ? "good" : "warn"}">${v >= 75 ? "Good" : "Needs Attention"}</span></td>
                  </tr>
                `;
    }).join("")}
            </tbody>
          </table>
        </div>
      </section>

      <section class="panel" style="margin-top:24px;">
        <div class="panel-head">
          <h3>My Daily Attendance Log</h3>
          <span class="badge">Class History</span>
        </div>
        ${myLogRows ? `
          <div class="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Classes Logged</th>
                  <th>Attendance Status</th>
                </tr>
              </thead>
              <tbody>
                ${myLogRows}
              </tbody>
            </table>
          </div>
        ` : `
          <p style="color:#64748b; font-size:14px; padding:12px 0;">No daily attendance records logged yet.</p>
        `}
      </section>
    `;
  },
  marks() {
    if (currentUser.role === "admin") {
      return `<section class="panel"><div class="empty-state" style="text-align:center; padding: 40px 20px;"><span style="font-size:42px; display:block; margin-bottom:12px;">🚫</span><h4 style="font-size:18px; font-weight:700; color:#334155; margin:0 0 8px;">Access Restricted</h4><p style="font-size:14px; color:#64748b; margin:0;">Marks management is not available in the Admin Portal.</p></div></section>`;
    }
    if (currentUser.role === "faculty") {
      const subjectObj = subjectById(currentUser.subject) || { name: currentUser.subject || "Subject", icon: "📘" };
      const facultySem = getSemesterForSubject(currentUser.subject);
      const facultyYear = getCourseYearForSemester(facultySem);

      const filteredStudents = USERS.student.filter(s => {
        const studentSem = s.semester || "1st Semester";
        const studentYear = s.courseYear || "1st Year";
        return studentSem === facultySem && studentYear === facultyYear;
      });

      const config = getSubjectMarksConfig(currentUser.subject);
      const maxI1 = config.maxInternal1 || 20;
      const maxI2 = config.maxInternal2 || 20;
      const maxTotal = maxI1 + maxI2 + 10;

      const studentOptions = filteredStudents.length
        ? `<option value="" selected>-- Select Student --</option>` + filteredStudents.map(s => `<option value="${s.username}">${s.name} (${s.username}) - ${s.division || 'Sec A'}</option>`).join("")
        : `<option value="">No students available in ${facultySem}</option>`;

      const rows = filteredStudents.map((s, idx) => {
        const record = getStudentRecord(s.username);
        const m = record.marks[currentUser.subject];
        let i1Val = "";
        let i2Val = "";
        let assignVal = "";

        if (m && typeof m === "object") {
          i1Val = typeof m.internal1 === "number" ? m.internal1 : "";
          i2Val = typeof m.internal2 === "number" ? m.internal2 : "";
          assignVal = typeof m.assignment === "number" ? m.assignment : "";
        }

        const i1Num = parseFloat(i1Val);
        const i2Num = parseFloat(i2Val);
        const assignNum = parseFloat(assignVal);

        let totalText = "Not set";
        if (!isNaN(i1Num) || !isNaN(i2Num) || !isNaN(assignNum)) {
          const tot = (isNaN(i1Num) ? 0 : i1Num) + (isNaN(i2Num) ? 0 : i2Num) + (isNaN(assignNum) ? 0 : assignNum);
          totalText = `<strong>${tot}</strong> / ${maxTotal}`;
        }

        return `
          <tr data-student-row="${s.username}">
            <td>${idx + 1}</td>
            <td><strong class="student-name">${s.name}</strong></td>
            <td><code class="uucms-code">${s.username}</code></td>
            <td>
              <input type="number" 
                class="marks-input-field" 
                data-username="${s.username}" 
                data-field="internal1" 
                min="0" max="${maxI1}" step="0.5" 
                value="${i1Val}" 
                placeholder="0"
                style="width: 100px; padding: 6px 10px; border: 1px solid #cbd5e1; border-radius: 6px; font-weight: 600;">
            </td>
            <td>
              <input type="number" 
                class="marks-input-field" 
                data-username="${s.username}" 
                data-field="internal2" 
                min="0" max="${maxI2}" step="0.5" 
                value="${i2Val}" 
                placeholder="0"
                style="width: 100px; padding: 6px 10px; border: 1px solid #cbd5e1; border-radius: 6px; font-weight: 600;">
            </td>
            <td>
              <input type="number" 
                class="marks-input-field" 
                data-username="${s.username}" 
                data-field="assignment" 
                min="0" max="10" step="0.5" 
                value="${assignVal}" 
                placeholder="0"
                style="width: 90px; padding: 6px 10px; border: 1px solid #cbd5e1; border-radius: 6px; font-weight: 600;">
            </td>
            <td>
              <span id="total-badge-${s.username}" class="badge-p">${totalText}</span>
            </td>
          </tr>
        `;
      }).join("");

      return `
        <section class="panel">
          <div class="panel-head">
            <div>
              <h3>Subject Internal Exam Max Marks Configuration (${subjectObj.name})</h3>
              <small style="color:#64748b; font-weight:600;">Faculty can select whether 1st Internal & 2nd Internal exams are out of 20 or 40 marks.</small>
            </div>
            <span class="badge">Faculty Setting</span>
          </div>
          <form id="maxMarksConfigForm" style="display:flex; gap:16px; align-items:flex-end; flex-wrap:wrap; background:#f8fafc; padding:14px 18px; border-radius:10px; border:1px solid #e2e8f0; margin-bottom:16px;">
            <div>
              <label style="font-size:12px; font-weight:700; color:#475569; display:block; margin-bottom:4px;">1st Internal Max Marks</label>
              <select id="maxInternal1Select" class="filter-select" style="width:140px;">
                <option value="20" ${maxI1 === 20 ? "selected" : ""}>Out of 20</option>
                <option value="40" ${maxI1 === 40 ? "selected" : ""}>Out of 40</option>
              </select>
            </div>
            <div>
              <label style="font-size:12px; font-weight:700; color:#475569; display:block; margin-bottom:4px;">2nd Internal Max Marks</label>
              <select id="maxInternal2Select" class="filter-select" style="width:140px;">
                <option value="20" ${maxI2 === 20 ? "selected" : ""}>Out of 20</option>
                <option value="40" ${maxI2 === 40 ? "selected" : ""}>Out of 40</option>
              </select>
            </div>
            <div>
              <label style="font-size:12px; font-weight:700; color:#475569; display:block; margin-bottom:4px;">Assignment Max Marks</label>
              <input type="text" value="Out of 10 (Fixed)" disabled class="filter-select" style="width:150px; background:#f1f5f9; cursor:not-allowed;">
            </div>
            <div>
              <button type="submit" class="secondary-btn" style="padding:10px 18px; font-size:13px; font-weight:700;">⚙️ Update Max Marks</button>
            </div>
          </form>
        </section>

        <section class="panel" style="margin-top:20px;">
          <div class="panel-head">
            <div>
              <h3>Student Marks Entry Table (${subjectObj.name})</h3>
              <small style="color:#64748b; font-weight:600;">${facultySem} (${facultyYear}) • Enter marks directly in the table below</small>
            </div>
            <span class="badge">Faculty Table Entry</span>
          </div>

          ${filteredStudents.length ? `
            <form id="marksBatchForm">
              <div class="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Student Name</th>
                      <th>Username</th>
                      <th>1st Internal</th>
                      <th>2nd Internal</th>
                      <th>Assignment</th>
                      <th>Total Marks (Out of ${maxTotal})</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${rows}
                  </tbody>
                </table>
              </div>
              <div style="display:flex; gap:16px; align-items:center; margin-top:16px; padding-top:12px; border-top:1px solid #e2e8f0;">
                <button type="submit" id="saveBatchMarksBtn" class="primary-btn" style="padding:10px 24px; font-size:14px;">
                  <span>💾 Save All Student Marks</span>
                  <span class="arrow">→</span>
                </button>
                <p id="marksBatchMessage" class="message"></p>
              </div>
            </form>
          ` : `
            <div class="empty-state" style="text-align:center; padding:40px 20px;">
              <p style="font-size:16px; font-weight:700; color:#475569; margin:0 0 6px;">No students found for ${facultySem} (${facultyYear}).</p>
            </div>
          `}
        </section>
      `;
    }

    // Student View
    const record = getStudentRecord(currentUser.username);
    const studentSubjects = getSubjectsForStudent(currentUser);

    const studentRows = studentSubjects.map((s, idx) => {
      const m = record.marks[s.id];
      let i1Text = "Not set";
      let i2Text = "Not set";
      let assignText = "Not set";
      let totalText = "Not set";

      if (m && typeof m === "object") {
        const i1 = typeof m.internal1 === "number" ? m.internal1 : null;
        const i2 = typeof m.internal2 === "number" ? m.internal2 : null;
        const assign = typeof m.assignment === "number" ? m.assignment : null;
        const m1Max = m.maxInternal1 || 20;
        const m2Max = m.maxInternal2 || 20;

        i1Text = i1 !== null ? `${i1}` : "Not set";
        i2Text = i2 !== null ? `${i2}` : "Not set";
        assignText = assign !== null ? `${assign}` : "Not set";

        if (i1 !== null || i2 !== null || assign !== null) {
          const tot = (i1 || 0) + (i2 || 0) + (assign || 0);
          const totMax = m1Max + m2Max + 10;
          totalText = `<strong>${tot}</strong> / ${totMax}`;
        }
      } else if (typeof m === "number") {
        totalText = `${m} / 100`;
      }

      return `
        <tr>
          <td>${idx + 1}</td>
          <td><strong class="student-name">${s.name}</strong></td>
          <td><span class="chip-sm">${i1Text}</span></td>
          <td><span class="chip-sm">${i2Text}</span></td>
          <td><span class="chip-sm">${assignText}</span></td>
          <td><span class="badge-p">${totalText}</span></td>
        </tr>
      `;
    }).join("");

    return `
      <section class="panel">
        <div class="panel-head">
          <div>
            <h3>Academic Marks Statement</h3>
            <small style="color:#64748b;">Detailed breakdown of Internal Exams & Assignment Marks</small>
          </div>
          <span class="badge">Student Statement</span>
        </div>

        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Subject Name</th>
                <th>1st Internal</th>
                <th>2nd Internal</th>
                <th>Assignment</th>
                <th>Total Marks</th>
              </tr>
            </thead>
            <tbody>
              ${studentRows.length ? studentRows : `<tr><td colspan="6" style="text-align:center;">No marks available.</td></tr>`}
            </tbody>
          </table>
        </div>
      </section>
    `;
  },
  assignments() {
    if (currentUser.role === "faculty") {
      const subjectObj = subjectById(currentUser.subject) || { name: currentUser.subject || "Subject", icon: "📘" };
      const targetStudents = getStudentsForSubject(currentUser.subject);
      const subjectAssignments = getSubjectAssignments(currentUser.subject);
      let list = subjectAssignments;
      if (assignmentFilterDivision && assignmentFilterDivision !== "All Divisions") {
        list = list.filter(a => {
          const st = (USERS.student || []).find(u => u.username === a.student);
          const div = st ? (st.division || "Div A") : "Div A";
          return div === assignmentFilterDivision;
        });
      }

      const qInitial = (assignmentSearchQuery || "").trim().toLowerCase();
      let initialVisibleCount = 0;
      list.forEach(a => {
        const st = (USERS.student || []).find(u => u.username === a.student);
        const studentName = st ? st.name.toLowerCase() : "";
        const studentUsername = String(a.student).toLowerCase();
        const title = String(a.title || "").toLowerCase();
        const matches = !qInitial || studentName.includes(qInitial) || studentUsername.includes(qInitial) || title.includes(qInitial);
        if (matches) initialVisibleCount++;
      });

      return `<section class="panel"><div class="panel-head"><h3>Assignments</h3><span class="badge">Faculty Input</span></div>
        <form id="assignmentForm" class="entry-form">
        <label>Assignment Title</label><div class="input-wrap"><input id="assignmentTitle" type="text" required placeholder="Enter assignment title (e.g. Unit 1 Assignment)"></div>
        <label>Details / Description (Text)</label><div class="input-wrap"><textarea id="assignmentDescription" rows="3" placeholder="Enter assignment instructions, guidelines, or questions..." style="width: 100%; height: 97px; resize: vertical;"></textarea></div>
        <label>Attach Document File (Optional)</label><div class="input-wrap"><input id="assignmentDocFile" type="file" accept=".pdf,.doc,.docx,.ppt,.pptx,.txt,.png,.jpg,.jpeg,.zip" style="padding:6px; font-size:13px;"></div>
        <small style="color:#64748b; margin-top:-4px; margin-bottom:8px; display:block;">Attach a PDF, Word doc, text file, or image (Optional)</small>
        <label>Submission Date</label><div class="input-wrap"><input id="assignmentDue" type="date" required></div>
        <label>Status</label><div class="input-wrap"><select id="assignmentStatus"><option value="Pending">Pending</option><option value="Submitted">Submitted</option></select></div>
        <button class="primary-btn" type="submit"><span>Add Assignment</span><span class="arrow">→</span></button>
        <p id="assignmentMessage" class="message"></p></form>
        
        <div class="panel-head" style="margin-top: 24px; border-top: 1px solid #e2e8f0; padding-top: 20px;">
          <div>
            <h3>Student Assignment Status Sheet</h3>
            <small style="color:#64748b;">Manage student assignment submission statuses for ${subjectObj.name}</small>
          </div>
          <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
            <div class="assignment-search-box">
              <span class="assignment-search-icon">🔍</span>
              <input id="assignmentStudentSearch" type="text" class="assignment-search-input" placeholder="Search student name or USN..." value="${assignmentSearchQuery || ''}">
              <button type="button" id="clearAssignmentSearch" class="assignment-search-clear" title="Clear search" style="${assignmentSearchQuery ? 'display:inline-block;' : 'display:none;'}">✕</button>
            </div>
            <div style="display:flex; align-items:center; gap:6px;">
              <label style="font-size:13px; font-weight:600; color:#475569;">Filter Division:</label>
              <select id="assignmentDivisionFilter" class="filter-select" style="padding: 4px 10px; font-size:13px; font-weight:600;">
                <option value="All Divisions" ${assignmentFilterDivision === "All Divisions" ? "selected" : ""}>All Divisions</option>
                <option value="Div A" ${assignmentFilterDivision === "Div A" ? "selected" : ""}>Div A</option>
                <option value="Div B" ${assignmentFilterDivision === "Div B" ? "selected" : ""}>Div B</option>
              </select>
            </div>
            <span id="assignmentRecordCount" class="table-count-badge">${qInitial ? initialVisibleCount : list.length} Records</span>
            ${list.length ? `<button type="button" id="btnClearAllAssignments" class="btn-clear-all" title="Clear assignment status records">🗑️ Clear All</button>` : ''}
          </div>
        </div>

        ${list.length ? `
          <div class="table-wrap compact-status-sheet" style="margin-top: 12px;">
            <table class="att-table compact-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Student Name</th>
                  <th>Username</th>
                  <th>Division</th>
                  <th>Assignment Title</th>
                  <th>Submission Date</th>
                  <th>Submitted Date</th>
                  <th style="text-align:center;">Status Control</th>
                  <th style="text-align:center;">Action</th>
                </tr>
              </thead>
              <tbody>
                ${list.map((a, idx) => {
        const globalIdx = subjectAssignments.indexOf(a);
        const st = (USERS.student || []).find(u => u.username === a.student);
        const studentName = st ? st.name : a.student;
        const studentDiv = st ? (st.division || "Div A") : "Div A";
        const formattedDue = formatDateDDOrdinalMonth(a.due);
        const formattedSubmitted = a.status === "Submitted"
          ? (a.submittedDate ? formatDateDDOrdinalMonth(a.submittedDate) : "Submitted")
          : `<span style="color:#94a3b8;">Not Submitted</span>`;
        const hasAttachments = !!a.fileData;
        const matches = !qInitial || studentName.toLowerCase().includes(qInitial) || String(a.student).toLowerCase().includes(qInitial) || String(a.title || "").toLowerCase().includes(qInitial);

        return `
                    <tr class="assignment-table-row" data-student-name="${(studentName || '').replace(/"/g, '&quot;')}" data-student-username="${(a.student || '').replace(/"/g, '&quot;')}" data-assignment-title="${(a.title || '').replace(/"/g, '&quot;')}" style="${matches ? '' : 'display:none;'}">
                      <td style="font-size:11px; text-align:center;">${idx + 1}</td>
                      <td><strong class="student-name">${studentName}</strong></td>
                      <td><code class="uucms-code" style="font-weight:700; font-size:12px; color:#0f172a;">${a.student}</code></td>
                      <td><span class="chip-sm" style="background:#f1f5f9; color:#475569; padding:0px 5px; border-radius:4px; font-weight:600; font-size:10.5px;">${studentDiv}</span></td>
                      <td><span style="color:#475569; font-size:11px; font-weight:400;">${a.title}</span></td>
                      <td style="font-size:11px;">${formattedDue}</td>
                      <td style="font-size:11px;">${formattedSubmitted}</td>
                      <td style="text-align:center;">
                        <div class="pa-toggle-group" style="justify-content:center; gap: 4px;">
                          <button type="button" class="btn-assign-status btn-pend ${a.status === "Pending" ? "active" : ""} btn-faculty-set-status" data-assign-index="${globalIdx}" data-status="Pending" title="Set Pending">Pending</button>
                          <button type="button" class="btn-assign-status btn-sub ${a.status === "Submitted" ? "active" : ""} btn-faculty-set-status" data-assign-index="${globalIdx}" data-status="Submitted" title="Set Submitted">Submitted</button>
                        </div>
                      </td>
                      <td style="text-align:center;">
                        <button type="button" class="btn-assign-status btn-del btn-delete-assignment" data-assign-index="${globalIdx}" title="Delete Record">🗑️ Delete</button>
                      </td>
                    </tr>
                  `;
      }).join("")}
                <tr id="assignmentNoResultsRow" style="${(initialVisibleCount === 0 && list.length > 0) ? '' : 'display:none;'}">
                  <td colspan="9" style="text-align:center; padding: 16px; color: #64748b;">
                    🔍 No student records found matching your search.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ` : `
          <div class="empty-state" style="text-align:center; padding: 30px 20px;">
            <p style="font-size:15px; color:#64748b; margin:0;">No assignments entered for this subject yet.</p>
          </div>
        `}
      </section>`;
    }
    const list = getStudentAssignments(currentUser.username);
    return `<section class="panel">
      <div class="panel-head">
        <div>
          <h3>My Assignments</h3>
          <small style="color:#64748b;">View assignment details and submission status</small>
        </div>
        <span class="badge">Student View</span>
      </div>
      <div class="assignment-list">${list.length ? list.map(a => {
      const s = subjectById(a.subject);
      const hasAttachments = !!a.fileData;
      const formattedDue = formatDateDDOrdinalMonth(a.due);
      const formattedSubmitted = a.submittedDate ? formatDateDDOrdinalMonth(a.submittedDate) : "";
      return `<article class="assignment"><div class="assignment-icon">${s ? s.icon : '📝'}</div><div class="assignment-main"><b style="font-size:15px; color:#1e293b;">${a.title}</b>${a.description ? `<p class="assignment-desc">${a.description}</p>` : ''}${hasAttachments ? `<div class="assignment-attachments">${a.fileData ? `<a href="${a.fileData}" download="${a.fileName || 'Assignment_Document'}" class="btn-doc-download"><span style="font-size:14px;">📄</span> ${a.fileName || 'Download Document'}</a>` : ''}</div>` : ''}<small style="margin-top:6px; color:#64748b;">${s ? s.name : ''} • <strong>Submission Date:</strong> ${formattedDue}${a.status === "Submitted" && formattedSubmitted ? ` • <span style="color:#16a34a; font-weight:600;">Submitted on ${formattedSubmitted}</span>` : ''}</small></div><div style="display:flex; flex-direction:column; align-items:flex-end; gap:6px;"><span class="status ${a.status === "Submitted" ? "good" : "warn"}" style="padding:6px 14px; font-size:13px; font-weight:600; border-radius:20px; text-transform:uppercase;">${a.status === "Submitted" ? "✓ Submitted" : "⏳ Pending"}</span></div></article>`;
    }).join("") : `<div class="empty-state">No assignments assigned to you yet.</div>`}</div></section>`;
  },
  notes() {
    const isFaculty = currentUser.role === "faculty";
    const isStudent = currentUser.role === "student";

    if (isFaculty) {
      const facultySub = subjectById(currentUser.subject);
      const subjectName = facultySub ? facultySub.name : (currentUser.subject || "Subject");
      const subjectShort = facultySub ? facultySub.short : (currentUser.subject || "Subject");
      const subjectIcon = facultySub ? facultySub.icon : "📚";

      const facultyNotes = (ACADEMIC.notes || []).filter(n => n.subject === currentUser.subject || n.uploadedBy === currentUser.username);

      return `<section class="panel">
        <div class="panel-head" style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">
          <div>
            <h3 style="margin:0;">Subject Notes & Study Materials</h3>
            <small style="color:#64748b;">Upload and share study materials for <strong>${subjectName} (${subjectShort})</strong></small>
          </div>
          <span class="badge" style="background:#e0f2fe; color:#0369a1; padding:6px 12px; font-weight:700;">Faculty Portal</span>
        </div>

        <form id="notesUploadForm" class="entry-form" style="background:#f8fafc; border:1px solid #e2e8f0; padding:18px; border-radius:12px; margin-bottom:24px;">
          <h4 style="margin:0 0 14px 0; color:#1e293b; display:flex; align-items:center; gap:6px;"><span>📤</span> Share New Study Notes</h4>
          
          <label style="font-weight:700; color:#334155;">1. Note Title / Topic</label>
          <div class="input-wrap" style="margin-bottom:12px;">
            <span class="input-icon">📝</span>
            <input id="notesTitle" type="text" required placeholder="e.g. Module 1 Notes - Data Structures & Algorithms">
          </div>

          <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap:12px; margin-bottom:16px;">
            <div>
              <label style="font-weight:700; color:#334155;">2. Target Division / Section</label>
              <div class="input-wrap">
                <select id="notesDivision" style="padding:8px 12px; border-radius:8px; border:1px solid #cbd5e1; font-weight:600; width:100%;">
                  <option value="All Divisions">All Divisions</option>
                  <option value="Div A">Div A</option>
                  <option value="Div B">Div B</option>
                </select>
              </div>
            </div>

            <div>
              <label style="font-weight:700; color:#334155;">3. Attach Document (PDF, Word, TXT)</label>
              <div class="input-wrap">
                <input id="notesFile" type="file" accept=".pdf,.doc,.docx,.ppt,.pptx,.txt,image/*" style="padding:6px; font-size:13px;">
              </div>
            </div>
          </div>

          <div style="display:flex; align-items:center; gap:12px;">
            <button id="btnUploadNotes" class="primary-btn" type="button" style="height:38px; padding:0 22px; font-weight:700;">
              <span>📤 Upload & Share Notes</span>
            </button>
            <p id="notesMessage" class="message" style="margin:0; font-weight:600;"></p>
          </div>
        </form>

        <h4 style="margin:0 0 14px 0; color:#1e293b; display:flex; align-items:center; gap:6px;"><span>📚</span> Shared Notes History (${facultyNotes.length})</h4>
        <div class="assignment-list">
          ${facultyNotes.length ? facultyNotes.map(n => {
            const hasFile = !!n.fileData;
            const sub = subjectById(n.subject) || { name: n.subject, icon: "📚" };
            return `<article class="assignment" style="border-left:4px solid #0284c7;">
              <div class="assignment-icon">${sub.icon || '📚'}</div>
              <div class="assignment-main">
                <b style="font-size:15px; color:#1e293b;">${n.title}</b>
                ${hasFile ? `<div class="assignment-attachments" style="margin-top:6px;"><a href="${n.fileData}" download="${n.fileName || 'Study_Notes'}" class="btn-doc-download" style="display:inline-flex; align-items:center; gap:6px; background:#f0f9ff; border:1px solid #7dd3fc; color:#0369a1; padding:6px 14px; border-radius:6px; font-weight:700; text-decoration:none; font-size:13px;"><span style="font-size:14px;">📄</span> Download ${n.fileName || 'Notes Document'}</a></div>` : ''}
                <small style="margin-top:6px; color:#64748b; display:block;">
                  ${sub.name} • Target: <strong>${n.division || 'All Divisions'}</strong> • Uploaded on ${n.date || 'Today'}
                </small>
              </div>
              <button type="button" class="btn-delete-note" data-note-id="${n.id}" style="background:#fee2e2; color:#991b1b; border:1px solid #fca5a5; padding:6px 12px; border-radius:6px; font-size:12px; font-weight:700; cursor:pointer;" title="Delete this note">🗑️ Delete</button>
            </article>`;
          }).join("") : `<div class="empty-state">No notes shared for ${subjectName} yet. Upload notes using the form above.</div>`}
        </div>
      </section>`;
    }

    // Student view
    const studentUser = currentUser;
    const studentSubjects = getSubjectsForStudent(studentUser);
    const studentSubIds = studentSubjects.map(s => s.id);
    const studentDiv = studentUser.division || "Div A";

    const allNotes = (ACADEMIC.notes || []).filter(n => {
      const matchSubject = !n.subject || studentSubIds.includes(n.subject) || n.subject === "general";
      const matchDiv = !n.division || n.division === "All Divisions" || n.division === studentDiv;
      return matchSubject && matchDiv;
    });

    return `<section class="panel">
      <div class="panel-head" style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
        <div>
          <h3 style="margin:0;">Subject Notes & Study Materials</h3>
          <small style="color:#64748b;">View and download study materials uploaded by your subject faculty</small>
        </div>
        <span class="badge" style="background:#f0fdf4; color:#166534; padding:6px 12px; font-weight:700;">Student Portal</span>
      </div>

      <div class="assignment-controls-wrap" style="display:flex; align-items:center; justify-content:space-between; gap:12px; margin-bottom:18px; flex-wrap:wrap;">
        <div style="display:flex; align-items:center; gap:8px; flex:1; min-width:240px;">
          <input id="notesSearchInput" type="text" placeholder="🔍 Search notes by topic, module or title..." style="width:100%; padding:8px 12px; border-radius:8px; border:1px solid #cbd5e1; font-size:13px; font-weight:600;">
        </div>
        <div style="display:flex; align-items:center; gap:6px;">
          <label style="font-size:13px; font-weight:700; color:#475569;">Filter Subject:</label>
          <select id="notesSubjectFilter" class="filter-select" style="padding:6px 12px; font-size:13px; font-weight:700; border-radius:8px;">
            <option value="All Subjects">All Subjects</option>
            ${studentSubjects.map(s => `<option value="${s.id}">${s.short} (${s.name})</option>`).join("")}
          </select>
        </div>
      </div>

      <div class="assignment-list" id="studentNotesContainer">
        ${allNotes.length ? allNotes.map(n => {
          const sub = subjectById(n.subject) || { name: n.subject || "General", short: n.subject || "General", icon: "📚" };
          const hasFile = !!n.fileData;
          return `<article class="assignment note-card-item" data-title="${(n.title || '').replace(/"/g, '&quot;')}" data-subject="${n.subject || ''}" style="border-left:4px solid #16a34a;">
            <div class="assignment-icon">${sub.icon || '📚'}</div>
            <div class="assignment-main">
              <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap; margin-bottom:4px;">
                <b style="font-size:15px; color:#1e293b;">${n.title}</b>
                <span class="badge" style="background:#dcfce7; color:#15803d; font-size:11px; padding:2px 8px; font-weight:700;">${sub.short}</span>
                <span class="badge" style="background:#f1f5f9; color:#475569; font-size:11px; padding:2px 8px; font-weight:600;">${n.division || 'All Divisions'}</span>
              </div>
              ${hasFile ? `<div class="assignment-attachments" style="margin-top:6px;"><a href="${n.fileData}" download="${n.fileName || 'Study_Notes'}" class="btn-doc-download" style="display:inline-flex; align-items:center; gap:6px; background:#f0fdf4; border:1px solid #86efac; color:#166534; padding:6px 14px; border-radius:6px; font-weight:700; text-decoration:none; font-size:13px;"><span style="font-size:14px;">📄</span> Download ${n.fileName || 'Notes Document'}</a></div>` : ''}
              <small style="margin-top:6px; color:#64748b; display:block;">
                Shared by <strong>Prof. ${n.uploadedByName || 'Faculty'}</strong> • Uploaded on ${n.date || 'Recently'}
              </small>
            </div>
          </article>`;
        }).join("") : `<div class="empty-state">No study notes uploaded for your subjects yet.</div>`}
      </div>
    </section>`;
  },
  timetable() {
    const isFaculty = currentUser.role === "faculty";
    const isStudent = currentUser.role === "student";
    const isAdmin = currentUser.role === "admin";

    if (isAdmin && (!activeTimetableDivision || activeTimetableDivision === "Master View" || activeTimetableDivision === "All Divisions")) {
      activeTimetableDivision = "Div A";
    } else if (isStudent && (!activeTimetableDivision || activeTimetableDivision === "Div A")) {
      if (currentUser.division) {
        activeTimetableDivision = currentUser.division;
      }
    }

    const displayDivision = activeTimetableDivision || (currentUser.division || (isAdmin ? "Div A" : "All Divisions"));
    const rows = getTimetableEntries(displayDivision);
    const canEdit = isFaculty && isTimetableEditMode;
    const isAllDivs = displayDivision === "All Divisions" || displayDivision === "Master View";
    const divShort = isAllDivs ? "All Divisions" : (displayDivision === "Div A" ? "Div A" : "Div B");

    const semString = currentUser.semester || (isFaculty ? getSemesterForSubject(currentUser.subject) : "") || "3rd Semester";
    let semFormatted = "3rd sem";
    const semMatch = semString.match(/(\d+)/);
    if (semMatch) {
      const n = semMatch[1];
      const suffix = n === '1' ? 'st' : (n === '2' ? 'nd' : (n === '3' ? 'rd' : 'th'));
      semFormatted = `${n}${suffix} sem`;
    }

    const DAYS_HEADER = [
      { short: "Mon", full: "Monday" },
      { short: "Tue", full: "Tuesday" },
      { short: "Wed", full: "Wednesday" },
      { short: "Thu", full: "Thursday" },
      { short: "Fri", full: "Friday" },
      { short: "Sat", full: "Saturday" }
    ];

    const BASE_TIMES = [
      "9:00-10:00",
      "10:00-11:00",
      "11:00-11:15",
      "11:15-12:15",
      "12:15-1:15",
      "1:15-2:00",
      "2:00-3:00",
      "3:00-4:00",
      "4:00-5:00"
    ];

    const combinedTimes = Array.from(new Set([...BASE_TIMES, ...rows.map(r => r.time)]));
    const rowTimings = sortTimingsSerialwise(combinedTimes);

    const defaultHeaderTitle = "BHARATESH COLLEGE OF COMPUTER APPLICATIONS 2026";
    const defaultHeaderSubtitle = isAllDivs ? `Time Table ${semFormatted} (All Divisions)` : `Time Table ${semFormatted} ${divShort}`;
    const storedHeader = (ACADEMIC.timetableHeader && ACADEMIC.timetableHeader[displayDivision]) || {};
    const headerTitle = storedHeader.title || defaultHeaderTitle;
    const headerSubtitle = storedHeader.subtitle || defaultHeaderSubtitle;

    const renderMatrixTable = () => {
      return `
        <div class="college-timetable-container">
          <div class="college-header-banner" style="text-align:center; margin-bottom: 8px;">
            ${canEdit ? `
              <input id="timetableHeaderTitleInput" type="text" class="direct-cell-input" value="${(headerTitle || '').replace(/"/g, '&quot;')}" placeholder="College Title (e.g. BHARATESH COLLEGE OF COMPUTER APPLICATIONS 2026)" style="text-align:center; font-weight:800; font-size:17px; color:#1e293b; border:1px solid #c084fc; background:#ffffff; padding:4px 8px; border-radius:4px; margin-bottom:4px; width:100%; box-sizing:border-box;">
              <input id="timetableHeaderSubtitleInput" type="text" class="direct-cell-input" value="${(headerSubtitle || '').replace(/<[^>]*>/g, '').replace(/"/g, '&quot;')}" placeholder="Subtitle (e.g. Time Table 3rd sem Div A)" style="text-align:center; font-weight:700; font-size:13.5px; color:#475569; border:1px solid #c084fc; background:#ffffff; padding:3px 8px; border-radius:4px; width:100%; box-sizing:border-box;">
            ` : `
              <h2 style="text-align:center; margin:0 0 3px 0; font-size:17px; font-weight:800; color:#1e293b;">${headerTitle}</h2>
              <div class="timetable-subtitle" style="text-align:center; font-size:13.5px; font-weight:700; color:#475569;">
                ${headerSubtitle}
              </div>
            `}
          </div>

          ${canEdit ? `
            <div style="display:flex; justify-content:flex-end; margin-bottom:8px;">
              <button id="btnAddTimetableRow" type="button" class="btn-assign-status" style="height:32px; padding:0 12px; font-size:11.5px; font-weight:700; border:1px solid #cbd5e1; background:#ffffff; cursor:pointer; border-radius:6px;">
                <span>+ Add Row</span>
              </button>
            </div>
          ` : ''}

          <div class="timetable-matrix-wrap">
            <table class="college-timetable-table">
              <thead>
                <tr>
                  <th class="time-header" style="text-align:center;">Timing</th>
                  ${DAYS_HEADER.map(d => `<th class="day-header">${d.short}</th>`).join("")}
                </tr>
              </thead>
              <tbody>
                ${rowTimings.map((timeVal, rowIdx) => {
        const customBreaks = (ACADEMIC.customBreakRows && ACADEMIC.customBreakRows[displayDivision]) || {};
        const breakTimeVal = customBreaks.breakTime || "11:00-11:15";
        const breakLabelVal = customBreaks.breakLabel || "Break Time";
        const lunchTimeVal = customBreaks.lunchTime || "1:15-2:00";
        const lunchLabelVal = customBreaks.lunchLabel || "Lunch Break";

        const normT = (timeVal || "").replace(/\s+/g, "").toLowerCase();
        const isBreak = normT.includes("11:00-11:15") || normT.includes("11-11:15") || normT === "11-11:15" || normT === "11:00-11:15" || normT === breakTimeVal.replace(/\s+/g, "").toLowerCase();
        const isLunch = normT.includes("1:15-2:00") || normT === "1:15-2:00" || normT === lunchTimeVal.replace(/\s+/g, "").toLowerCase();

        if (isBreak) {
          return `
                      <tr class="break-row">
                        <td class="time-col" style="text-align:center; vertical-align:middle; padding:2px 1px;">
                          ${canEdit ? `
                            <textarea id="breakTimeInput" class="direct-time-input" data-row-idx="${rowIdx}" rows="1" style="text-align:center; padding:0; resize:none; border:none; background:transparent;">${breakTimeVal}</textarea>
                          ` : `
                            <span class="matrix-time-chip">${breakTimeVal}</span>
                          `}
                        </td>
                        <td colspan="6" style="text-align:center; vertical-align:middle; font-weight:700; letter-spacing:0.5px; background:#f3e8ff; color:#581c87; text-transform:uppercase; padding:2px 1px;">
                          ${canEdit ? `
                            <input id="breakLabelInput" type="text" class="direct-cell-input" value="${breakLabelVal}" style="text-align:center; font-weight:700; background:#f3e8ff; border:1px solid #c084fc; color:#581c87; text-transform:uppercase; font-size:11px; padding:2px 4px; width:100%; border-radius:4px;" placeholder="Break Time label...">
                          ` : `
                            ${breakLabelVal}
                          `}
                        </td>
                      </tr>
                    `;
        }

        if (isLunch) {
          return `
                      <tr class="lunch-row">
                        <td class="time-col" style="text-align:center; vertical-align:middle; padding:2px 1px;">
                          ${canEdit ? `
                            <textarea id="lunchTimeInput" class="direct-time-input" data-row-idx="${rowIdx}" rows="1" style="text-align:center; padding:0; resize:none; border:none; background:transparent;">${lunchTimeVal}</textarea>
                          ` : `
                            <span class="matrix-time-chip">${lunchTimeVal}</span>
                          `}
                        </td>
                        <td colspan="6" style="text-align:center; vertical-align:middle; font-weight:700; letter-spacing:0.5px; background:#f3e8ff; color:#581c87; text-transform:uppercase; padding:2px 1px;">
                          ${canEdit ? `
                            <input id="lunchLabelInput" type="text" class="direct-cell-input" value="${lunchLabelVal}" style="text-align:center; font-weight:700; background:#f3e8ff; border:1px solid #c084fc; color:#581c87; text-transform:uppercase; font-size:11px; padding:2px 4px; width:100%; border-radius:4px;" placeholder="Lunch Break label...">
                          ` : `
                            ${lunchLabelVal}
                          `}
                        </td>
                      </tr>
                    `;
        }

        return `
                    <tr>
                      <td class="time-col" style="text-align:center; vertical-align:middle;">
                        ${canEdit ? `
                          <textarea class="direct-time-input"
                                    data-row-idx="${rowIdx}"
                                    rows="1"
                                    style="text-align:center;"
                                    placeholder="Timing...">${timeVal || ''}</textarea>
                        ` : `
                          <span class="matrix-time-chip">${timeVal || '-'}</span>
                        `}
                      </td>
                      ${DAYS_HEADER.map(d => {
          const cellEntries = rows.filter(e => (e.time || "").replace(/\s+/g, "").toLowerCase() === (timeVal || "").replace(/\s+/g, "").toLowerCase() && e.day === d.full);
          const ownEntries = cellEntries.filter(e => isFacultyOwnEntry(e, currentUser));
          const otherEntries = cellEntries.filter(e => !isFacultyOwnEntry(e, currentUser) && (e.subjectText || e.subject));

          const ownText = ownEntries.length ? (ownEntries[0].subjectText || (subjectById(ownEntries[0].subject) ? subjectById(ownEntries[0].subject).short || subjectById(ownEntries[0].subject).name : ownEntries[0].subject)) : "";
          const otherText = otherEntries.length ? (otherEntries[0].subjectText || (subjectById(otherEntries[0].subject) ? subjectById(otherEntries[0].subject).short || subjectById(otherEntries[0].subject).name : otherEntries[0].subject)) : "";

          const masterText = Array.from(new Set(cellEntries.map(e => {
            const text = e.subjectText || (subjectById(e.subject) ? subjectById(e.subject).short || subjectById(e.subject).name : e.subject);
            if (!text) return "";
            return (isAllDivs && e.division) ? `${e.division}: ${text}` : text;
          }).filter(Boolean))).join("\n");

          return `
                          <td>
                            ${canEdit ? `
                              ${otherEntries.length > 0 ? `
                                <div class="matrix-occupied-chip" title="Timing booked by another faculty: ${otherText}">
                                  Occupied: ${otherText ? otherText.replace(/\n+/g, ' ') : ''}
                                </div>
                              ` : `
                                <textarea class="direct-cell-input"
                                          data-row-idx="${rowIdx}"
                                          data-day="${d.full}"
                                          rows="1"
                                          placeholder="-">${ownText || ''}</textarea>
                              `}
                            ` : `
                              <span class="matrix-subject-chip">${(isFaculty ? ownText : masterText) || '-'}</span>
                            `}
                          </td>
                        `;
        }).join("")}
                    </tr>
                  `;
      }).join("")}
              </tbody>
            </table>
          </div>

          ${canEdit ? `
            <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; margin-top:20px; gap:10px; text-align:center;">
              <div style="display:flex; gap:10px; align-items:center;">
                <button id="btnSaveTimetable" class="primary-btn" type="button" style="height:36px; padding:0 22px; font-size:13px; font-weight:700;">
                  <span>💾 Save Timetable</span>
                </button>
              </div>
              <p id="timetableSaveMsg" class="message" style="margin:0; font-weight:600; text-align:center;"></p>
            </div>
          ` : ''}
        </div>
      `;
    };

    return `<section class="panel">
      <div class="panel-head" style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
        <div style="display:flex; align-items:center; gap:8px;">
          <h3 style="margin:0; white-space:nowrap;">Daily Timetable</h3>
        </div>
        <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap; white-space:nowrap;">
          ${!isStudent ? `
            <div style="display:flex; align-items:center; gap:6px;">
              <label style="font-size:12px; font-weight:700; color:#475569;">Select Division:</label>
              <select id="timetableDivisionSelect" class="filter-select" style="padding:4px 10px; font-size:12px; font-weight:700; border-radius:8px;">
                ${!isAdmin ? `<option value="All Divisions" ${displayDivision === "All Divisions" || displayDivision === "Master View" ? "selected" : ""}>All Divisions</option>` : ''}
                <option value="Div A" ${displayDivision === "Div A" ? "selected" : ""}>Div A</option>
                <option value="Div B" ${displayDivision === "Div B" ? "selected" : ""}>Div B</option>
              </select>
            </div>
          ` : `
            <span class="badge" style="background:#f1f5f9; color:#334155; padding:6px 14px; font-size:12px; font-weight:700; border-radius:20px;">${displayDivision} • ${currentUser.semester || '3rd Semester'}</span>
          `}

          ${!isAdmin ? `
            <button id="btnDownloadTimetable" type="button" class="btn-download-timetable" title="Download Timetable PDF">
              <span>📥 Download Timetable (PDF)</span>
            </button>
          ` : ''}

          ${isFaculty ? `
            ${!isTimetableEditMode ? `
              <button id="btnEditTimetableMode" type="button" class="primary-btn timetable-edit-btn" style="width:auto !important; min-width:60px; height:30px; padding:0 12px; font-size:12px; font-weight:700; white-space:nowrap; margin-top:0;">
                <span>Edit</span>
              </button>
            ` : `
              <button id="btnCancelTimetableEdit" type="button" class="primary-btn timetable-edit-btn" style="width:auto !important; min-width:65px; height:30px; padding:0 12px; font-size:12px; font-weight:700; background:#64748b; white-space:nowrap; margin-top:0;">
                <span>Cancel</span>
              </button>
            `}
          ` : ''}
        </div>
      </div>
      ${renderMatrixTable()}
    </section>`;
  },
  notices() {
    const isFaculty = currentUser.role === "faculty";
    const isAdmin = currentUser.role === "admin";
    const canPublish = isFaculty || isAdmin;

    const notices = getNoticeList();
    const count = notices.length;
    const countLabel = `${count} ${count === 1 ? 'Notice' : 'Notices'}`;

    if (canPublish) {
      const audienceBadge = isAdmin
        ? ""
        : `<span class="badge" style="background:#e0e7ff; color:#3730a3; font-weight:700;">Audience: Students Only</span>`;

      return `<section class="panel">
        <div class="panel-head">
          <h3>📢 Publish Notice</h3>
          <div style="display:flex; align-items:center; gap:8px;">
            ${audienceBadge}
            <span class="notice-header-count">📢 ${countLabel}</span>
          </div>
        </div>
        <form id="noticeForm" class="entry-form">
          <label>Title</label><div class="input-wrap"><input id="noticeTitle" type="text" required placeholder="Notice title"></div>
          <label>Message</label><div class="input-wrap"><textarea id="noticeText" rows="4" required placeholder="Write notice text"></textarea></div>
          <label>Date</label><div class="input-wrap"><input id="noticeDate" type="date" value="${new Date().toISOString().slice(0, 10)}" required></div>
          <label>Attach Document (Optional)</label>
          <div class="input-wrap">
            <input id="noticeFile" type="file" accept=".pdf,.doc,.docx,.png,.jpg,.jpeg,.zip,.txt" style="padding:6px 10px; height:auto; background:#ffffff;">
          </div>
          ${isAdmin ? `
            <label>Target Audience</label>
            <div class="input-wrap">
              <select id="noticeTargetAudience" style="padding:8px 12px; border-radius:8px; border:1px solid #cbd5e1; font-weight:600; font-size:13px; width:100%; box-sizing:border-box;">
                <option value="all" selected>Students & Faculty</option>
                <option value="student">Students Only</option>
                <option value="faculty">Faculty Only</option>
              </select>
            </div>
          ` : ''}
          <button class="primary-btn" type="submit" style="margin-top:12px;"><span>Publish Notice</span><span class="arrow">→</span></button>
          <p id="noticeMessage" class="message"></p>
        </form>
        <div class="panel-head" style="margin-top:24px;">
          <h3>Published Notices</h3>
        </div>
        <div class="notice-grid">${notices.length ? notices.map((n, idx) => {
          const targetTag = (!n.target || n.target === "all")
            ? `<span class="badge" style="background:#dcfce7; color:#14532d; font-size:11px;">Students & Faculty</span>`
            : (n.target === "student"
                ? `<span class="badge" style="background:#e0e7ff; color:#3730a3; font-size:11px;">Students Only</span>`
                : `<span class="badge" style="background:#fef3c7; color:#92400e; font-size:11px;">Faculty Only</span>`);

          const showDelete = canDeleteNotice(n, currentUser);

          return `
          <article class="notice">
            <span>📢</span>
            <div style="flex:1;">
              <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px; flex-wrap:wrap;">
                <small>${n.date}</small>
                ${targetTag}
                ${n.authorRole ? `<small style="color:#64748b; font-style:italic;">By ${n.authorName || (n.authorRole === 'admin' ? 'Admin' : 'Faculty')}</small>` : ''}
              </div>
              <h3>${n.title}</h3>
              <p>${n.text}</p>
              ${n.fileData ? `
                <div style="margin-top:10px;">
                  <a href="${n.fileData}" download="${(n.fileName || 'Notice_Document').replace(/"/g, '&quot;')}" class="notice-doc-link">
                    <span>📄</span> ${n.fileName || 'Download Attachment'}
                  </a>
                </div>
              ` : ''}
            </div>
            ${showDelete ? `<button class="delete-notice-btn" type="button" data-delete-notice-index="${idx}" title="Delete Notice">🗑️</button>` : ''}
          </article>`;
        }).join("") : `<div class="empty-state">No notices published yet.</div>`}</div>
      </section>`;
    }

    return `<section class="panel">
      <div class="panel-head">
        <h3>📢 Campus Notices</h3>
        <span class="notice-header-count">📢 ${countLabel}</span>
      </div>
      <div class="notice-grid">${notices.length ? notices.map(n => {
        const targetTag = (!n.target || n.target === "all")
          ? `<span class="badge" style="background:#dcfce7; color:#14532d; font-size:11px;">Students & Faculty</span>`
          : `<span class="badge" style="background:#e0e7ff; color:#3730a3; font-size:11px;">Students Only</span>`;

        return `
        <article class="notice">
          <span>📢</span>
          <div>
            <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px; flex-wrap:wrap;">
              <small>${n.date}</small>
              ${targetTag}
            </div>
            <h3>${n.title}</h3>
            <p>${n.text}</p>
            ${n.fileData ? `
              <div style="margin-top:10px;">
                <a href="${n.fileData}" download="${(n.fileName || 'Notice_Document').replace(/"/g, '&quot;')}" class="notice-doc-link">
                  <span>📄</span> ${n.fileName || 'Download Attachment'}
                </a>
              </div>
            ` : ''}
          </div>
        </article>`;
      }).join("") : `<div class="empty-state">No notices available.</div>`}</div>
    </section>`;
  },
  students() {
    return `<section class="panel"><div class="panel-head"><div><h3>Student Management</h3><span class="badge">Admin Only</span></div></div>
      ${getAdminNoticeMarkup()}
      <div class="admin-search-wrap"><input type="search" data-user-search="student" placeholder="Search students by name, username, or division" aria-label="Search students"></div>
      <div class="table-wrap"><table><thead><tr><th>Name</th><th>Username</th><th style="text-align:center !important;">Division</th><th>Course</th><th style="text-align:center !important;">Status</th><th style="text-align:center !important;">Action</th></tr></thead><tbody>${USERS.student.map(s => {
        const studentDiv = s.division || "Div A";
        return `<tr data-user-row="student" data-user-name="${s.name}" data-user-username="${s.username}" data-user-division="${studentDiv}"><td><strong>${s.name}</strong></td><td><code>${s.username}</code></td><td style="text-align:center !important;">${studentDiv}</td><td>BCA 3rd Sem</td><td style="text-align:center !important;"><span class="status good">Active</span></td><td class="admin-actions" style="text-align:center !important; vertical-align:middle !important;"><button class="danger-btn" type="button" data-remove-user-role="student" data-remove-user-username="${s.username}" data-remove-user-name="${s.name}" style="margin:0 auto !important; display:inline-block !important; height:28px; padding:0 12px; font-size:12px; font-weight:700;">Remove</button></td></tr>`;
      }).join("") || `<tr><td colspan="6" style="text-align:center;">No students registered yet.</td></tr>`}</tbody></table></div></section>`;
  },
  faculty() {
    return `<section class="panel"><div class="panel-head"><div><h3>Faculty Management</h3><span class="badge">${USERS.faculty.length} Faculty</span></div></div>
      ${getAdminNoticeMarkup()}
      <div class="admin-search-wrap"><input type="search" data-user-search="faculty" placeholder="Search faculty by name or username" aria-label="Search faculty"></div>
      <div class="faculty-grid">${USERS.faculty.length ? USERS.faculty.map(f => { const s = subjectById(f.subject); return `<div class="faculty-card" data-user-row="faculty" data-user-name="${f.name}" data-user-username="${f.username}"><div class="big-avatar">${f.name.charAt(0)}</div><h3>${f.name}</h3><p>${s ? s.name : "Assigned Subject"}</p><small>Username: ${f.username}</small><span class="status good">Active</span><div class="admin-actions admin-actions-stack"><button class="danger-btn full-width" type="button" data-remove-user-role="faculty" data-remove-user-username="${f.username}" data-remove-user-name="${f.name}">Remove</button></div></div>`; }).join("") : `<div class="empty-state">No faculty accounts registered yet.</div>`}</div></section>`;
  }
};

function facultyDashboard() {
  const subjectObj = subjectById(currentUser.subject) || { id: "general", name: "Computer Applications", short: "BCA Core", semester: "1st Semester", icon: "💻" };
  const sem = subjectObj.semester || "1st Semester";
  const courseYear = getCourseYearForSemester(sem);
  const courseName = "Bachelor of Computer Applications (BCA)";
  const enrolledStudents = getStudentsForSubject(subjectObj.id);
  const enrolledCount = enrolledStudents.length;
  const noticeCount = getNoticeList().length;
  const email = currentUser.email || (currentUser.username ? `${currentUser.username}@smartportal.edu` : "faculty@smartportal.edu");
  const divisions = ["Div A", "Div B"];

  return `<div class="welcome">
    <div>
      <p class="eyebrow">Faculty Portal</p>
      <h1>Welcome back, ${currentUser.name} 👋</h1>
      <p>Manage your profile, assigned courses, divisions, and academic activities from one dashboard.</p>
    </div>
    <div class="welcome-icon">🧑‍🏫</div>
  </div>

  <div class="stat-grid">
    <div class="stat"><span>📚</span><b>1</b><small>Assigned Course</small></div>
    <div class="stat"><span>🏫</span><b>2</b><small>Assigned Divisions</small></div>
    <div class="stat"><span>👥</span><b>${enrolledCount}</b><small>Enrolled Students</small></div>
    <div class="stat"><span>📢</span><b>${noticeCount}</b><small>Notices</small></div>
  </div>

  <section class="panel faculty-profile-panel">
    <div class="panel-head">
      <h3>👤 Profile Management</h3>
      <button type="button" id="openFacultyEditProfileBtn" class="primary-btn profile-edit-btn" style="width: auto !important;">
        <span>✏️ Edit Profile</span>
      </button>
    </div>

    <div class="subject-grid">
      <div class="subject-card">
        <div class="subject-icon">🪪</div>
        <div>
          <b>Full Name</b>
          <small>${currentUser.name}</small>
        </div>
        <strong>Faculty</strong>
      </div>

      <div class="subject-card">
        <div class="subject-icon">👤</div>
        <div>
          <b>Username</b>
          <small>${currentUser.username}</small>
        </div>
        <strong>System ID</strong>
      </div>

      <div class="subject-card">
        <div class="subject-icon">✉️</div>
        <div>
          <b>Email Address</b>
          <small style="word-break:break-all;">${email}</small>
        </div>
        <strong>Primary</strong>
      </div>

      <div class="subject-card">
        <div class="subject-icon">🧑‍🏫</div>
        <div>
          <b>Role / Designation</b>
          <small>Faculty Member</small>
        </div>
        <strong>Academic</strong>
      </div>
    </div>
  </section>

  <section class="panel faculty-course-panel" style="margin-top: 18px;">
    <div class="panel-head">
      <h3>📚 Course & Division Management</h3>
      <span class="badge">Active Semester</span>
    </div>

    <div class="subject-grid">
      <div class="subject-card">
        <div class="subject-icon">🎓</div>
        <div>
          <b>Degree Program</b>
          <small>${courseName}</small>
        </div>
        <strong>BCA</strong>
      </div>

      <div class="subject-card">
        <div class="subject-icon">💻</div>
        <div>
          <b>Assigned Subject</b>
          <small>${subjectObj.name}</small>
        </div>
        <strong>${subjectObj.short}</strong>
      </div>

      <div class="subject-card">
        <div class="subject-icon">📅</div>
        <div>
          <b>Semester & Year</b>
          <small>${sem} (${courseYear})</small>
        </div>
        <strong>Active</strong>
      </div>

      <div class="subject-card">
        <div class="subject-icon">🏫</div>
        <div>
          <b>Assigned Divisions</b>
          <div style="margin-top:5px; display:flex; gap:6px; flex-wrap:wrap;">
            ${divisions.map(s => `<span class="div-pill-btn">📍 ${s}</span>`).join("")}
          </div>
        </div>
        <strong>2 Divisions</strong>
      </div>

      <div class="subject-card">
        <div class="subject-icon">👥</div>
        <div>
          <b>Enrolled Students</b>
          <small>${enrolledCount} Students Registered</small>
        </div>
        <strong>${subjectObj.short}</strong>
      </div>
    </div>

    <div class="course-actions-row" style="margin-top: 16px; display:flex; gap:10px; flex-wrap:wrap;">
      <button type="button" class="action-btn-secondary nav-action-btn" data-nav-target="attendance">📊 Manage Attendance</button>
      <button type="button" class="action-btn-secondary nav-action-btn" data-nav-target="marks">📈 Manage Marks</button>
      <button type="button" class="action-btn-secondary nav-action-btn" data-nav-target="assignments">📝 View Assignments</button>
    </div>
  </section>`;
}

function adminDashboard() {
  const adminName = (currentUser && currentUser.name) ? currentUser.name : "Administrator";
  const adminUsername = (currentUser && currentUser.username) ? currentUser.username : "admin";
  const noticeCount = getNoticeList().length;

  const semesters = ["1st Semester", "2nd Semester", "3rd Semester", "4th Semester", "5th Semester", "6th Semester"];

  const semesterBlocksMarkup = semesters.map(sem => {
    const semSubjects = SUBJECTS.filter(s => s.semester === sem);
    if (!semSubjects.length) return "";
    return `
      <div style="margin-top: 18px; margin-bottom: 8px;">
        <h4 style="font-size: 14px; font-weight: 700; color: #475569; margin: 0 0 10px 0; display: flex; align-items: center; gap: 6px;">
          <span>📚</span> ${sem} <span style="font-size: 11px; background: #f1f5f9; color: #334155; padding: 2px 8px; border-radius: 12px; font-weight: 600;">${semSubjects.length} Subjects</span>
        </h4>
        <div class="subject-grid">
          ${semSubjects.map(s => `<div class="subject-card"><div><b>${s.short}</b><small>${s.name}</small></div></div>`).join("")}
        </div>
      </div>
    `;
  }).join("");

  return `<div class="welcome"><div><p class="eyebrow">Administrator</p><h1>Portal Control Center ⚙️</h1><p>Manage students, faculty and academic information.</p></div><div class="welcome-icon">🛡️</div></div>
  <div class="stat-grid">
    <div class="stat"><span>👤</span><b>${adminName}</b><small>Admin (@${adminUsername})</small></div>
    <div class="stat"><span>👥</span><b>${USERS.student.length}</b><small>Students</small></div>
    <div class="stat"><span>🧑‍🏫</span><b>${USERS.faculty.length}</b><small>Faculty</small></div>
    <div class="stat"><span>📢</span><b>${noticeCount}</b><small>Notices</small></div>
  </div>
  <section class="panel">
    <div class="panel-head"><h3>Semester-wise Subjects</h3></div>
    ${semesterBlocksMarkup}
  </section>`;
}

function logout() {
  resetAttendanceFilters();
  sessionStorage.removeItem("portalUser");
  currentUser = null;
  $("app").classList.add("hidden");
  $("loginPage").classList.remove("hidden");
  resetLoginForm();
}

hydrateUsersFromServer();

const saved = sessionStorage.getItem("portalUser");
if (saved) {
  try {
    currentUser = sanitizeClientUser(JSON.parse(saved));
    sessionStorage.setItem("portalUser", JSON.stringify(currentUser));
    openPortal();
  } catch {
    sessionStorage.removeItem("portalUser");
  }
}

// Login background effects: dynamic particles and object timing
(function initLoginEffects() {
  const container = document.querySelector('.login-particles');
  if (!container) return;
  const rand = (min, max) => Math.random() * (max - min) + min;

  // generate small sprinkle particles
  const count = 30;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.floor(rand(6, 18));
    p.style.width = size + 'px';
    p.style.height = size + 'px';
    p.style.left = Math.floor(rand(2, 96)) + '%';
    p.style.bottom = Math.floor(rand(6, 70)) + '%';
    p.style.opacity = (rand(.35, 1)).toFixed(2);
    p.style.animationDuration = (rand(3.5, 9)).toFixed(2) + 's';
    p.style.animationDelay = (-rand(0, 9)).toFixed(2) + 's';
    p.style.filter = 'blur(' + (rand(0, 3)).toFixed(1) + 'px)';
    container.appendChild(p);
  }

  // randomize object animation timing for a more organic look
  document.querySelectorAll('.login-objects .obj').forEach(el => {
    el.style.animationDuration = (rand(5.5, 9.5)).toFixed(2) + 's';
    el.style.animationDelay = (-rand(0, 5)).toFixed(2) + 's';
    // tiny x-offset variation
    el.style.transform = `translateX(${Math.floor(rand(-6, 6))}px)`;
  });
})();