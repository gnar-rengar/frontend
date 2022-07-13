import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper';
import { SwiperContainer } from './style';

function BannerSwiper() {
  return (
    <SwiperContainer>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
      >
        <SwiperSlide>
          <Image src="/banner/home.png" layout="responsive" width="375px" height="200" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/banner/home.png" layout="responsive" width="375px" height="200" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/banner/home.png" layout="responsive" width="375px" height="200" />
        </SwiperSlide>
      </Swiper>
    </SwiperContainer>
  );
}

export default BannerSwiper;
