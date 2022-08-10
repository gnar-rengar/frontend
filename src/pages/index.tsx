import { GetServerSideProps } from 'next';
import React from 'react';
import LoadingSuspense from '../components/common/loading-suspense';
import Home from '../components/home';

import { axios } from '../axios';
import { authUserGetAPI } from '../hooks/useGetAuth';

import type { AuthUserDTO } from '../types/api.type';

function HomePage({ userData }: { userData: AuthUserDTO }) {
  return (
    <LoadingSuspense>
      <Home userData={userData} />
    </LoadingSuspense>
  );
}

export default HomePage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { token } = context.req.cookies;
  const userData = {};

  if (token) {
    axios.defaults.headers.common.Cookie = context.req.headers.cookie;
    const data = await authUserGetAPI();
    Object.assign(userData, data);
  }

  return {
    props: {
      userData,
    },
  };
};
