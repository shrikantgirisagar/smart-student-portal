# 🎓 Smart Student Portal — Academic Management System

A modern, secure, and responsive **Smart Student Portal** web application built with HTML, CSS, JavaScript, and Node.js. Developed and maintained using **Antigravity IDE**, it features a complete Node.js backend with real email OTP password reset (via Nodemailer), secure `scrypt` password hashing, dynamic origin detection, and persistent file-based JSON storage.

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
├── .env                            # Environment variables (Gmail credentials & Port)
├── .gitignore                      # Git exclusion rules
├── README.md                       # Project documentation & setup guide
├── Start_Smart_Student_Portal.bat  # 1-Click Local Launcher (starts server + opens browser)
├── Stop_Smart_Student_Portal.bat   # 1-Click Stopper (terminates backend on port 3000)
├── Public_Online_Portal.bat        # 1-Click LocalTunnel Public Launcher for mobile data
├── SETUP_EMAIL.bat                 # Helper script for setting up Gmail credentials
└── data/
    └── database.json               # Persistent JSON database storing user records
```

---

## ✨ Features

- **🔐 Role-Based Access Control:** Separate interfaces and privileges for **Student**, **Faculty**, and **Admin** accounts.
- **✉️ Real Email OTP Password Reset:** Sends 6-digit verification codes to registered emails using Nodemailer & Gmail.
- **🔑 Server-Side Security:** Password hashing using Node.js `crypto.scrypt`. Frontend credentials and secrets are never exposed.
- **💾 Persistent JSON Storage:** User accounts, roles, profiles, and records saved in `data/database.json`.
- **📊 Academic Management:**
  - **Student:** View profile details, attendance summary, subject marks, assignment status, and campus notices.
  - **Faculty:** Manage daily attendance, batch marks entry, assignment search, student queries, and profile settings.
  - **Admin:** Manage student/faculty user accounts, add/edit/delete records, and view system status.
- **📱 Dynamic Host & Mobile Friendly:** Responsive design with dynamic API origin detection (`window.location.origin`) allowing seamless deployment on Localhost, Local Wi-Fi, or Cloud Hosting platforms (Render, Glitch, Vercel).

---

## 🚀 Quick Start in Antigravity IDE

### 1. Open Project in Antigravity IDE
Open the extracted project folder directly in **Antigravity IDE**.

### 2. System Requirements
- [Node.js](https://nodejs.org/) (v16 or higher) installed on your system.

### 3. Configure Environment (`.env`)
Inside **Antigravity IDE**, edit or create the `.env` file in the project root:
```env
EMAIL_USER=yourgmail@gmail.com
EMAIL_APP_PASSWORD=your-16-character-google-app-password
PORT=3000
```
> **Note:** For Gmail, use an **App Password** generated from your Google Account (requires 2-Step Verification). Do **not** use your normal Gmail password.

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

- **Mobile Tunnel (Temporary Public Access):**
  Double-click `Public_Online_Portal.bat` to launch the local server and generate a free public link via `localtunnel` for mobile users.

---

## 🌐 24/7 Mobile Access: Deploy on Render.com

To make your website **directly accessible to all students on their mobile phones 24/7** (on 4G/5G mobile data or any Wi-Fi network, without running your computer or batch scripts), host the portal for free on **[Render.com](https://render.com)**:

### Step 1: Push Project to GitHub
1. Create a free account at **[GitHub.com](https://github.com)**.
2. Create a new repository named `Start_Smart_Student_Portal`.
3. In your **Antigravity IDE Terminal**, run the following commands to push your code:
   ```powershell
   git init
   git add .
   git commit -m "Initial commit of Smart Student Portal"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/Start_Smart_Student_Portal.git
   git push -u origin main
   ```

### Step 2: Create Web Service on Render
1. Sign up for a free account at **[Render.com](https://render.com)**.
2. On your Render Dashboard, click **New +** → select **Web Service**.
3. Connect your **GitHub** account and choose your `Start_Smart_Student_Portal` repository.
4. Configure the service settings:
   - **Name:** `smart-student-portal` (or your preferred site name)
   - **Region:** Select closest region (e.g. Singapore / Oregon / Frankfurt)
   - **Runtime:** `Node`
   - **Build Command:** `npm install`
   - **Start Command:** `node server.js`
   - **Instance Type:** `Free`

### Step 3: Add Environment Variables (Email OTP Config)
Scroll down to the **Environment Variables** section on Render and add the following keys:
- `EMAIL_USER` = `yourgmail@gmail.com`
- `EMAIL_APP_PASSWORD` = `your-16-character-app-password`
- `PORT` = `3000`

### Step 4: Deploy & Share with Students
1. Click **Create Web Service**. Render will automatically build your site and deploy it.
2. Once deployment completes, Render will provide a free production URL:
   ```text
   https://smart-student-portal.onrender.com
   ```
3. **Share this link directly with your students!** Students can open this link on Chrome, Safari, or any browser on their smartphones anywhere in the world, 24 hours a day, 7 days a week.

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
- Never commit your `.env` file or Gmail credentials to public version control.
- `data/database.json` is kept private on the server and is never exposed statically over HTTP.
