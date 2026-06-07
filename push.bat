@echo off
echo Pushing project to GitHub...
git add .
git commit -m "Auto update from assistant"
git push -u origin main
echo.
echo Push complete!
pause
