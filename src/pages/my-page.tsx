import dynamic from 'next/dynamic';
import React from 'react';
import LoadingSuspense from '../components/common/loading-suspense';
// import MyPageComponent from '../components/myPage';

const MyPageComponent = dynamic(() => import('../components/myPage'), { ssr: false });

function MyPage() {
  return (
    <LoadingSuspense>
      <MyPageComponent />
    </LoadingSuspense>
  );
}

export default MyPage;
