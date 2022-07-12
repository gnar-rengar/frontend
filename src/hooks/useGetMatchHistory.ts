import { useInfiniteQuery } from 'react-query';
import { axios } from '../axios';

import type { MatchDTO } from '../types/api.type';

const fetchMatchHistory = async (userId: string, page: number) => {
  const { data } = await axios.get(`user/recentRecord/${userId}?page=${page}`);
  return {
    data,
    page,
  };
};

const useGetMatchHistory = (userId: string) => {
  const query = useInfiniteQuery<{ data: MatchDTO; page: number }>(
    ['matchHistory', userId],
    ({ pageParam = 0 }) => fetchMatchHistory(userId, pageParam),
    {
      getNextPageParam: (lastPage) => lastPage.page + 1,
    }
  );
  return query;
};

export default useGetMatchHistory;
