import React from 'react';
import MyPageComponent from '../components/myPage';

function MyPage() {
  return (
    // <Suspense fallback="loading">
    <MyPageComponent />
    // </Suspense>
  );
}

export default MyPage;
