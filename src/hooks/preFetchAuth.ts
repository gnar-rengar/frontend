import { GetServerSidePropsContext } from 'next';
import { dehydrate, QueryClient } from 'react-query';
import { axios } from '../axios';
import { queryKeys } from './queryKeys';
import { authUserGetAPI } from './useGetAuth';

export const preFetchAuth = async (context: GetServerSidePropsContext) => {
  const { token } = context.req.cookies;

  if (token) {
    const queryClient = new QueryClient();
    axios.defaults.headers.common.Cookie = context.req.headers.cookie;
    await queryClient.prefetchQuery(queryKeys.authUser, authUserGetAPI);

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
