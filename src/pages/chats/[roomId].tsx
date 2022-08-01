import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';
import React, { ReactElement, Suspense } from 'react';
import Header from '../../components/chatRoom/Header';
import Layout from '../../components/layout/Layout';

const ChatRoom = dynamic(() => import('../../components/chatRoom'), { ssr: false });

function ChatPage({ roomId }: { roomId: string }) {
  return (
    <Suspense fallback="loading">
      <ChatRoom roomId={roomId} />
    </Suspense>
  );
}

export default ChatPage;

// ChatPage.getLayout = function getLayout(page: ReactElement) {
//   return <Layout header={<Header />}>{page}</Layout>;
// };

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { roomId } = context.query;
  return {
    props: {
      roomId,
    },
  };
};
