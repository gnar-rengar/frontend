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
  const { data } = useQuery(queryKeys.authUser, authUserGetAPI, {
    suspense: enableState,
    onError: (error: AxiosError) => {
      if (error.response.status === 401) {
        router.push('/login');
      }
      if (error.response.status === 403) {
        router.push('/on-boarding');
      }
    },
  });
  return data;
};

export default useGetAuth;
