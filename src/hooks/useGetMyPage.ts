import { useQuery } from 'react-query';
import { axios } from '../axios';

import type { MyPageDTO } from '../types/api.type';

interface TemporaryDTO extends MyPageDTO {
  tiers: { season: string; tier: string; rank: number; leaguePoints: number }[];
  playStyles: string[];
  positions: string[];
  mostChamps: { name: string; url: string }[];
}

const fetchMyPage = async () => {
  const { data } = await axios.get('/user/mypage');
  return data;
};

const useGetMyPage = () => {
  const { data } = useQuery<{ data: TemporaryDTO }>('mypage', fetchMyPage);
  return data;
};

export default useGetMyPage;
