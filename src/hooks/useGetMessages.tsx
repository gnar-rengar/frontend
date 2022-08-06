import { useQuery } from 'react-query';
import { axios } from '../axios';
import { queryKeys } from './queryKeys';

import type { Messages } from '../types/api.type';

const fetchMessages = async (roomId: string) => {
  const { data } = await axios.get<{ chat: Messages[] }>(`chat/message/${roomId}`);
  return data;
};

const useGetMessages = (roomId: string) => {
  const { data } = useQuery(queryKeys.message(roomId), () => fetchMessages(roomId), {
    enabled: !!roomId,
  });
  return data;
};

export default useGetMessages;
