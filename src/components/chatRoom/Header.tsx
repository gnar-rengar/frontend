import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Typography } from '../common';
import { HeaderContainer } from './style';

import type { Opponent } from '../../types/api.type';

function Header({ opponent }: { opponent: Opponent }) {
  const { userId, profileUrl, lolNickname } = opponent;

  return (
    <HeaderContainer>
      <Link href={`/profile/${userId}`}>
        <a>
          <Image src={profileUrl} width="28px" height="28px" />
          <Typography variant="h3" color="onSurface">
            {lolNickname}
          </Typography>
        </a>
      </Link>
    </HeaderContainer>
  );
}

export default Header;
