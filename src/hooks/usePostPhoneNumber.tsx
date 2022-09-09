import { useMutation } from 'react-query';
import { axios } from '../axios';

const fetchPhoneNumber = async (phoneNumber: string) => {
  const { data } = await axios.post('/auth/sendCode', { phoneNumber });
  return data;
};

const usePostPhoneNumber = () => useMutation(fetchPhoneNumber);

export default usePostPhoneNumber;
