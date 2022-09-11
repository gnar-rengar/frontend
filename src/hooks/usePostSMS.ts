import { useMutation } from 'react-query';
import { axios } from '../axios';

const postSMS = async (opponentId: string) => {
  const { data } = await axios.post('/user/sendSMS', { opponentId });
  return data;
};

const usePostSMS = () => useMutation(postSMS);

export default usePostSMS;
