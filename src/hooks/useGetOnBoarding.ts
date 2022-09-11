import { useQuery } from 'react-query';
import { axios } from '../axios';
import { OnBoardingInput } from '../types/api.type';
import { queryKeys } from '../constant/queryKeys';

export const onBoardingGetAPI = async () => {
  const { data } = await axios.get<OnBoardingInput<string[]>>('/onboarding');
  return data;
};

const useGetOnBoarding = () => {
  const { data } = useQuery(queryKeys.onBoarding, onBoardingGetAPI);
  return data;
};

export default useGetOnBoarding;
