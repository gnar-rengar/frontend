import styled from '@emotion/styled';

export const LayoutContainer = styled.div`
  min-height: 100vh;
  max-width: 480px;
  margin: auto;
  ${({ theme: { color } }) => `
  background: ${color.background};
  color: ${color.onBackground};
  `}
`;

export const Main = styled.main`
  padding: 0 16px;
`;
