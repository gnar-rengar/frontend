import React from 'react';
import InGameInfo from './InGameInfo';
import QueueInfo from './QueueInfo';
import { MatchCardBackground, MatchCardContainer } from './style';

function MatchCard() {
  return (
    <MatchCardBackground>
      <MatchCardContainer>
        <QueueInfo />
        <InGameInfo />
      </MatchCardContainer>
    </MatchCardBackground>
  );
}

export default MatchCard;
