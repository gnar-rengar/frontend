import React from 'react';
import { SmallCard } from '../common';
import Filter from './Filter';
import { NewContainer } from './style';

const data = {
  nickname: '썩은김치',
  profileUrl: 'http://ddragon.leagueoflegends.com/cdn/12.12.1/img/profileicon/588.png',
  tier: {
    tier: 'Gold',
    rank: 4,
  },
  playStyles: ['공격적', '무지성', '안전추구'],
  positions: ['top', 'jg'],
  voice: true,
};

function New() {
  return (
    <NewContainer>
      <Filter />
      <SmallCard {...data} />
      <SmallCard {...data} />
      <SmallCard {...data} />
    </NewContainer>
  );
}

export default New;
