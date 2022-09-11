import styled from '@emotion/styled';

export const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 343px;
  padding: 32px;
  gap: 16px;
  z-index: 1000;
  background: ${({ theme }) => theme.color.surface};
  border-radius: 32px;
  color: ${({ theme }) => theme.color.onSurface};
`;

export const IconsAndText = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px;
`;

export const IconConatiner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span:nth-of-type(2) {
    cursor: pointer;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 12px;

  button:nth-of-type(2) {
    flex-grow: 1;
    width: auto;
  }
`;
