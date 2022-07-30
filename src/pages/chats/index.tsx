import dynamic from 'next/dynamic';
import React, { Suspense } from 'react';

const Chats = dynamic(() => import('../../components/chats'), { ssr: false });

function ChatsPage() {
  return (
    <Suspense fallback="loading">
      <Chats />
    </Suspense>
  );
}

export default ChatsPage;
