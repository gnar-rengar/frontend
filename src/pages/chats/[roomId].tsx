import { GetServerSideProps } from 'next';
import React from 'react';
import ChatRoom from '../../components/chatRoom';

function ChatPage({ roomId }: { roomId: string }) {
  return <ChatRoom roomId={roomId} />;
}

export default ChatPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { roomId } = context.query;
  return {
    props: {
      roomId,
    },
  };
};
