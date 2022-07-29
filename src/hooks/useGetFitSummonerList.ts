import { useQuery } from 'react-query';
import { axios } from '../axios';
import { SummonerRecommendDTO } from '../types/api.type';
import { queryKeys } from './queryKeys';

// DTO,타입 설정은 API 명세서 수정 이후 작성 예정.
const fitSummonerListGetAPI = async () => {
  const { data } = await axios.get<SummonerRecommendDTO>('/duo/customList');
  return data;
};

const useGetFitSummonerList = () => {
  const { data } = useQuery(queryKeys.fitSummonerList, fitSummonerListGetAPI);

  return data;
};

export default useGetFitSummonerList;
