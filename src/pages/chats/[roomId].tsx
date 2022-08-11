import { GetServerSideProps } from 'next';
import React from 'react';
import { dehydrate, QueryClient } from 'react-query';
import { axios } from '../../axios';
import ChatRoom from '../../components/chatRoom';
import InValid from '../../components/chats/InValid';
import LoadingSuspense from '../../components/common/loadingSuspense';
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
  const { token } = context.req.cookies;
  const { roomId } = context.query;

  if (token) {
    const queryClient = new QueryClient();
    axios.defaults.headers.common.Cookie = context.req.headers.cookie;
    await queryClient.prefetchQuery(queryKeys.authUser, authUserGetAPI);
    await queryClient.prefetchQuery(queryKeys.authUser, () => fetchMessages(roomId as string));

    return {
      props: {
        isAuth: true,
        roomId,
        dehydratedState: dehydrate(queryClient),
      },
    };
  }

  return {
    props: {
      isAuth: false,
    },
  };
};
