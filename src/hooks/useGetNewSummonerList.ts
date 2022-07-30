import { useInfiniteQuery } from 'react-query';
import { axios } from '../axios';
import { FilterTierType, SummonerNewRecommendDTO } from '../types/api.type';
import { queryKeys } from './queryKeys';

interface INewSummonerPages {
  data: SummonerNewRecommendDTO;
  page: number;
}

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
const useGetNewSummonerList = (tier?: FilterTierType[]) => {
  const query = useInfiniteQuery<{
    data: SummonerNewRecommendDTO;
    page: number;
    // pages: INewSummonerPages[];
    // pageParams?: number[];
  }>(queryKeys.newSummonerList, ({ pageParam = 1 }) => newSummonerListGetAPI(pageParam, tier), {
    // onSuccess: (data) => console.log('fsf', data),
    select: (data) => data.pages[0].data.newList as any,
    getNextPageParam: (lastPage) => lastPage.page + 1,
  });
  return query;
};
// `/duo/newList?page=${page}&${tierString}`
export default useGetNewSummonerList;
