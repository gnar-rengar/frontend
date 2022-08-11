import { GetServerSideProps } from 'next';
import React from 'react';
import ChatRoom from '../../components/chatRoom';
import InValid from '../../components/chats/InValid';
import LoadingSuspense from '../../components/common/loadingSuspense';
import { preFetchAuth } from '../../hooks/preFetchAuth';

interface ChatPageProps {
  roomId: string;
  isAuth: boolean;
}

function ChatPage(props: ChatPageProps) {
  const { isAuth, roomId } = props;

  if (!isAuth) {
    return (
      <InValid title={'로그인 후\n채팅 목록을 확인해보세요!'} path="/login" buttonText="로그인" />
    );
  }
  return (
    <LoadingSuspense>
      <ChatRoom roomId={roomId} />
    </LoadingSuspense>
  );
}

export default ChatPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { props } = await preFetchAuth(context);
  const { roomId } = context.query;

  return {
    props: {
      roomId,
      ...props,
    },
  };
};
