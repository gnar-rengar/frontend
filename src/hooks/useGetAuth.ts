import { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { axios } from '../axios';
import { queryKeys } from '../constant/queryKeys';

import type { AuthUserDTO } from '../types/api.type';

export const authUserGetAPI = async () => {
  const { data } = await axios.get<AuthUserDTO>('/auth');
  return data;
};

const useGetAuth = () => {
  const router = useRouter();
  const { data } = useQuery(queryKeys.authUser, authUserGetAPI, {
    retry: 1,
    staleTime: 10000,
    onSuccess: (res) => {
      if (!res.isOnBoarded && router.pathname !== '/on-boarding') {
        router.push('/on-boarding');
      }
    },
    onError: (error: AxiosError) => {
      if (error.response.status === 401) {
        router.push('/login');
      }
    },
  });
  return data;
};

export default useGetAuth;
