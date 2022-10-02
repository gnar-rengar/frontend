import { useMutation, useQueryClient } from 'react-query';
import { axios } from '../axios';

const recaptchaTokenPostAPI = async (token: string) => {
  const { data } = await axios.post('/test', token);
  return data;
};

const useRecaptchaMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(recaptchaTokenPostAPI);
};

export default useRecaptchaMutation;
