import { useInfiniteQuery } from 'react-query';
import { axios } from '../axios';

import type { MatchDTO } from '../types/api.type';
import { queryKeys } from './queryKeys';

const fetchMatchHistory = async (userId: string, page: number) => {
  const { data } = await axios.get<MatchDTO>(`user/recentRecord/${userId}?page=${page}`);
  return {
    data,
    page,
  };
};

const useGetMatchHistory = (userId: string) => {
  const query = useInfiniteQuery<{ page: number }>(
    queryKeys.matchHistory(userId),
    ({ pageParam = 0 }) => fetchMatchHistory(userId, pageParam),
    {
      getNextPageParam: (lastPage) => lastPage.page + 1,
    }
  );
  return query;
};

export default useGetMatchHistory;
