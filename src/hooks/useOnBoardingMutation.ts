import { useRouter } from 'next/router';
import { useMutation, useQueryClient } from 'react-query';
import { axios } from '../axios';
import { queryKeys } from './queryKeys';

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
