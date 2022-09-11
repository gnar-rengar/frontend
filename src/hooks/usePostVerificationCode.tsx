import { useMutation } from 'react-query';
import { axios } from '../axios';

const fetchVerificationCode = async ({
  phoneNumber,
  code,
}: {
  phoneNumber: string;
  code: string;
}) => {
  const { data } = await axios.post('/auth/verifyCode', { phoneNumber, code });
  return data;
};

const usePostVerificationCode = ({ onSuccess }: { onSuccess?: () => void }) =>
  useMutation(fetchVerificationCode, { onSuccess });

export default usePostVerificationCode;
