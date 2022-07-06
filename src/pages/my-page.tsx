import React, { Suspense } from 'react';
import MyPageComponent from '../components/mypage';

function MyPage() {
  return (
    <Suspense fallback="loading">
      <MyPageComponent />
    </Suspense>
  );
}

export default MyPage;
