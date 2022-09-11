import { useQuery } from 'react-query';
import { axios } from '../axios';
import { SummonerFitRecommendDTO } from '../types/api.type';
import { queryKeys } from '../constant/queryKeys';

const fitSummonerListGetAPI = async () => {
  const { data } = await axios.get<SummonerFitRecommendDTO>('/duo/customList');
  return data;
};

const useGetFitSummonerList = (enableState = true) => {
  const { data } = useQuery(queryKeys.fitSummonerList, fitSummonerListGetAPI, {
    enabled: enableState,
    suspense: false,
  });
  return { data };
};

export default useGetFitSummonerList;
