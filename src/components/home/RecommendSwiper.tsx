import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';
import LargeCard from '../common/card/LargeCard';
import { CardProps } from '../../types/api.type';

interface RecommendSwiperProps {
  listProps: CardProps[];
}

function RecommandSwiper({ listProps }: RecommendSwiperProps) {
  return (
    <div>
      <Swiper spaceBetween={-120} slidesPerView="auto" centeredSlides>
        {listProps &&
          listProps.map((list) => (
            <SwiperSlide key={list._id}>
              <LargeCard {...list} key={list._id} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

export default RecommandSwiper;
