import React from 'react';
import LoadingSuspense from '../components/common/loadingSuspense';
import MyPageComponent from '../components/myPage';
import { preFetchIfLoggedIn } from '../hooks/preFetchFns';
import { fetchMyPage } from '../hooks/useGetMyPage';
import { queryKeys } from '../hooks/queryKeys';
import { authUserGetAPI } from '../hooks/useGetAuth';
import OnBoardGuard from '../components/WithAuth';

function MyPage() {
  return (
    <LoadingSuspense>
      <MyPageComponent />
    </LoadingSuspense>
  );
}

export default OnBoardGuard(MyPage);

export const getServerSideProps = preFetchIfLoggedIn([
  { queryKey: queryKeys.myPage, fetcher: fetchMyPage },
  { queryKey: queryKeys.authUser, fetcher: authUserGetAPI },
]);
