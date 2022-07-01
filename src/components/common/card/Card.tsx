import React from 'react';

import MostChamp from './MostChamp';
import PlayStyle from './PlayStyle';
import Position from './Position';
import Profile from './Profile';
import Tier from './Tier';

import { Bottom, StyledCard, Top } from './style';

const tiers = [
  {
    season: ' S2021',
    tier: 'Gold',
    rank: 4,
    leaguePoints: 0,
  },
  {
    season: ' S2020',
    tier: 'Gold',
    rank: 3,
    leaguePoints: 44,
  },
  {
    season: ' S21',
    tier: 'Gold',
    rank: 2,
    leaguePoints: 21,
  },
];
const playStyles = ['공격적', '무지성', '3렙에 안오면 던짐', '남탓 안함', '텐션 높음', '말 많음'];
const positions = ['top', 'jg', 'mid'];
const mostChamps = ['Yasuo', 'Wukong', 'Yone'];

function Card({ profileImg, nickname }: { profileImg: string; nickname: string }) {
  return (
    <StyledCard>
      <Top>
        <Tier tiers={tiers} />
        <Profile profileImg={profileImg} nickname={nickname} />
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
