import { useRouter } from 'next/router';
import { useMutation } from 'react-query';
import { axios } from '../axios';

import type { NicknameCheckDTO, OnBoardingInput } from '../types/api.type';

const onBoardingPatchAPI = async (params: OnBoardingInput) => {
  const { data } = await axios.patch<NicknameCheckDTO>('/onboarding', params);
  return data;
};

const useOnBoardingMutation = () => {
  const router = useRouter();

  return useMutation(onBoardingPatchAPI, {
    onSuccess: () => router.push('/'),
  });
};

export default useOnBoardingMutation;
