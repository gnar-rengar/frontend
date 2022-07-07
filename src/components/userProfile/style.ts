import styled from '@emotion/styled';

export const MatchCardBackground = styled.div`
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

export const MatchCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 12px 16px;
  gap: 4px;
  backdrop-filter: blur(50px);
`;

export const QueueInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const QueueTypeAndStartTime = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
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

export const TextAreaContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LevelAndChampionName = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const Level = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  background: ${({ theme: { color } }) => color.background};
  border-radius: 50%;
`;

export const MinionKilledAndKDA = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
