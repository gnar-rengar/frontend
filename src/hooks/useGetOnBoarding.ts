import { useQuery } from 'react-query';
import { axios } from '../axios';
import { OnBoardingInput } from '../types/api.type';
import { queryKeys } from './queryKeys';

const onBoardingGetAPI = async () => {
  const { data } = await axios.get<OnBoardingInput<string[]>>('/onboarding');
  return data;
};

const useGetOnBoarding = (queryEnabled: boolean) => {
  const { data } = useQuery(queryKeys.onBoarding, onBoardingGetAPI, {
    enabled: queryEnabled,
  });
  return data;
};

export default useGetOnBoarding;
