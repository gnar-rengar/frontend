import { GetServerSideProps } from 'next';
import React from 'react';
import ChatRoom from '../../components/chatRoom';
import InValid from '../../components/chats/InValid';
import LoadingSuspense from '../../components/common/loadingSuspense';
import { preFetchIfLoggedIn } from '../../hooks/preFetchFns';
import { queryKeys } from '../../hooks/queryKeys';
import { authUserGetAPI } from '../../hooks/useGetAuth';
import { fetchMessages } from '../../hooks/useGetMessages';

interface ChatPageProps {
  roomId: string;
  isAuth: boolean;
}

function ChatPage(props: ChatPageProps) {
  const { isAuth, ...other } = props;

  if (!isAuth) {
    return (
      <InValid title={'로그인 후\n채팅 목록을 확인해보세요!'} path="/login" buttonText="로그인" />
    );
  }

  return (
    <LoadingSuspense>
      <ChatRoom {...other} />
    </LoadingSuspense>
  );
}

export default ChatPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { roomId } = context.query;

  const { props } = await preFetchIfLoggedIn([
    { queryKey: queryKeys.authUser, fetcher: authUserGetAPI },
    {
      queryKey: queryKeys.message(roomId as string),
      fetcher: () => fetchMessages(roomId as string),
    },
  ])(context);

  return {
    props: {
      roomId,
      ...props,
    },
  };
};
