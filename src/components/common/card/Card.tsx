import React from 'react';
import Typography from '../typography/Typography';
import Tier from './Tier';
import Voice from '../../icons/Voice';

import { Bottom, Img, Profile, StyledCard, Top } from './style';
import PlayStyle from './PlayStyle';
import MostChamp from './MostChamp';
import Position from './Position';

const tiers = [
  {
    season: ' S2021',
    tier: 'Gold',
    rank: '4',
    leaguePoints: 0,
  },
  {
    season: ' S2020',
    tier: 'Gold',
    rank: '3',
    leaguePoints: 44,
  },
  {
    season: ' S21',
    tier: 'Gold',
    rank: '2',
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
        <Profile>
          <Img src={profileImg} alt="profile icon" />
          <Typography variant="body1" data-testid="nickname">
            {nickname}
          </Typography>
        </Profile>
      </Top>
      <Bottom>
        <PlayStyle playStyles={playStyles}>1</PlayStyle>
        <Position positions={positions}>1</Position>
        <MostChamp mostChamps={mostChamps}>1</MostChamp>
      </Bottom>
    </StyledCard>
  );
}

export default Card;
