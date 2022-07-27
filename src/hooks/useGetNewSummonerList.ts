import { useQuery } from 'react-query';
import { axios } from '../axios';
import { queryKeys } from './queryKeys';

const newSummonerListGetAPI = async () => {
  const { data } = await axios.get('/duo/newList');
  return data;
};
const useGetNewSummonerList = () => {
  const { data } = useQuery(queryKeys.newSummonerList, newSummonerListGetAPI);
  return data;
};

export default useGetNewSummonerList;
