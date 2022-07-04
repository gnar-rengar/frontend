import styled from '@emotion/styled';

export const TestContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 20%;
  transform: translate(-50%, -20%);
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  align-items: center;
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
