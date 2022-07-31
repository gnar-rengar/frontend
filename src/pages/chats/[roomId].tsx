import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';
import React, { Suspense } from 'react';

const ChatRoom = dynamic(() => import('../../components/chatRoom'), { ssr: false });

function ChatPage({ roomId }: { roomId: string }) {
  return (
    <Suspense fallback="loading">
      <ChatRoom roomId={roomId} />
    </Suspense>
  );
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
