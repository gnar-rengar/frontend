import { useMutation } from 'react-query';
import { axios } from '../axios';

const patchFirstLogin = async () => {
  const { data } = await axios.patch('/user/firstLogin');
  return data;
};

const usePatchFirstLogin = () => useMutation(patchFirstLogin);

export default usePatchFirstLogin;
