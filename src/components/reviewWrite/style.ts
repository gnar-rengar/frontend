import styled from '@emotion/styled';

export const Form = styled.form`
  min-height: calc(100vh - ${({ theme }) => theme.header.height});
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export const ReviewSuccessContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 16px;
  transform: translate(-50%, -50%);
`;
