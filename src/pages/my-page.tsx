import React, { Suspense } from 'react';
// eslint-disable-next-line
import { default as MyPageComponent } from '../components/myPage';

function MyPage() {
  return (
    <Suspense fallback="loading">
      <MyPageComponent />
    </Suspense>
  );
}

export default MyPage;
