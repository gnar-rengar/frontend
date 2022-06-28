import { useQuery } from 'react-query';
import axios from 'axios';

import type { MyPageDTO } from '../types/dto/myPage.type';

const fetchMyPage = async () => {
  const { data } = await axios.get('https://api.duo-duo/users/mypage');
  return data;
};

const useGetMyPage = () => {
  const query = useQuery<MyPageDTO>('mypage', fetchMyPage);
  return query;
};

export default useGetMyPage;
