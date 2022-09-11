import { useQuery } from 'react-query';
import { axios } from '../axios';
import { queryKeys } from '../constant/queryKeys';

import type { Opponent } from '../types/api.type';

const fetchOpponent = async (roomId: string) => {
  const { data } = await axios.get<{ opponent: Opponent }>(`chat/opponent/${roomId}`);
  return data;
};

const useGetOpponent = (roomId: string) => {
  const { data } = useQuery(queryKeys.opponent, () => fetchOpponent(roomId), { enabled: !!roomId });
  return data;
};

export default useGetOpponent;
