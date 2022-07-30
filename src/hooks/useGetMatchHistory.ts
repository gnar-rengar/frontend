// import { useQuery } from 'react-query';
// import { axios } from '../axios';
// import { MatchHistoryDTO } from '../types/api.type';

// import { queryKeys } from './queryKeys';

// const fetchMatchHistory = async (userId: string) => {
//   const { data } = await axios.get<MatchHistoryDTO>(`/user/recentRecord/${userId}`);
//   return data;
// };

// const useGetMatchHistory = (userId: string) => {
//   const { data } = useQuery(queryKeys.matchHistory(userId), () => fetchMatchHistory(userId));
//   return data;
// };

// export default useGetMatchHistory;

import { useInfiniteQuery } from 'react-query';
import { axios } from '../axios';
import { queryKeys } from './queryKeys';

import type { MatchHistoryDTO } from '../types/api.type';

const fetchMatchHistory = async (userId: string, page: number) => {
  const { data } = await axios.get(`user/recentRecord/${userId}?page=${page}`);
  return {
    data,
    page,
  };
};

const useGetMatchHistory = (userId: string) => {
  const query = useInfiniteQuery<{ data: MatchHistoryDTO; page: number }>(
    queryKeys.matchHistory(userId),
    ({ pageParam = 1 }) => fetchMatchHistory(userId, pageParam),
    {
      getNextPageParam: (lastPage) => lastPage.page + 1,
    }
  );
  return query;
};

export default useGetMatchHistory;
