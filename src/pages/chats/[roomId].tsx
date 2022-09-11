import { GetServerSideProps } from 'next';
import React from 'react';
import ChatRoom from '../../components/chatRoom';
import InValid from '../../components/chats/InValid';
import LoadingSuspense from '../../components/common/loadingSuspense';
import WithAuth from '../../components/WithAuth';
import { preFetchIfLoggedIn } from '../../hooks/preFetchFns';
import { queryKeys } from '../../constant/queryKeys';
import { authUserGetAPI } from '../../hooks/useGetAuth';
import { fetchMessages } from '../../hooks/useGetMessages';

interface ChatPageProps {
  isAuth: boolean;
  roomId: string;
}

function ChatPage(props: ChatPageProps) {
  const { isAuth, roomId } = props;

  if (!isAuth) {
    <InValid title={'로그인 후\n채팅 목록을 확인해보세요!'} path="/login" buttonText="로그인" />;
  }

  return (
    <LoadingSuspense>
      <ChatRoom roomId={roomId} />
    </LoadingSuspense>
  );
}

export default WithAuth(ChatPage);

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
