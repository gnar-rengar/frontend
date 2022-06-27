import axios from 'axios';
import { useRouter } from 'next/router';
import { useMutation } from 'react-query';
import { OnBoardingInput } from '../types/onBoarding.type';

const onBoardingPatchAPI = async (params: OnBoardingInput) => {
  const { data } = await axios.patch('/auth/onboarding', params);
  return data;
};

const useOnBoardingMutation = () => {
  const router = useRouter();

  return useMutation(onBoardingPatchAPI, {
    onSuccess: () => router.push('/'),
  });
};

export default useOnBoardingMutation;
