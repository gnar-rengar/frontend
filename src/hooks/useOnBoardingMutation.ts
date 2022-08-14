import { useRouter } from 'next/router';
import { useMutation, useQueryClient } from 'react-query';
import { queryKeys } from './queryKeys';
import { axios } from '../axios';

import type { NicknameCheckDTO, OnBoardingInput } from '../types/api.type';

const onBoardingPatchAPI = async (params: OnBoardingInput<string[]>) => {
  const { data } = await axios.patch<NicknameCheckDTO>('/onboarding', params);
  return data;
};

const useOnBoardingMutation = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  return useMutation(onBoardingPatchAPI, {
    onSuccess: async () => {
      await queryClient.invalidateQueries(queryKeys.authUser);
      router.push('/');
    },
  });
};

export default useOnBoardingMutation;
