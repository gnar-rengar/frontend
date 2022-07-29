import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import useGetNewSummonerList from '../../hooks/useGetNewSummonerList';
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
  const [filterState, setFilterState] = useState<string[]>([]);
  const [ref, inView] = useInView();
  const {
    data: { pages },
    fetchNextPage,
  } = useGetNewSummonerList(filterState);

  return (
    <>
      <NewContainer>
        <Filter setFilterState={setFilterState} />
        <SmallCard {...data} />
        <SmallCard {...data} />
        <SmallCard {...data} />
      </NewContainer>
      <div ref={ref} />
    </>
  );
}

export default New;
