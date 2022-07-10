import React from 'react';
import dayjs from 'dayjs';

import ImageArea from './ImageArea';
import QueueInfo from './QueueInfo';
import TextArea from './TextArea';

import { InGameInfoContainer, MatchCardBackground, MatchCardLayout } from './style';

import type { RecentRecord } from '../../types/api.type';

interface MatchCardProps {
  matchData: RecentRecord;
}

function MatchCard({ matchData }: MatchCardProps) {
  const { win, queueType, gameStartTimestamp, gameEndTimestamp, ...other } = matchData;

  const timeDiff = gameEndTimestamp - gameStartTimestamp;

  const startTime = dayjs(gameStartTimestamp).format('YYYY/MM/DD A h시 mm분 ');
  const playTime = dayjs(timeDiff).format('mm:ss');

  const playTimeMinute = +dayjs(timeDiff).format('mm');

  return (
    <MatchCardBackground win={win}>
      <MatchCardLayout>
        <QueueInfo queueType={queueType} startTime={startTime} playTime={playTime} />
        <InGameInfoContainer>
          <ImageArea {...other} />
          <TextArea {...{ ...other, playTimeMinute }} />
        </InGameInfoContainer>
      </MatchCardLayout>
    </MatchCardBackground>
  );
}

export default MatchCard;
