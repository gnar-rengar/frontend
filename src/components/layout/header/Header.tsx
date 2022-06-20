import React from 'react';
import Link from 'next/link';
import { Chat, Profile, Search } from '../../icons';

import { HeaderContainer, Nav } from './Header.style';

const links = [
  { href: '/search', icon: <Search /> },
  { href: '/chat', icon: <Chat /> },
  { href: '/profile', icon: <Profile /> },
];

function Header() {
  return (
    <HeaderContainer>
      <div>LOGO</div>
      <Nav role="navigation">
        {links.map((link) => (
          <Link href={link.href} key={link.href}>
            <a>{link.icon}</a>
          </Link>
        ))}
      </Nav>
    </HeaderContainer>
  );
}

export default Header;
