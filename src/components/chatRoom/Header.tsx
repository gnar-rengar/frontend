import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useGetOpponent from '../../hooks/useGetOpponent';

import { Typography } from '../common';
import { HeaderContainer } from './style';

interface HeaderProps {
  roomId: string;
}

function Header({ roomId }: HeaderProps) {
  const {
    opponent: { userId, profileUrl, lolNickname },
  } = useGetOpponent(roomId);

  return (
    <HeaderContainer>
      <Link href={`/profile/${userId}`}>
        <a>
          <div>
            <Image src={profileUrl} width="28px" height="28px" />
            <Typography variant="h3" color="onSurface">
              {lolNickname}
            </Typography>
          </div>
        </a>
      </Link>
    </HeaderContainer>
  );
}

export default Header;
