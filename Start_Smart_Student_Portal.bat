@echo off
setlocal
cd /d "%~dp0"
title Smart Student Portal Launcher

where node >nul 2>nul
if errorlevel 1 (
  echo.
  echo Node.js is not installed or is not in PATH.
  echo Install Node.js, restart Windows / Antigravity IDE, and run this file again.
  pause
  exit /b 1
)

if not exist "node_modules\express" (
  echo Installing project packages for the first run...
  call npm install
  if errorlevel 1 (
    echo.
    echo npm install failed. Please check the error above.
    pause
    exit /b 1
  )
)

if not exist ".env" (
  echo PORT=3000 > ".env"
)

powershell -NoProfile -ExecutionPolicy Bypass -Command "$p=Get-NetTCPConnection -LocalPort 3000 -State Listen -ErrorAction SilentlyContinue; if(-not $p){Start-Process powershell -ArgumentList '-NoProfile','-ExecutionPolicy','Bypass','-NoExit','-Command','Set-Location -LiteralPath ''%~dp0''; node server.js'}"

echo Waiting for the Smart Student Portal backend...
set READY=
for /l %%i in (1,1,30) do (
  powershell -NoProfile -Command "try { $r=Invoke-WebRequest -UseBasicParsing -TimeoutSec 1 http://127.0.0.1:3000/api/health; if($r.StatusCode -eq 200){exit 0}else{exit 1} } catch { exit 1 }" >nul 2>nul
  if not errorlevel 1 (
    set READY=1
    goto :open
  )
  timeout /t 1 /nobreak >nul
)

:open
if defined READY (
  echo Backend is ready.
) else (
  echo Backend did not respond within 30 seconds.
  echo Check the Node.js terminal window for the error.
  pause
  exit /b 1
)

start "" "http://127.0.0.1:3000/"
echo.
echo Smart Student Portal opened in your browser.
echo Keep the backend window running while you use the portal.
echo You no longer need to type npm start manually.
exit /b 0
