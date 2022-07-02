import axios from 'axios';
import { useRouter } from 'next/router';
import { useMutation } from 'react-query';

import type { ReviewWriteDTO } from '../types/api.type';

interface Variables {
  userId: string;
  payload: ReviewWriteDTO;
}

const patchReviewWrite = async (variables: Variables) => {
  const { userId, payload } = variables;

  const { data } = await axios.patch(`https://api.duo-duo/user/writeReview/${userId}`, payload);
  return data;
};

const usePatchReviewWrite = () => {
  const router = useRouter();

  return useMutation(patchReviewWrite, {
    onSuccess: () => {
      // ? 제출 후에는 어떻게?
      router.replace('/');
    },
    onError: () => {
      // ? 실패하면 어떻게?
      router.replace('/not-found');
    },
  });
};

export default usePatchReviewWrite;
