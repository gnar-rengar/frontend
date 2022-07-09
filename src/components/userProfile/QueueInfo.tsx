import dayjs from 'dayjs';
import React from 'react';
import { Typography } from '../common';
import { PlayTime, QueueInfoContainer, QueueTypeAndStartTime, StartTime } from './style';

interface QueueInfoProps {
  queueType: string;
  gameStartTimestamp: number;
  gameEndTimestamp: number;
}

const queueTypeMap = {
  '5v5 Ranked Solo games': '솔로랭크',
};

function QueueInfo(props: QueueInfoProps) {
  const { queueType, gameStartTimestamp, gameEndTimestamp } = props;

  const startTime = dayjs(gameStartTimestamp).format('YYYY/MM/DD A h시 mm분 ');
  const playTime = dayjs(gameEndTimestamp - gameStartTimestamp).format('mm:ss');

  return (
    <QueueInfoContainer>
      <QueueTypeAndStartTime>
        <Typography variant="body1">{queueTypeMap[queueType]}</Typography>
        <StartTime>{startTime}</StartTime>
      </QueueTypeAndStartTime>
      <PlayTime>{playTime}</PlayTime>
    </QueueInfoContainer>
  );
}

export default QueueInfo;
