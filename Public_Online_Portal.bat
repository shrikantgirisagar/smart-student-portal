@echo off
setlocal
cd /d "%~dp0"
title Smart Student Portal Online Public Launcher

where node >nul 2>nul
if errorlevel 1 (
  echo.
  echo Node.js is not installed or is not in PATH.
  pause
  exit /b 1
)

if not exist "node_modules\express" (
  echo Installing packages...
  call npm install
)

echo Starting Local Server on Port 3000...
powershell -NoProfile -ExecutionPolicy Bypass -Command "$p=Get-NetTCPConnection -LocalPort 3000 -State Listen -ErrorAction SilentlyContinue; if(-not $p){Start-Process powershell -ArgumentList '-NoProfile','-ExecutionPolicy','Bypass','-NoExit','-Command','Set-Location -LiteralPath ''%~dp0''; node server.js'}"

echo Waiting for backend...
timeout /t 3 /nobreak >nul

echo.
echo ============================================================
echo  CREATING FREE ONLINE PUBLIC LINK FOR MOBILE DATA STUDENTS
echo ============================================================
echo.
echo Launching public tunnel. Please wait...
echo Share the generated URL below with students using 4G/5G data.
echo.

npx -y localtunnel --port 3000

pause
