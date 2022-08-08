import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';
import React from 'react';
import LoadingSuspense from '../../components/common/loading-suspense';

const ChatRoom = dynamic(() => import('../../components/chatRoom'), { ssr: false });

function ChatPage({ roomId }: { roomId: string }) {
  return (
    <LoadingSuspense>
      <ChatRoom roomId={roomId} />
    </LoadingSuspense>
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
