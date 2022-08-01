import Image from 'next/image';
import React from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { queryKeys } from '../../hooks/queryKeys';
import { HeaderContainer } from './style';

function Header() {
  // const queryClient = useQueryClient();
  // queryClient
  //   .getQueryCache()
  //   .subscribe((e) => e.query.queryKey === 'chatRoom' && console.log(e.query.state.data));

  useQuery(queryKeys.chatRoom, () => Promise.resolve('nothing'));
  // if (!roomData) return;

  // const {
  // opponent: { profileUrl, lolNickname },
  // } = roomData;

  return (
    <HeaderContainer>
      {/* <Image src={profileUrl} width="28px" height="28px" /> */}
      {/* <Typography>{lolNickname}</Typography> */}
    </HeaderContainer>
  );
}

export default Header;
