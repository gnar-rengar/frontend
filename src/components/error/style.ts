import styled from '@emotion/styled';

export const ErrorContainer = styled.div`
  width: 100%;
  height: ${(props) => `calc(100vh - ${props.theme.header.height})`};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

export const ErrorButton = styled.div`
  width: 148px;
`;
