import { useQuery } from 'react-query';
import { axios } from '../axios';

import type { MyPageDTO } from '../types/api.type';
import { queryKeys } from '../constant/queryKeys';

export const fetchMyPage = async () => {
  const { data } = await axios.get<MyPageDTO>('/user/mypage');
  return data;
};

const useGetMyPage = () => {
  const query = useQuery(queryKeys.myPage, fetchMyPage);
  return query;
};

export default useGetMyPage;
