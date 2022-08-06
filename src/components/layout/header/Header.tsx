import React, { useMemo } from 'react';
import { useTheme } from '@emotion/react';
import Link from 'next/link';
import Image from 'next/image';

import { Button } from '../../common';
import { HeaderContainer, IconWrapper, Nav, TextWrapper } from './Header.style';

function Header() {
  const { icon } = useTheme();

  const {
    size: { lg },
  } = icon;

  const links = useMemo(
    () => [
      {
        href: '/recommend/fit',
        component: (
          <TextWrapper>
            <Button variant="text" size="sm" color="onBackground">
              맞춤추천
            </Button>
          </TextWrapper>
        ),
      },
      {
        href: '/recommend/new',
        component: (
          <TextWrapper>
            <Button variant="text" size="sm" color="onBackground">
              최신 소환사
            </Button>
          </TextWrapper>
        ),
      },
      {
        href: '/chats',
        component: (
          <IconWrapper>
            <Image src="/icons/chat.svg" width={lg} height={lg} alt="chat" />
          </IconWrapper>
        ),
      },
      {
        href: '/my-page',
        component: (
          <IconWrapper>
            <Image src="/icons/profile.svg" width={lg} height={lg} alt="my-page" />
          </IconWrapper>
        ),
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
