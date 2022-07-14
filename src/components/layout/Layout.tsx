import React from 'react';
import Header from './header/Header';

import { LayoutContainer, Main } from './Layout.style';

interface LayoutProps {
  header?: boolean;
  children: React.ReactNode;
}

const HEADER_HEIGHT = 56;

function Layout({ header = true, children }: LayoutProps) {
  return (
    <LayoutContainer>
      {header && <Header height={HEADER_HEIGHT} />}
      <Main headerHeight={HEADER_HEIGHT}>{children}</Main>
    </LayoutContainer>
  );
}

export default Layout;
