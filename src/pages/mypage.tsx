import React, { Suspense } from 'react';

// eslint-disable-next-line import/no-named-default
import { default as MyPageComponent } from '../components/mypage';

function MyPage() {
  return (
    <Suspense fallback="loading">
      <MyPageComponent />
    </Suspense>
  );
}

export default MyPage;
