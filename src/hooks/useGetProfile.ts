import { useQuery } from 'react-query';
import { axios } from '../axios';

import type { ProfileDTO } from '../types/api.type';
import { queryKeys } from '../constant/queryKeys';

const fetchUserProfile = async (userId: string) => {
  const { data } = await axios.get<ProfileDTO>(`user/userInfo/${userId}`);
  return data;
};

const useGetProfile = (userId: string) => {
  const { data } = useQuery(queryKeys.userProfile(userId), () => fetchUserProfile(userId));
  return data;
};

export default useGetProfile;
