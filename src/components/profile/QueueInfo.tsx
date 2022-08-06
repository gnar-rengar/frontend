import React from 'react';
import { Typography } from '../common';
import { PlayTime, QueueInfoContainer, QueueTypeAndStartTime, StartTime } from './style';

interface QueueInfoProps {
  queueType: string;
  startTime: string;
  playTime: string;
}

const queueTypeMap: { [key: string]: string } = {
  '5v5 Ranked Solo games': '솔로랭크',
  '5v5 Ranked Flex games': '자유랭크',
  '5v5 ARAM games': '무작위 총력전',
  '5v5 Blind Pick games': '일반',
};

function QueueInfo(props: QueueInfoProps) {
  const { queueType, startTime, playTime } = props;

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
