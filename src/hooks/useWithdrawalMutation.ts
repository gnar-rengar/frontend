import { useRouter } from 'next/router';
import { useMutation, useQueryClient } from 'react-query';
import { axios } from '../axios';
import { WithdrawalDTO } from '../types/api.type';

const withdrawalDeleteAPI = async (params: WithdrawalDTO) => {
  const config = {
    data: params,
  };
  const { data } = await axios.delete('/auth/deleteUser', config);
  return data;
};

const useWithdrawalMutation = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation(withdrawalDeleteAPI, {
    onSuccess: async () => {
      await queryClient.invalidateQueries();
      router.replace('/withdrawal/success');
    },
  });
};

export default useWithdrawalMutation;
