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
