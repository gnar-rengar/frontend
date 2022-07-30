import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';
import LargeCard from '../common/card/LargeCard';
import { SummonerFitRecommendDTO } from '../../types/api.type';

function RecommandSwiper(props: SummonerFitRecommendDTO) {
  const { customList } = props;

  return (
    <div>
      <Swiper spaceBetween={-120} slidesPerView="auto" centeredSlides>
        {customList &&
          customList.map((list) => (
            <SwiperSlide key={list._id}>
              <LargeCard {...list} key={list._id} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

export default RecommandSwiper;
