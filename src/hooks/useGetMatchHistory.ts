import { useQuery } from 'react-query';
import { axios } from '../axios';
import { MatchHistoryDTO } from '../types/api.type';

import { queryKeys } from './queryKeys';

const fetchMatchHistory = async (userId: string) => {
  const { data } = await axios.get<MatchHistoryDTO>(`/user/recentRecord/${userId}`);
  return data;
};

const useGetMatchHistory = (userId: string) => {
  const { data } = useQuery(queryKeys.matchHistory(userId), () => fetchMatchHistory(userId));
  return data;
};

export default useGetMatchHistory;
