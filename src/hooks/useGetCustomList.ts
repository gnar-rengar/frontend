import { useQuery } from 'react-query';
import { axios } from '../axios';
import { queryKeys } from './queryKeys';

// DTO,타입 설정은 API 명세서 수정 이후 작성 예정.
const customListGetAPI = async () => {
  const { data } = await axios.get('/duo/customList');
  return data;
};

const useGetCustomList = () => {
  const { data } = useQuery(queryKeys.customList, customListGetAPI);

  return data;
};

export default useGetCustomList;
