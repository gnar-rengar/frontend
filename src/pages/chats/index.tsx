import dynamic from 'next/dynamic';
import React from 'react';
import LoadingSuspense from '../../components/common/loadingSuspense';

const Chats = dynamic(() => import('../../components/chats'), { ssr: false });

function ChatsPage() {
  return (
    <LoadingSuspense>
      <Chats />
    </LoadingSuspense>
  );
}

export default ChatsPage;
