import styled from '@emotion/styled';

export const LayoutContainer = styled.div`
  min-height: 100vh;
  ${({ theme: { color } }) => `
  background: ${color.background};
  color: ${color.onBackground};
`}
`;

export const Main = styled.main<{ headerHeight: number }>`
  position: relative;
  min-height: calc(100vh - ${({ headerHeight }) => headerHeight}px);
  padding: 0 16px;
`;
