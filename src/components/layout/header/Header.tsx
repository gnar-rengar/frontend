import React from 'react';
import { Chat, Profile, Search } from '../../icons';

import Link from 'next/link';
import styled from '@emotion/styled';

function Header() {
  return (
    <HeaderContainer>
      <div>LOGO</div>
      <Nav>
        <Link href="#">
          <Chat />
        </Link>
        <Link href="#">
          <Profile />
        </Link>
        <Link href="#">
          <Search />
        </Link>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 14px 16px;
  gap: 56px;
  height: 56px;
  background: ${(props) => props.theme.color.SURFACE};
`;

const Nav = styled.nav`
  display: flex;
  gap: 24px;
`;
