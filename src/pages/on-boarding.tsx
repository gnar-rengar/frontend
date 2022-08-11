import { GetServerSidePropsContext } from 'next';
import Router from 'next/router';
import React from 'react';
import { dehydrate, QueryClient } from 'react-query';
import { axios } from '../axios';
import LoadingSuspense from '../components/common/loadingSuspense';
import Layout from '../components/layout/Layout';
import OnBoarding from '../components/onBoarding';
import { queryKeys } from '../hooks/queryKeys';
import { onBoardingGetAPI } from '../hooks/useGetOnBoarding';

function OnBoardingPage({ isAuth }: { isAuth: boolean }) {
  if (!isAuth) {
    Router.replace('/login');
    return;
  }

  return (
    <LoadingSuspense>
      <OnBoarding />
    </LoadingSuspense>
  );
}

export default OnBoardingPage;

OnBoardingPage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout header={false}>{page}</Layout>;
};

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const { token } = context.req.cookies;

  if (token) {
    const queryClient = new QueryClient();
    axios.defaults.headers.common.Cookie = context.req.headers.cookie;
    await queryClient.prefetchQuery(queryKeys.onBoarding, onBoardingGetAPI);

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
