import Router from 'next/router';
import React from 'react';
import LoadingSuspense from '../components/common/loadingSuspense';
import MyPageComponent from '../components/myPage';
import { preFetchIfLoggedIn } from '../hooks/preFetchFns';
import { queryKeys } from '../hooks/queryKeys';
import { fetchMyPage } from '../hooks/useGetMyPage';

function MyPage({ isAuth }: { isAuth: boolean }) {
  if (!isAuth) {
    Router.replace('/login');
    return;
  }

  return (
    <LoadingSuspense>
      <MyPageComponent />
    </LoadingSuspense>
  );
}

export default MyPage;

export const getServerSideProps = preFetchIfLoggedIn([
  { queryKey: queryKeys.myPage, fetcher: fetchMyPage },
]);
