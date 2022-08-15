import { GetServerSidePropsContext } from 'next';
import { dehydrate, QueryClient, QueryFunction } from 'react-query';
import { axios } from '../axios';
import { queryKeys } from './queryKeys';
import { authUserGetAPI } from './useGetAuth';

type PrefetchFunc = {
  queryKey: readonly string[];
  fetcher: QueryFunction;
};

export const preFetchIfLoggedIn =
  (prefetchFunc: PrefetchFunc[]) => async (context: GetServerSidePropsContext) => {
    const { token } = context.req.cookies;
    if (token) {
      const queryClient = new QueryClient();
      axios.defaults.headers.common.Cookie = context.req.headers.cookie;
      await Promise.all(
        prefetchFunc.map((func) => queryClient.prefetchQuery(func.queryKey, func.fetcher))
      );

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

export const preFetchAuth = preFetchIfLoggedIn([
  {
    queryKey: queryKeys.authUser,
    fetcher: authUserGetAPI,
  },
]);
