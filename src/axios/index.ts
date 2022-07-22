import axios from 'axios';
import { getCookie } from '../utils/cookie';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  withCredentials: true,
  headers: {
    Authorization: `Bearer ${getCookie('accessToken')}`,
  },
});

// api.interceptors.request.use(refresh, refreshError); backend token 정책 테스트 후 적용하기

export { api as axios };
