import React from 'react';
import useGetFitSummonerList from '../../hooks/useGetFitSummonerList';
import { Typography } from '../common';
import LargeCard from '../common/card/LargeCard';
import Footer from '../common/footer/Footer';
import { HarmonyContainer, HarmonyRecommend } from './style';

function Harmony() {
  const data = useGetFitSummonerList();
  console.log(data);
  return (
    <>
      <HarmonyContainer>
        <Typography variant="h3">
          {data?.lolNickname}
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
