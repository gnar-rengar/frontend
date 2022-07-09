import React, { memo } from 'react';
import { RecentRecord } from '../../types/api.type';
import ImageArea from './ImageArea';
import InGameInfo from './InGameInfo';
import QueueInfo from './QueueInfo';
import { InGameInfoContainer, MatchCardBackground, MatchCardContainer } from './style';
import TextArea from './TextArea';

interface MatchCardProps {
  matchData: RecentRecord;
}

function MatchCard({ matchData }: MatchCardProps) {
  const { win, queueType, gameStartTimestamp, gameEndTimestamp, ...other } = matchData;

  return (
    <MatchCardBackground win={win}>
      <MatchCardContainer>
        <QueueInfo
          queueType={queueType}
          gameStartTimestamp={gameStartTimestamp}
          gameEndTimestamp={gameEndTimestamp}
        />
        <InGameInfoContainer>
          <ImageArea {...other} />
          <TextArea {...other} />
        </InGameInfoContainer>
      </MatchCardContainer>
    </MatchCardBackground>
  );
}

export default memo(MatchCard);
