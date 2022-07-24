import { useQuery } from 'react-query';
import { axios } from '../axios';
import { queryKeys } from './queryKeys';

const customListGetAPI = async () => {
  const { data } = await axios.get('/duo/customList');
  return data;
};

const useGetCustomList = () => {
  const { data } = useQuery(queryKeys.customList, customListGetAPI);

  return data;
};

export default useGetCustomList;
