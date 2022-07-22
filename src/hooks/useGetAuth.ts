import { useQuery } from 'react-query';
import { axios } from '../axios';
import { AuthUserDTO } from '../types/api.type';
import { queryKeys } from './queryKeys';

type AuthUserKeyType = 'success' | 'userId' | 'lolNickname' | 'profileURL';

const authUserGetAPI = async () => {
  const { data } = await axios.get<AuthUserDTO>('/auth');
  return data;
};

const useGetAuth = () => {
  useQuery(queryKeys.authUser, authUserGetAPI, {
    onSuccess: (data) => {
      Object.keys(data).forEach((key: AuthUserKeyType) => {
        localStorage.setItem(key, data[key] as string);
      });
    },
    onError: (error) => console.log(error),
  });
};

export default useGetAuth;
