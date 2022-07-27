import { useQuery } from 'react-query';
import { axios } from '../axios';

import type { MyPageDTO } from '../types/api.type';
import { queryKeys } from './queryKeys';

const fetchMyPage = async () => {
  const { data } = await axios.get<MyPageDTO>('/user/mypage');
  return data;
};

const useGetMyPage = () => {
  const { data } = useQuery(queryKeys.myPage, fetchMyPage);
  return data;
};

export default useGetMyPage;
