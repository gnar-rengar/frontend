import { useQuery } from 'react-query';
import { axios } from '../axios';
import { queryKeys } from '../constant/queryKeys';

import type { Messages } from '../types/api.type';

export const fetchMessages = async (roomId: string) => {
  const { data } = await axios.get<{ chat: Messages[] }>(`chat/message/${roomId}`);
  return data;
};

const useGetMessages = (roomId: string) => {
  const { data } = useQuery(queryKeys.message(roomId), () => fetchMessages(roomId));
  return data;
};

export default useGetMessages;
