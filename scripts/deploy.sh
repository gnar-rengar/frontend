#!/usr/bin/env bash

REPOSITORY="/app"
APP="duo"
PID=$(pm2 pid $APP)

cd $REPOSITORY

# 프로세스가 실행 중이면 종료
if [ -n "${PID}" ]
then
        echo "애플리케이션을 재시작 합니다."
        pm2 reload ${APP}
else
        echo "애플리케이션을 실행합니다."
        pm2 start "sudo npm run start" --watch --name "${APP}"
fi                                     