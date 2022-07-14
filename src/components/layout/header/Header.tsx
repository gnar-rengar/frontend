import React, { useMemo } from 'react';
import { useTheme } from '@emotion/react';
import Link from 'next/link';
import Image from 'next/image';

import { Button } from '../../common';
import { HeaderContainer, Nav } from './Header.style';

function Header() {
  const { icon } = useTheme();

  const {
    size: { lg },
  } = icon;

  const links = useMemo(
    () => [
      {
        href: '/custom',
        component: (
          <Button variant="text" size="sm" color="onBackground">
            맞춤추천
          </Button>
        ),
      },
      {
        href: '/recent',
        component: (
          <Button variant="text" size="sm" color="onBackground">
            최신 소환사
          </Button>
        ),
      },
      {
        href: '/chat',
        component: <Image src="/icons/chat.svg" width={lg} height={lg} alt="chat" />,
      },
      {
        href: '/my-page',
        component: <Image src="/icons/profile.svg" width={lg} height={lg} alt="my-page" />,
      },
    ],
    [lg]
  );

  return (
    <HeaderContainer>
      <Link href="/">
        <a data-testid="home">
          <Image src="/icons/main-logo.svg" width="76px" height="30px" alt="logo" />
        </a>
      </Link>
      <Nav role="navigation">
        {links.map((link) => (
          <Link href={link.href} key={link.href}>
            <a>{link.component}</a>
          </Link>
        ))}
      </Nav>
    </HeaderContainer>
  );
}

export default Header;
