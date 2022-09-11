import { useMutation } from 'react-query';
import { axios } from '../axios';

const patchSMSAgreement = async (agreeSMS: boolean) => {
  const { data } = await axios.patch('/user/agreeSMS', { agreeSMS });
  return data;
};

const usePatchSMSAgree = () => useMutation(patchSMSAgreement);

export default usePatchSMSAgree;
