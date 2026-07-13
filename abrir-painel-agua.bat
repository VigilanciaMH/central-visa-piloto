@echo off
cd /d "%~dp0"

where node >nul 2>nul
if errorlevel 1 (
  echo Node.js nao foi encontrado neste computador.
  echo Instale o Node.js ou abra este projeto por um servidor local.
  pause
  exit /b 1
)

node servidor-local.js
pause
