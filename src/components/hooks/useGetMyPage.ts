import { useQuery } from 'react-query';
import axios from 'axios';

interface MyPageDTO {
  success: boolean;
  profileUrl: string;
  nickcName: string;
  profileOpen: true;
  goodFeedback: {
    description: string;
    count: number;
  }[];
  badFeedback: {
    description: string;
    count: number;
  }[];
}

const fetchMyPage = async () => {
  const { data } = await axios.get('/users/mypage');
  return data;
};

const useGetMyPage = () => {
  const { data } = useQuery<MyPageDTO>('mypage', fetchMyPage);
  return data;
};

export default useGetMyPage;
