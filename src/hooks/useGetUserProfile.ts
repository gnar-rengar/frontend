import { useQuery } from 'react-query';
import { axios } from '../axios';

import type { UserProfileDTO } from '../types/api.type';
import { queryKeys } from './queryKeys';

const fetchUserProfile = async (userId: string) => {
  const { data } = await axios.get(`user/userInfo/${userId}`);
  return data;
};

const useGetUserProfile = (userId: string) => {
  const { data } = useQuery<{ data: UserProfileDTO }>(queryKeys.userProfile(userId), () =>
    fetchUserProfile(userId)
  );

  return data;
};

export default useGetUserProfile;
