import styled from '@emotion/styled';

export const MatchCardContainer = styled.div`
  width: 343px;
  height: 144px;
  border-radius: 16px;
  background: radial-gradient(
    circle at 75%,
    #76e4cbb2 0%,
    ${({ theme: { color } }) => color.surface} 60%
  );
  overflow: hidden;
`;

export const StartTime = styled.div`
  font-weight: 400;
  font-size: 10px;
  line-height: 14px;
`;

export const PlayTime = styled.div`
  font-weight: 700;
  font-size: 10px;
  line-height: 14px;
`;
