import { useRouter } from 'next/router';
import { useMutation } from 'react-query';
import { axios } from '../axios';

const logoutDeleteAPI = async () => {
  const { data } = await axios.delete('/auth/logout');
  return data;
};

const useLogoutMutation = () => {
  const router = useRouter();

  return useMutation(logoutDeleteAPI, {
    onSuccess: () => router.replace('/login'),
  });
};

export default useLogoutMutation;
