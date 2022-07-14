import styled from '@emotion/styled';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const SwiperContainer = styled.div`
  width: 100vw;
  margin-left: calc(-50vw + 50%);
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
  gap: 9px;
  cursor: pointer;
`;

export const Blur = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  backdrop-filter: blur(4px);
  z-index: 999;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;
`;
