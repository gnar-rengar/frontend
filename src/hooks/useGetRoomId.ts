import { useQuery } from 'react-query';
import { queryKeys } from './queryKeys';
import { axios } from '../axios';

const fetchRoomId = async (userId: string) => {
  const { data } = await axios.get(`/chat/roomId/${userId}`);
  return data;
};

const useGetRoomId = (userId: string) => {
  const query = useQuery(queryKeys.roomId(userId), () => fetchRoomId(userId), {
    enabled: false,
  });
  return query;
};

export default useGetRoomId;
