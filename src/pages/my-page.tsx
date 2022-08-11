import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { dehydrate, QueryClient } from 'react-query';
import { axios } from '../axios';
import LoadingSuspense from '../components/common/loadingSuspense';
import MyPageComponent from '../components/myPage';
import { queryKeys } from '../hooks/queryKeys';
import { fetchMyPage } from '../hooks/useGetMyPage';

function MyPage({ isAuth }: { isAuth: boolean }) {
  if (!isAuth) {
    useRouter().replace('/login');
    return;
  }

  return (
    <LoadingSuspense>
      <MyPageComponent />
    </LoadingSuspense>
  );
}

export default MyPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { token } = context.req.cookies;

  if (token) {
    const queryClient = new QueryClient();
    axios.defaults.headers.common.Cookie = context.req.headers.cookie;
    await queryClient.prefetchQuery(queryKeys.myPage, fetchMyPage);

    return {
      props: {
        isAuth: true,
        dehydratedState: dehydrate(queryClient),
      },
    };
  }

  return {
    props: {
      isAuth: false,
    },
  };
};
