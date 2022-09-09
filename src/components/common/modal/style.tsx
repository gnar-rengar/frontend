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
