import dynamic from 'next/dynamic';
import React, { Suspense } from 'react';
// import MyPageComponent from '../components/myPage';

const MyPageComponent = dynamic(() => import('../components/myPage'), { ssr: false });

function MyPage() {
  return (
    <Suspense fallback="loading">
      <MyPageComponent />
    </Suspense>
  );
}

export default MyPage;
