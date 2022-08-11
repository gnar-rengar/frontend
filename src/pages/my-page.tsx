import { GetServerSideProps } from 'next';
import React from 'react';
import { dehydrate, QueryClient } from 'react-query';
import LoadingSuspense from '../components/common/loadingSuspense';
import MyPageComponent from '../components/myPage';
import { preFetchAuth } from '../hooks/preFetchAuth';
import { queryKeys } from '../hooks/queryKeys';
import { fetchMyPage } from '../hooks/useGetMyPage';

function MyPage() {
  return (
    <LoadingSuspense>
      <MyPageComponent />
    </LoadingSuspense>
  );
}

export default MyPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { props } = await preFetchAuth(context);

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(queryKeys.myPage, fetchMyPage);

  return {
    props: {
      ...props,
      dehydratedState: dehydrate(queryClient),
    },
  };
};
