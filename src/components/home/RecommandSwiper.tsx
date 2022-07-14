import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import RecommandCard from './RecommandCard';
import { RecommandSwiperContainer } from './style';

function RecommandSwiper() {
  return (
    <RecommandSwiperContainer>
      <Swiper spaceBetween={-55} slidesPerView="auto" centeredSlides>
        <SwiperSlide>
          <RecommandCard />
        </SwiperSlide>
        <SwiperSlide>
          <RecommandCard />
        </SwiperSlide>
        <SwiperSlide>
          <RecommandCard />
        </SwiperSlide>
      </Swiper>
    </RecommandSwiperContainer>
  );
}

export default RecommandSwiper;
