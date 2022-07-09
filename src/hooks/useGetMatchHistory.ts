import { useQuery } from 'react-query';
import { axios } from '../axios';

import type { MatchDTO } from '../types/api.type';

const fetchMatchHistory = async (userId: string) => {
  const { data } = await axios.get(`user/recentRecord/${userId}`);
  return data;
};

const useGetMatchHistory = (userId: string) => {
  const { data } = useQuery<MatchDTO>(['matchHistory', userId], () => fetchMatchHistory(userId));
  return data;
};

export default useGetMatchHistory;
