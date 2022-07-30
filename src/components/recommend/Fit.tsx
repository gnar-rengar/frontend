/* eslint-disable no-underscore-dangle */
import React from 'react';
import Link from 'next/link';
import useGetAuth from '../../hooks/useGetAuth';
import useGetFitSummonerList from '../../hooks/useGetFitSummonerList';
import { Typography } from '../common';
import LargeCard from '../common/card/LargeCard';
import Footer from '../common/footer/Footer';
import { FitContainer, FitRecommend } from './style';

function Fit() {
  const { lolNickname } = useGetAuth();
  const { data } = useGetFitSummonerList();
  const { customList } = data;

  return (
    <>
      <FitContainer>
        <Typography variant="h3">
          {lolNickname}
          님과
          <br />
          찰떡궁합 소환사 추천해요!
        </Typography>
        <FitRecommend>
          {customList &&
            customList.map((list) => (
              <Link href={`/profile/${list._id}`} key={list._id}>
                <a key={list._id}>
                  <LargeCard {...list} key={list._id} />
                </a>
              </Link>
            ))}
        </FitRecommend>
      </FitContainer>
      <Footer />
      <h1>test</h1>
    </>
  );
}

export default Fit;
