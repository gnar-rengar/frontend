import styled from '@emotion/styled';
import React from 'react';
import Header from './header/Header';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <LayoutContainer>
      <Header />
      <Main>{children}</Main>
    </LayoutContainer>
  );
}

const LayoutContainer = styled.div`
  min-height: 100vh;
  ${({ theme: { color } }) => `
    background: ${color.BACKGROUND};
    color: ${color.ON_BACKGROUND};
  `}
`;

const Main = styled.main`
  padding: 16px;
  height: 1000px;
`;

export default Layout;
