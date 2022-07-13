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
  padding: 16px 0px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const TitleAndMoreContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
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

export const Test = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 311px;
  height: 102px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0), ${({ theme: { color } }) => color.surface});
`;
