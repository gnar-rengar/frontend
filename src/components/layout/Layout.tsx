import styled from '@emotion/styled';
import React from 'react';
import Header from './header/Header';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <LayoutContainer>
      <Header />
      {children}
    </LayoutContainer>
  );
}

const LayoutContainer = styled.div`
  ${(props) => `
    background: ${props.theme.color.BACKGROUND};
    color: ${props.theme.color.ON_BACKGROUND};
  `}
`;

export default Layout;
