import React from 'react';
import Header from './header/Header';

import { LayoutContainer, Main } from './Layout.style';

interface LayoutProps {
  header?: boolean;
  children: React.ReactNode;
}

function Layout({ header = true, children }: LayoutProps) {
  return (
    <LayoutContainer>
      {header && <Header />}
      <Main>{children}</Main>
    </LayoutContainer>
  );
}

export default Layout;
