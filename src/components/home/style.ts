import styled from '@emotion/styled';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const SwiperContainer = styled.div`
  width: calc(100% + 32px);
  max-width: 480px;
  margin-left: -16px;
  padding-bottom: 16px;
  --swiper-theme-color: ${(props) => props.theme.color.onBackground};
`;

export const Container = styled.div`
  position: relative;
  padding: 16px 0px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const TitleAndMoreContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  z-index: 5px;
`;

export const MoreContainer = styled.div`
  padding: 4px 0px;
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`;

export const BlurContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  backdrop-filter: blur(4px);
  z-index: 40;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;
`;

export const RecommendSwiperContainer = styled.div`
  .swiper-slide {
    margin-right: -120px;
  }

  @media screen and (max-width: 470px) {
    .swiper-slide {
      margin-right: -100px;
    }
  }

  @media screen and (max-width: 450px) {
    .swiper-slide {
      margin-right: -80px;
    }
  }

  @media screen and (max-width: 430px) {
    .swiper-slide {
      margin-right: -60px;
    }
  }

  @media screen and (max-width: 410px) {
    .swiper-slide {
      margin-right: -40px;
    }
  }

  @media screen and (max-width: 390px) {
    .swiper-slide {
      margin-right: -20px;
    }
  }
`;
