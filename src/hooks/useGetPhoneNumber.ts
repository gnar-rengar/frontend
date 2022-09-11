import { useQuery } from 'react-query';
import { axios } from '../axios';

import { queryKeys } from '../constant/queryKeys';
import type { PhoneNumberDTO } from '../types/api.type';

const fetchPhoneNumber = async () => {
  const { data } = await axios.get<PhoneNumberDTO>('user/phoneNumber');
  return data;
};

const useGetPhoneNumber = () => {
  const { data } = useQuery(queryKeys.phoneNumber, fetchPhoneNumber);
  return data;
};

export default useGetPhoneNumber;
