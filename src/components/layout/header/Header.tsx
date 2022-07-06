import React from 'react';
import Link from 'next/link';

import Image from 'next/future/image';
import { HeaderContainer, Nav } from './Header.style';

// const links = [
//   { href: '/search', icon: <Search /> },
//   { href: '/chat', icon: <Chat /> },
//   { href: '/profile', icon: <Profile /> },
// ];

function Header() {
  return (
    <HeaderContainer>
      <Link href="/">
        <a>
          <Image src="/icons/main-logo.svg" height="30px" alt="logo" />
        </a>
      </Link>
      <Nav role="navigation">
        <Link href="/chat">
          <a>
            <Image src="/icons/chat.svg" width="24px" height="24px" alt="chat" />
          </a>
        </Link>
        <Link href="/my-page">
          <a>
            <Image src="/icons/profile.svg" width="24px" height="24px" alt="profile" />
          </a>
        </Link>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;
