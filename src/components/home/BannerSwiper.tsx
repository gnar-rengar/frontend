import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper';
import Link from 'next/link';
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
          <Link href="/banner/manual">
            <a>
              <Image src="/banner/manual.png" layout="responsive" width="480px" height="256px" />
            </a>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="https://tally.so#tally-open=mJ9WXX&tally-emoji-text=❤️&tally-emoji-animation=tada">
            <a>
              <Image src="/banner/survey.png" layout="responsive" width="480px" height="256px" />
            </a>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/banner/gifticon">
            <a>
              <Image src="/banner/gifticon.png" layout="responsive" width="480px" height="256px" />
            </a>
          </Link>
        </SwiperSlide>
      </Swiper>
    </SwiperContainer>
  );
}

export default BannerSwiper;
