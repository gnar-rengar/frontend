import { useTheme } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import useGetAuth from '../../hooks/useGetAuth';
import useGetFitSummonerList from '../../hooks/useGetFitSummonerList';
import useGetNewSummonerList from '../../hooks/useGetNewSummonerList';
import { SmallCard, Typography } from '../common';
import Footer from '../common/footer/Footer';
import Banner from './BannerSwiper';
import Blur from './Blur';
import RecommendSwiper from './RecommendSwiper';
import { Container, HomeContainer, MoreContainer, TitleAndMoreContainer } from './style';

function Home() {
  const userData = useGetAuth();
  const { data: fitData } = useGetFitSummonerList();
  const {
    data: { pages },
  } = useGetNewSummonerList([]);

  const {
    icon: {
      size: { sm },
    },
  } = useTheme();

  const newList = pages[0].data.newList.slice(0, 3);
  const recommendProps = () => {
    if (userData) {
      return fitData?.customList;
    }

    return newList;
  };

  return (
    <HomeContainer>
      <Banner />
      <Container>
        {!userData?.lolNickname && <Blur />}
        <TitleAndMoreContainer>
          <Typography variant="h3">
            {userData?.lolNickname}
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
                  width={sm}
                  height={sm}
                  alt="harmony summonr recommend"
                />
              </MoreContainer>
            </a>
          </Link>
        </TitleAndMoreContainer>
        <RecommendSwiper listProps={recommendProps()} />
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
        {newList.map((list) => (
          <SmallCard {...list} key={list._id} />
        ))}
      </Container>
      <Footer />
    </HomeContainer>
  );
}

export default Home;
