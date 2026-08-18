# 🎓 Smart Student Portal — Academic Management System

A modern, secure, and responsive **Smart Student Portal** web application built with HTML, CSS, JavaScript, and Node.js. Developed and maintained using **Antigravity IDE**, it features a complete Express.js backend with secure `scrypt` password hashing, dynamic origin detection, role-based access control, and persistent file-based JSON storage.

---

## 📁 Present Folder Structure

```text
Start_Smart_Student_Portal/
├── index.html                      # Single Page Application (SPA) HTML interface
├── script.js                        # Dynamic frontend logic & API client handlers
├── style.css                       # Modern dark glassmorphism stylesheet (~4,000 lines)
├── database.js                     # Legacy script payload (loaded safely by index.html)
├── server.js                       # Express.js backend server & API endpoints
├── package.json                    # Node.js project manifest & dependencies
├── package-lock.json               # Locked dependency tree
├── .env                            # Environment variables (Server Port)
├── .gitignore                      # Git exclusion rules
├── README.md                       # Project documentation & setup guide
├── Start_Smart_Student_Portal.bat  # 1-Click Local Launcher (starts server + opens browser)
├── Stop_Smart_Student_Portal.bat   # 1-Click Stopper (terminates backend on port 3000)
└── data/
    └── database.json               # Persistent JSON database storing user records
```

---

## ✨ Features

- **🔐 Role-Based Access Control:** Separate interfaces and privileges for **Student**, **Faculty**, and **Admin** accounts.
- **🔑 Server-Side Security:** Password hashing using Node.js `crypto.scrypt`. Frontend credentials and secrets are never exposed.
- **💾 Persistent JSON Storage:** User accounts, roles, profiles, and records saved in `data/database.json`.
- **📊 Academic Management:**
  - **Student:** View profile details, attendance summary, subject marks, assignment status, and campus notices.
  - **Faculty:** Manage daily attendance, batch marks entry, assignment search, student queries, and profile settings.
  - **Admin:** Manage student/faculty user accounts, add/edit/delete records, and view system status.
- **🌐 Dynamic Origin Detection:** Modern web interface with dynamic API origin detection (`window.location.origin`).

---

## 🚀 Quick Start in Antigravity IDE

### 1. Open Project in Antigravity IDE
Open the extracted project folder directly in **Antigravity IDE**.

### 2. System Requirements
- [Node.js](https://nodejs.org/) (v16 or higher) installed on your system.

### 3. Configure Environment (`.env`)
Inside **Antigravity IDE**, edit or create the `.env` file in the project root:
```env
PORT=3000
```

### 4. Install Dependencies
In the **Antigravity IDE Terminal**, run:
```powershell
npm install
```

### 5. Launching the Portal (Windows)

- **Start Backend via Antigravity IDE Terminal:**
  ```powershell
  npm start
  ```
  *(or double-click `Start_Smart_Student_Portal.bat` in Windows Explorer)*

- **Stop Portal Backend:**
  Double-click `Stop_Smart_Student_Portal.bat` to safely terminate the backend process running on port 3000.

---

## 🔑 Starter Demo Accounts

The initial `data/database.json` comes preloaded with demo accounts:

| Role | Username | Default Password |
| :--- | :--- | :--- |
| **Admin** | `admin` | `admin@123` |
| **Student** | `student01` | `stud1234` |
| **Faculty** | `faculty01` | `fac1234` |

---

## 🛡️ Security Notes
- Never commit your `.env` file to public version control.
- `data/database.json` is kept private on the server and is never exposed statically over HTTP.

