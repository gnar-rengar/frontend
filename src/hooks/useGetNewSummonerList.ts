import { useInfiniteQuery } from 'react-query';
import { axios } from '../axios';
import { FilterTierType } from '../types/api.type';
import { queryKeys } from './queryKeys';

const newSummonerListGetAPI = async (page: number, tier: FilterTierType[]) => {
  let tierString = '';
  tier.forEach((str) => {
    tierString += `tier=${str}&`;
  });
  const { data } = await axios.get(`/duo/newList?page=${page}&${tierString}`);
  return {
    data,
    page,
  };
};
const useGetNewSummonerList = (tier: FilterTierType[]) => {
  const query = useInfiniteQuery(
    queryKeys.newSummonerList,
    ({ pageParam = 0 }) => newSummonerListGetAPI(pageParam, tier),
    {
      getNextPageParam: (lastPage) => lastPage.page + 1,
    }
  );
  return query;
};

export default useGetNewSummonerList;
