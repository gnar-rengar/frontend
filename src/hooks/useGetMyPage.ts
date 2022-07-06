import { useQuery } from 'react-query';
import { axios } from '../axios';

import type { MyPageDTO } from '../types/api.type';

const fetchMyPage = async () => {
  const { data } = await axios.get('/user/mypage');
  return data;
};

const useGetMyPage = () => {
  const { data } = useQuery<{ data: MyPageDTO }>('mypage', fetchMyPage);
  return data;
};

export default useGetMyPage;
