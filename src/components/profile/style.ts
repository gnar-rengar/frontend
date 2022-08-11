import styled from '@emotion/styled';

export const ProfileImgWrapper = styled.div`
  position: relative;
  left: 0;
  margin-left: -16px;
  width: calc(100% + 32px);
  padding-top: 100%;
`;

export const TierAndNickname = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 16px;
  gap: 12px;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    ${({ theme: { color } }) => color.surface} 100%
  );
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px 0;
`;

export const PositionContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export const MostChamps = styled.ul`
  display: inline-flex;
  gap: 8px;

  span {
    border-radius: 50%;
  }
`;

export const MatchSectionTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const MatchCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const MatchCardBackground = styled.div<{ win: boolean }>`
  width: 343px;
  height: 144px;
  border-radius: 16px;
  background: radial-gradient(
    circle at 75%,
    ${({ win }) => (win ? '#76e4cbb2' : '#EC9ACBB2')} 0%,
    ${({ theme: { color } }) => color.surface} 60%
  );
  overflow: hidden;
`;

export const MatchCardLayout = styled.div`
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

export const InGameInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const ChampionImageWrapper = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  overflow: hidden;
`;

export const RuneContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const SpellContainer = styled(RuneContainer)``;

export const AssetWrapper = styled.div`
  width: ${({ theme: { icon } }) => icon.size.lg};
  height: ${({ theme: { icon } }) => icon.size.lg};
  border-radius: 4px;

  span {
    border-radius: inherit;
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  gap: 4px;
  align-items: flex-start;
`;

export const ItemContainerExceptForWard = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 76px;
  gap: 2px;
`;

export const NoItem = styled.div`
  width: ${({ theme: { icon } }) => icon.size.lg};
  height: ${({ theme: { icon } }) => icon.size.lg};
  background: ${({ theme: { color } }) => color.surface};
  border-radius: inherit;
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

export const KDAAndMinionKilled = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const KDA = styled.div`
  display: flex;
  gap: 2px;
`;

export const BlurContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  backdrop-filter: blur(4px);
`;

export const LoginMessage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  transform: translate(-50%, -50%);
`;
