import { useRouter } from 'next/router';
import React from 'react';
import LoadingSuspense from '../../components/common/loadingSuspense';
import OnBoardGuard from '../../components/WithAuth';
import Fit from '../../components/recommend/Fit';
import { preFetchAuth } from '../../hooks/preFetchFns';

function FitPage({ isAuth }: { isAuth: boolean }) {
  if (!isAuth) {
    useRouter().replace('/login?required=true');
    return;
  }

  return (
    <LoadingSuspense>
      <Fit />
    </LoadingSuspense>
  );
}

export default OnBoardGuard(FitPage);

export const getServerSideProps = preFetchAuth;
