import { useRouter } from 'next/router';
import { useMutation, useQueryClient } from 'react-query';
import { axios } from '../axios';

const logoutDeleteAPI = async () => {
  const { data } = await axios.delete('/auth/logout');
  return data;
};

const useLogoutMutation = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation(logoutDeleteAPI, {
    onSuccess: async () => {
      await queryClient.invalidateQueries();
      router.replace('/');
    },
  });
};

export default useLogoutMutation;
