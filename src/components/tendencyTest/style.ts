import styled from '@emotion/styled';

export const TestContainer = styled.div`
  width: 100%;
  position: absolute;
  left: 50%;
  top: 30%;
  transform: translate(-50%, -30%);
`;

export const TestStartContainer = styled(TestContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

export const ButtonContainer = styled.div`
  position: absolute;
  bottom: 5%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const TendencyProgressBar = styled.div<{ width: string }>`
  width: 100%;
  position: relative;
  height: 2px;
  margin-top: 16px;
  background-color: ${(props) => props.theme.color.onBackgroundSub};

  div {
    position: absolute;
    top: 0px;
    left: 0px;
    width: ${(props) => props.width}%;
    height: 100%;
    background-color: ${(props) => props.theme.color.primary};
  }
`;

export const EndContainer = styled(TestContainer)`
  display: flex;
  flex-direction: column;
`;

export const PlayStyleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
