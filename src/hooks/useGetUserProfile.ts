import { useQuery } from 'react-query';
import { axios } from '../axios';

const fetchUserProfile = async ({ queryKey }: { queryKey: string[] }) => {
  const userId = queryKey[1];

  const { data } = await axios.get(`user/userInfo/${userId}`);
  return data;
};

const useGetUserProfile = (userId: string) => {
  const { data } = useQuery(['userProfile', userId] as string[], fetchUserProfile, {
    enabled: !!userId,
  });

  return data;
};

export default useGetUserProfile;
