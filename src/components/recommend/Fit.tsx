import React from 'react';
import useGetFitSummonerList from '../../hooks/useGetFitSummonerList';
import { Typography } from '../common';
import LargeCard from '../common/card/LargeCard';
import Footer from '../common/footer/Footer';
import { HarmonyContainer, HarmonyRecommend } from './style';

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

function Harmony() {
  const test = useGetFitSummonerList();
  console.log(test);
  return (
    <>
      <HarmonyContainer>
        <Typography variant="h3">
          {data.nickname}
          님과
          <br />
          찰떡궁합 소환사 추천해요!
        </Typography>
        <HarmonyRecommend>
          <LargeCard {...data} />
          <LargeCard {...data} />
          <LargeCard {...data} />
        </HarmonyRecommend>
      </HarmonyContainer>
      <Footer />
    </>
  );
}

export default Harmony;
