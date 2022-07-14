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
  display: flex;
  align-items: center;
  gap: 9px;
  cursor: pointer;
`;

export const RecommandCardContainer = styled.div`
  position: relative;
  width: 311px;
  height: 311px;
  border-radius: 16px;
  overflow: hidden;
  background-color: ${({ theme: { color } }) => color.surface};
`;

export const RecommandInfoContainer = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 104px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 25%, rgba(47, 47, 47, 1) 55%);
`;

export const InfoTopContainer = styled.div`
  padding: 0 16px;
  height: 54px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const InfoBottomContainer = styled.div`
  height: 100%;
  padding: 0 16px;
`;

export const Blur = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  backdrop-filter: blur(4px);
  z-index: 999px;
`;

export const RecommandSwiperContainer = styled.div``;
