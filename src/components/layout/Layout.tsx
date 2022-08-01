import React from 'react';
import { LayoutContainer, Main } from './Layout.style';

interface LayoutProps {
  header?: React.ReactNode;
  children: React.ReactNode;
}

function Layout({ header, children }: LayoutProps) {
  return (
    <LayoutContainer>
      {header && header}
      <Main>{children}</Main>
    </LayoutContainer>
  );
}

export default Layout;
