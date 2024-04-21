@echo off

start cmd /k "cd server && streamlit run streamer.py --server.port 8501"
start cmd /k "cd server1 && streamlit run app.py --server.port 8502"
start cmd /k "cd server2\soruce && streamlit run main.py --server.port 8503"
