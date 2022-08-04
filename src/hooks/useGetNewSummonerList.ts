import { useInfiniteQuery } from 'react-query';
import { axios } from '../axios';
import { FilterTierType, SummonerNewRecommendDTO } from '../types/api.type';
import { queryKeys } from './queryKeys';

const newSummonerListGetAPI = async (page: number, tier: FilterTierType[]) => {
  let tierString = '';
  tier.forEach((str) => {
    tierString += `tier[]=${str}&`;
  });
  const { data } = await axios.get<SummonerNewRecommendDTO>(
    `/duo/newList?page=${page}&${tierString}`
  );
  return {
    data,
    page,
  };
};
const useGetNewSummonerList = (tier: FilterTierType[]) => {
  const query = useInfiniteQuery(
    queryKeys.newSummonerList,
    ({ pageParam = 1 }) => newSummonerListGetAPI(pageParam, tier),
    {
      getNextPageParam: (lastPage) => {
        if (lastPage.data.newList.length > 0) {
          return lastPage.page + 1;
        }
        return false;
      },
    }
  );
  return query;
};

export default useGetNewSummonerList;
