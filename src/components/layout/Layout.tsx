import React from 'react';
import Header from './header/Header';

import { LayoutContainer, Main } from './Layout.style';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <LayoutContainer>
      <Header />
      <Main>{children}</Main>
    </LayoutContainer>
  );
}

export default Layout;
