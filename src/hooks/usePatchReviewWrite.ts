import { useRouter } from 'next/router';
import { useMutation } from 'react-query';
import { axios } from '../axios';

import type { ReviewWriteDTO } from '../types/api.type';

interface Variables {
  userId: string;
  payload: ReviewWriteDTO;
}

const patchReviewWrite = async (variables: Variables) => {
  const { userId, payload } = variables;

  const { data } = await axios.patch(`/user/writeReview/${userId}`, payload);
  return data;
};

const usePatchReviewWrite = () => {
  const router = useRouter();

  return useMutation(patchReviewWrite, {
    onSuccess: () => {
      router.replace('/review-write/success');
    },
  });
};

export default usePatchReviewWrite;
