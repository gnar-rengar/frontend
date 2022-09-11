import { useQuery } from 'react-query';
import { axios } from '../axios';

import type { PhoneNumberDTO } from '../types/api.type';
import { queryKeys } from './queryKeys';

const fetchPhoneNumber = async () => {
  const { data } = await axios.get<PhoneNumberDTO>('user/phoneNumber');
  return data;
};

const useGetPhoneNumber = () => {
  const { data } = useQuery(queryKeys.phoneNumber, fetchPhoneNumber);
  return data;
};

export default useGetPhoneNumber;
