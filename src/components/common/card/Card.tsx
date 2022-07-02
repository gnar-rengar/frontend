import React from 'react';

import MostChamp from './MostChamp';
import PlayStyle from './PlayStyle';
import Position from './Position';
import Profile from './Profile';
import Tier from './Tier';

import { Bottom, StyledCard, Top } from './style';

import type { MyPageDTO } from '../../../types/api.type';

interface CardProps {
  nickname: string;
  profileUrl: string;
  tiers: { season: string; tier: string; rank: number; leaguePoints: number }[];
  playStyles: string[];
  positions: string[];
  mostChamps: { name: string; url: string }[];
}

function Card(props: CardProps) {
  const { nickname, profileUrl, tiers, playStyles, positions, mostChamps } = props;

  return (
    <StyledCard>
      <Top>
        <Tier tiers={tiers} />
        <Profile profileUrl={profileUrl} nickname={nickname} />
      </Top>
      <Bottom>
        <PlayStyle playStyles={playStyles} />
        <Position positions={positions} />
        <MostChamp mostChamps={mostChamps} />
      </Bottom>
    </StyledCard>
  );
}

export default Card;
