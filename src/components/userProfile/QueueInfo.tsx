import React from 'react';
import { Typography } from '../common';
import { PlayTime, QueueInfoContainer, QueueTypeAndStartTime, StartTime } from './style';

function QueueInfo() {
  return (
    <QueueInfoContainer>
      <QueueTypeAndStartTime>
        <Typography variant="body1">솔로랭크</Typography>
        <StartTime>2022/06/30 오전 1시 21분</StartTime>
      </QueueTypeAndStartTime>
      <PlayTime>22:45</PlayTime>
    </QueueInfoContainer>
  );
}

export default QueueInfo;
