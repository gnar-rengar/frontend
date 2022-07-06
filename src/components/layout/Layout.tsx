import React from 'react';
import Header from './header/Header';

import { LayoutContainer, Main } from './Layout.style';

interface LayoutProps {
  noneHeader?: boolean;
  children: React.ReactNode;
}

function Layout({ noneHeader = false, children }: LayoutProps) {
  return (
    <LayoutContainer>
      {!noneHeader && <Header />}
      <Main>{children}</Main>
    </LayoutContainer>
  );
}

export default Layout;
