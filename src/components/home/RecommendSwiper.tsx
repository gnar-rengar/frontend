import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';
import Link from 'next/link';
import { CardProps } from '../../types/card.type';
import LargeCard from '../common/card/LargeCard';

interface RecommendSwiperProps {
  listProps: CardProps[];
}

function RecommendSwiper({ listProps }: RecommendSwiperProps) {
  return (
    <div>
      <Swiper spaceBetween={-120} slidesPerView="auto" centeredSlides>
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
    </div>
  );
}

export default RecommendSwiper;
