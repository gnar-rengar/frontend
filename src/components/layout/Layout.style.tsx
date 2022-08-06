import styled from '@emotion/styled';

export const LayoutContainer = styled.div`
  min-height: 100vh;
  max-width: 480px;
  min-width: 375px;
  margin: auto;
  ${({ theme: { color } }) => `
    background: ${color.background};
    color: ${color.onBackground};
  `}
`;

export const Main = styled.main`
  position: relative;
  padding: 0 16px;
  min-height: ${(props) => `calc(100vh - ${props.theme.header.height})`};
`;
