import { useQuery } from 'react-query';
import { axios } from '../axios';
import { OnBoardingInput } from '../types/api.type';
import { queryKeys } from './queryKeys';

const onBoardingGetAPI = async () => {
  const { data } = await axios.get<OnBoardingInput<string[]>>('/onboarding');
  return data;
};

const useGetOnBoarding = (
  queryEnabled: boolean
  // setQueryEnabled: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const { data } = useQuery(queryKeys.onBoarding, onBoardingGetAPI, {
    enabled: queryEnabled,
    // onSuccess: () => setQueryEnabled((prev) => !prev),
  });
  return data;
};

export default useGetOnBoarding;
