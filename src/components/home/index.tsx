import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button, SmallCard, Typography } from '../common';
import Footer from '../common/footer/Footer';
import Banner from './BannerSwiper';
import RecommandSwiper from './RecommendSwiper';
import { Blur, Container, HomeContainer, MoreContainer, TitleAndMoreContainer } from './style';

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
        <Blur>
          <Typography variant="h3" align="center">
            로그인 후 찰떡궁합
            <br />
            듀오를 확인하세요!
          </Typography>
          <Button size="sm">
            <Link href="/login">
              <a>로그인</a>
            </Link>
          </Button>
        </Blur>
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
        <RecommandSwiper {...data} />
      </Container>
      <Container>
        <TitleAndMoreContainer>
          <Typography variant="h3">듀오를 찾고 있는 NEW 소환사</Typography>
          <MoreContainer>
            <Typography variant="caption">모아보기</Typography>
            <Image src="/icons/arrow-right.svg" width="16px" height="16px" />
          </MoreContainer>
        </TitleAndMoreContainer>
        <SmallCard {...data} />
        <SmallCard {...data} />
        <SmallCard {...data} />
      </Container>
      <Footer />
    </HomeContainer>
  );
}

export default HomeComponent;
