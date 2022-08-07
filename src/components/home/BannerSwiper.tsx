import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper';
import { useRouter } from 'next/router';
import { SwiperContainer } from './style';

function BannerSwiper() {
  const router = useRouter();

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
          <Image
            onClick={() => router.push('/banner/manual')}
            src="/banner/manual.png"
            layout="responsive"
            width="480px"
            height="256px"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            onClick={() => router.push('https://tally.so/r/mJ9WXX')}
            src="/banner/survey.png"
            layout="responsive"
            width="480px"
            height="256px"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            onClick={() => router.push('/banner/gifticon')}
            src="/banner/gifticon.png"
            layout="responsive"
            width="480px"
            height="256px"
          />
        </SwiperSlide>
      </Swiper>
    </SwiperContainer>
  );
}

export default BannerSwiper;
