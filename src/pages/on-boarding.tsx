import React, { Suspense } from 'react';
import Layout from '../components/layout/Layout';
import OnBoarding from '../components/onBoarding';

function OnBoardingPage() {
  return (
    <Suspense fallback="loading">
      <OnBoarding />
    </Suspense>
  );
}

export default OnBoardingPage;

OnBoardingPage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout header={false}>{page}</Layout>;
};
