import { useTheme } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import useGetFitSummonerList from '../../hooks/useGetFitSummonerList';
import useGetNewSummonerList from '../../hooks/useGetNewSummonerList';
import { SmallCard, Typography } from '../common';
import Footer from '../common/footer/Footer';
import Banner from './BannerSwiper';
import Blur from './Blur';
import RecommendSwiper from './RecommendSwiper';
import { Container, HomeContainer, MoreContainer, TitleAndMoreContainer } from './style';

import useGetAuth from '../../hooks/useGetAuth';

function Home({ isAuth }: { isAuth: boolean }) {
  const userData = isAuth && useGetAuth();
  const [customListState, setCustomList] = useState(false);
  const { data: fitData } = useGetFitSummonerList(customListState);
  const {
    data: { pages },
  } = useGetNewSummonerList([], 0, 'home');

  const {
    icon: {
      size: { sm },
    },
  } = useTheme();

  useEffect(() => {
    if (userData?.isOnBoarded) {
      setCustomList(true);
    }
  }, [userData]);

  const recommendProps = () => {
    if (customListState) {
      return fitData?.customList;
    }

    return pages[0].data.newList;
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
        {pages[0].data.newList.map((list) => (
          <Link href={`/profile/${list._id}`} key={list._id}>
            <a>
              <SmallCard {...list} />
            </a>
          </Link>
        ))}
      </Container>
      <Footer />
    </HomeContainer>
  );
}

export default Home;
