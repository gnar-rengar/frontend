import { useInfiniteQuery, useQuery } from 'react-query';
import { axios } from '../axios';
import { MatchDTO } from '../types/api.type';

import { queryKeys } from './queryKeys';

const fetchMatchHistory = async (userId: string) => {
  const { data } = await axios.get(`/user/recentRecord/${userId}`);
  return data;
  // return {
  //   data,
  //   page,
  // };
};

// const useGetMatchHistory = (userId: string) => {
//   const query = useInfiniteQuery<{ data: MatchDTO; page: number }>(
//     queryKeys.matchHistory(userId),
//     ({ pageParam = 0 }) => fetchMatchHistory(userId, pageParam),
//     {
//       getNextPageParam: (lastPage) => lastPage.page + 1,
//     }
//   );
//   return query;
// };

const useGetMatchHistory = (userId: string) => {
  const { data } = useQuery(queryKeys.matchHistory(userId), () => fetchMatchHistory(userId));
  return data;
};

export default useGetMatchHistory;
