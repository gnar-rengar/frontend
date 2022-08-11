import { useRouter } from 'next/router';
import React from 'react';
import LoadingSuspense from '../../components/common/loadingSuspense';
import Fit from '../../components/recommend/Fit';
import { preFetchAuth } from '../../hooks/preFetchAuth';

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

export default FitPage;

export const getServerSideProps = preFetchAuth;
