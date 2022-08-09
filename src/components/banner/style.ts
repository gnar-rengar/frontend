import styled from '@emotion/styled';

export const Container = styled.div`
  width: calc(100% + 32px);
  margin-left: -16px;
`;

export const ImageContainer = styled.div`
  position: relative;
`;

export const ButtonContainer = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 25px;
  width: 100%;
  max-width: 480px;
  padding: 0 16px;
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;
