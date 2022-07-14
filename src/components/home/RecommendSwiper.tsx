import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';
import { CardProps } from '../common/card/SmallCard';
import LargeCard from '../common/card/LargeCard';

function RecommandSwiper(props: CardProps) {
  return (
    <div>
      <Swiper spaceBetween={-55} slidesPerView="auto" centeredSlides>
        <SwiperSlide>
          <LargeCard {...props} />
        </SwiperSlide>
        <SwiperSlide>
          <LargeCard {...props} />
        </SwiperSlide>
        <SwiperSlide>
          <LargeCard {...props} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default RecommandSwiper;
