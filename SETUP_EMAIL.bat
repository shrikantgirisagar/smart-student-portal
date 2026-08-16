@echo off
setlocal
cd /d "%~dp0"
if not exist ".env" copy /Y ".env.example" ".env" >nul
notepad ".env"
echo.
echo Save the .env file after entering your Gmail address and Google App Password.
echo Then run Start_Smart_Student_Portal.bat.
pause
