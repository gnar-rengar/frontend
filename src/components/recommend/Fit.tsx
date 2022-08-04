import React from 'react';
import Link from 'next/link';
import useGetAuth from '../../hooks/useGetAuth';
import useGetFitSummonerList from '../../hooks/useGetFitSummonerList';
import { Typography } from '../common';
import LargeCard from '../common/card/LargeCard';
import Footer from '../common/footer/Footer';
import { FitContainer, FitRecommend } from './style';

function Fit() {
  const userData = useGetAuth(false);
  const { data } = useGetFitSummonerList();

  return (
    <>
      <FitContainer>
        <Typography variant="h3">
          {userData?.lolNickname}
          님과
          <br />
          찰떡궁합 소환사 추천해요!
        </Typography>
        <FitRecommend>
          {data &&
            data?.customList.map((list) => (
              <Link href={`/profile/${list._id}`} key={list._id}>
                <a>
                  <LargeCard {...list} />
                </a>
              </Link>
            ))}
        </FitRecommend>
      </FitContainer>
      <Footer />
    </>
  );
}

export default Fit;
