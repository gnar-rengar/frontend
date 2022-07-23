import React, { Suspense } from 'react';
import OnBoarding from '../components/onBoarding';

function OnBoardingPage() {
  return (
    <Suspense fallback="loading">
      <OnBoarding />
    </Suspense>
  );
}

export default OnBoardingPage;
