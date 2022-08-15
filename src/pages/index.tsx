import React from 'react';
import LoadingSuspense from '../components/common/loadingSuspense';
import Home from '../components/home';

import WithAuth from '../components/WithAuth';
import { preFetchAuth } from '../hooks/preFetchFns';

function HomePage({ isAuth }: { isAuth: boolean }) {
  return (
    <LoadingSuspense>
      <Home isAuth={isAuth} />
    </LoadingSuspense>
  );
}

export default WithAuth(HomePage);

export const getServerSideProps = preFetchAuth;
