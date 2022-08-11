import Router from 'next/router';
import React from 'react';
import LoadingSuspense from '../components/common/loadingSuspense';
import Layout from '../components/layout/Layout';
import OnBoarding from '../components/onBoarding';
import { preFetchIfLoggedIn } from '../hooks/preFetchFns';
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

export const getServerSideProps = preFetchIfLoggedIn([
  { queryKey: queryKeys.onBoarding, fetcher: onBoardingGetAPI },
]);
