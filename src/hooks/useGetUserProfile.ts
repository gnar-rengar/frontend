import { useQuery } from 'react-query';
import { UserProfileDTO } from '../types/api.type';
import { axios } from '../axios';

const fetchUserProfile = async (userId: string) => {
  const { data } = await axios.get(`user/userInfo/${userId}`);
  return data;
};

const useGetUserProfile = (userId: string) => {
  const { data } = useQuery<{ data: UserProfileDTO }>(
    ['userProfile', userId] as string[],
    () => fetchUserProfile(userId),
    {
      enabled: !!userId,
    }
  );

  return data;
};

export default useGetUserProfile;
