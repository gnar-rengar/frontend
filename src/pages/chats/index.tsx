import React from 'react';
import LoadingSuspense from '../../components/common/loadingSuspense';
import Chats from '../../components/chats';
import InValid from '../../components/chats/InValid';
import { preFetchAuth } from '../../hooks/preFetchFns';

function ChatsPage({ isAuth }: { isAuth: boolean }) {
  if (!isAuth) {
    return (
      <InValid title={'로그인 후\n채팅 목록을 확인해보세요!'} path="/login" buttonText="로그인" />
    );
  }
  return (
    <LoadingSuspense>
      <Chats />
    </LoadingSuspense>
  );
}

export default ChatsPage;

export const getServerSideProps = preFetchAuth;
