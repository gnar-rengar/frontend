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
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
      >
        <SwiperSlide>
          <Image src="/banner/home.png" layout="responsive" width="480px" height="256px" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/banner/home.png" layout="responsive" width="480px" height="256px" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/banner/home.png" layout="responsive" width="480px" height="256px" />
        </SwiperSlide>
      </Swiper>
    </SwiperContainer>
  );
}

export default BannerSwiper;
