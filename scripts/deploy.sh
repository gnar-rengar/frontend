#!/usr/bin/env bash

REPOSITORY="/app"
APP="duo"
PID=$(pgrep -f "npm start")

cd $REPOSITORY

# 프로세스가 실행 중이면 종료
if [ -n "${PID}" ]; then
        echo "실행 중인 애플리케이션을 종료합니다."
        pm2 delete ${APP}
fi

echo "최신 애플리케이션을 실행합니다."
pm2 start "npm run dev" --watch --name "${APP}"