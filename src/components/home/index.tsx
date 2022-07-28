import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import useGetAuth from '../../hooks/useGetAuth';
import { SmallCard, Typography } from '../common';
import Footer from '../common/footer/Footer';
import Banner from './BannerSwiper';
import Blur from './Blur';
import RecommandSwiper from './RecommendSwiper';
import { Container, HomeContainer, MoreContainer, TitleAndMoreContainer } from './style';

const test = {
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

function Home() {
  const data = useGetAuth();
  return (
    <HomeContainer>
      <Banner />
      <Container>
        {!data && !data?.lolNickname && <Blur />}
        <TitleAndMoreContainer>
          <Typography variant="h3">
            {data?.lolNickname}
            님과
            <br />
            찰떡궁합 소환사 추천해요!
          </Typography>
          <Link href="/recommend/fit">
            <a>
              <MoreContainer>
                <Typography variant="captionRegular">모아보기</Typography>
                <Image
                  src="/icons/arrow-right.svg"
                  width="16px"
                  height="16px"
                  alt="harmony summonr recommend"
                />
              </MoreContainer>
            </a>
          </Link>
        </TitleAndMoreContainer>
        <RecommandSwiper {...test} />
      </Container>
      <Container>
        <TitleAndMoreContainer>
          <Typography variant="h3">듀오를 찾고 있는 NEW 소환사</Typography>
          <Link href="/recommend/new">
            <a>
              <MoreContainer>
                <Typography variant="captionRegular">모아보기</Typography>
                <Image
                  src="/icons/arrow-right.svg"
                  width="16px"
                  height="16px"
                  alt="new summonr recommend"
                />
              </MoreContainer>
            </a>
          </Link>
        </TitleAndMoreContainer>
        <SmallCard {...test} />
        <SmallCard {...test} />
        <SmallCard {...test} />
      </Container>
      <Footer />
    </HomeContainer>
  );
}

export default Home;
