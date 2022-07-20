import styled from '@emotion/styled';

export const TestContainer = styled.div`
  width: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, 30%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TestStartContainer = styled(TestContainer)`
  gap: 40px;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StartEndButtonContainer = styled(ButtonContainer)`
  padding: 0 16px;
  position: fixed;
  left: 50%;
  bottom: 5%;
  transform: translateX(-50%);
  max-width: 480px;
`;

export const TendencyProgressBar = styled.div<{ width: string }>`
  width: 100%;
  position: relative;
  height: 2px;
  background-color: ${(props) => props.theme.color.onBackgroundSub};

  &::before {
    content: '';
    position: absolute;
    top: 0px;
    left: 0px;
    width: ${(props) => props.width}%;
    height: 100%;
    background-color: ${(props) => props.theme.color.primary};
  }
`;

export const EndContainer = styled(TestContainer)`
  gap: 24px;
`;

export const PlayStyleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ResultContainer = styled.div`
  width: 172px;
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
`;

export const ChipContainer = styled.div`
  width: 82px;
`;

export const QuestionContainer = styled.div`
  height: 100vh;
  padding: 32px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const QuestionAndExpression = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

export const Test = styled.div`
  /* width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between; */
`;
