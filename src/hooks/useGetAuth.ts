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

const useGetAuth = () => {
  const router = useRouter();
  const { data } = useQuery(queryKeys.authUser, authUserGetAPI, {
    onError: (error: AxiosError) => {
      if (error.response.status === 401) {
        router.push('/login');
      }
    },
  });

  return data;
};

export default useGetAuth;
