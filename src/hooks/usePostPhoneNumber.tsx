import { useMutation } from 'react-query';
import { axios } from '../axios';

const postPhoneNumber = async (phoneNumber: string) => {
  const { data } = await axios.post('/auth/sendCode', { phoneNumber });
  return data;
};

const usePostPhoneNumber = () => useMutation(postPhoneNumber);

export default usePostPhoneNumber;
