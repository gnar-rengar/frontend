import { useQuery } from 'react-query';
import { axios } from '../axios';

import type { MyPageDTO } from '../types/api.type';
import { queryKeys } from './queryKeys';

export const fetchMyPage = async () => {
  const { data } = await axios.get<MyPageDTO>('/user/mypage');
  return data;
};

// TODO suspense로 되지 않는 이유 찾고 수정.
const useGetMyPage = () => {
  const query = useQuery(queryKeys.myPage, fetchMyPage, { suspense: false });
  return query;
};

export default useGetMyPage;
