import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';
import RecommandCard from '../common/card/RecommandCard';
import { CardProps } from '../common/card/Card';

function RecommandSwiper(props: CardProps) {
  return (
    <div>
      <Swiper spaceBetween={-55} slidesPerView="auto" centeredSlides>
        <SwiperSlide>
          <RecommandCard {...props} />
        </SwiperSlide>
        <SwiperSlide>
          <RecommandCard {...props} />
        </SwiperSlide>
        <SwiperSlide>
          <RecommandCard {...props} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default RecommandSwiper;
