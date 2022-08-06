import { useRouter } from 'next/router';
import { useMutation } from 'react-query';
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

  return useMutation(withdrawalDeleteAPI, {
    onSuccess: () => router.replace('/withdrawal/success'),
  });
};

export default useWithdrawalMutation;
