import { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { axios } from '../axios';
import { AuthUserDTO } from '../types/api.type';
import { queryKeys } from './queryKeys';

export const authUserGetAPI = async () => {
  const { data } = await axios.get<AuthUserDTO>('/auth');
  return data;
};

const useGetAuth = (enableState = true) => {
  const router = useRouter();
  const { data, isSuccess } = useQuery(queryKeys.authUser, authUserGetAPI, {
    retry: 1,
    suspense: enableState,
    onSuccess: (res) => {
      if (!res.isOnBoarded && router.pathname !== '/on-boarding') {
        router.push('/tendency-test');
      }
    },
    onError: (error: AxiosError) => {
      if (error.response.status === 401) {
        router.push('/login');
      }
    },
  });
  return { data, isSuccess };
};

export default useGetAuth;
