import React from 'react';
import Image from 'next/image';
import { Card, Typography } from '../common';
import Banner from './BannerSwiper';
import { HomeContainer, MoreContainer, Container, TitleAndMoreContainer } from './style';
import RecommandCard from './RecommandCard';
import Footer from '../common/footer/Footer';

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

function HomeComponent() {
  return (
    <HomeContainer>
      <Banner />
      <Container>
        <TitleAndMoreContainer>
          <Typography variant="h3">
            롤하는 메기님과
            <br />
            찰떡궁합 소환사 추천해요!
          </Typography>
          <MoreContainer>
            <Typography variant="caption">모아보기</Typography>
            <Image src="/icons/arrow-right.svg" width="16px" height="16px" />
          </MoreContainer>
        </TitleAndMoreContainer>
        <RecommandCard />
      </Container>
      <Container>
        <TitleAndMoreContainer>
          <Typography variant="h3">듀오를 찾고 있는 NEW 소환사</Typography>
          <MoreContainer>
            <Typography variant="caption">모아보기</Typography>
            <Image src="/icons/arrow-right.svg" width="16px" height="16px" />
          </MoreContainer>
        </TitleAndMoreContainer>
        <Card {...data} />
        <Card {...data} />
        <Card {...data} />
      </Container>
      <Footer />
    </HomeContainer>
  );
}

export default HomeComponent;
