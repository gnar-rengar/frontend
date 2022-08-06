import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';
import Link from 'next/link';
import { CardProps } from '../../types/card.type';
import LargeCard from '../common/card/LargeCard';
import { RecommendSwiperContainer } from './style';

interface RecommendSwiperProps {
  listProps: CardProps[];
}

function RecommendSwiper({ listProps }: RecommendSwiperProps) {
  return (
    <RecommendSwiperContainer>
      <Swiper slidesPerView="auto">
        {listProps &&
          listProps.map((list) => (
            <SwiperSlide key={list._id}>
              <Link href={`/profile/${list._id}`}>
                <a>
                  <LargeCard {...list} />
                </a>
              </Link>
            </SwiperSlide>
          ))}
      </Swiper>
    </RecommendSwiperContainer>
  );
}

export default RecommendSwiper;
