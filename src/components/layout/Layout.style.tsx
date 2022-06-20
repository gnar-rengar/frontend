import styled from '@emotion/styled';

export const LayoutContainer = styled.div`
  min-height: 100vh;
  ${({ theme: { color } }) => `
  background: ${color.BACKGROUND};
  color: ${color.ON_BACKGROUND};
`}
`;

export const Main = styled.main`
  padding: 16px;
`;
