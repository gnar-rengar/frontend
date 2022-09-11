import { useMutation } from 'react-query';
import { axios } from '../axios';

const fetchSMSAgree = async (agreeSMS: boolean) => {
  const { data } = await axios.patch('/user/agreeSMS', { agreeSMS });
  return data;
};

const usePatchSMSAgree = () => useMutation(fetchSMSAgree);

export default usePatchSMSAgree;
