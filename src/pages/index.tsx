import { GetServerSideProps } from 'next';
import React from 'react';
import { dehydrate, QueryClient } from 'react-query';
import { axios } from '../axios';
import LoadingSuspense from '../components/common/loading-suspense';
import Home from '../components/home';
import { queryKeys } from '../hooks/queryKeys';
import { authUserGetAPI } from '../hooks/useGetAuth';
import { AuthUserDTO } from '../types/api.type';

function HomePage() {
  return (
    <LoadingSuspense>
      <Home />
    </LoadingSuspense>
  );
}

export default HomePage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { token } = context.req.cookies;

  if (token) {
    console.log(token);
    const queryClient = new QueryClient();
    await queryClient.prefetchQuery(queryKeys.authUser, async () => {
      const { data } = await axios.get<AuthUserDTO>('/auth', {
        withCredentials: true,
        headers: {
          Cookie: context.req.headers.cookie,
        },
      });
      return data;
    });
  }
  return {
    props: {},
  };
};
