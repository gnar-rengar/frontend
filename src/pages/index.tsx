import React from 'react';
import LoadingSuspense from '../components/common/loadingSuspense';
import Home from '../components/home';

import { preFetchAuth } from '../hooks/preFetchFns';
import IsOnBoarded from '../components/Auth';

function HomePage({ isAuth }: { isAuth: boolean }) {
  return (
    <LoadingSuspense>
      <Home isAuth={isAuth} />
    </LoadingSuspense>
  );
}

export default IsOnBoarded(HomePage);

export const getServerSideProps = preFetchAuth;
