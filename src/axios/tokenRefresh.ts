import { AxiosRequestConfig } from 'axios';
import dayjs from 'dayjs';
import Cookie from 'js-cookie';
import { axios } from '.';

const refresh = async (config: AxiosRequestConfig): Promise<AxiosRequestConfig> => {
  dayjs.locale('ko');
  const refreshToken = Cookie.get('refreshToken');
  const expireAt = localStorage.getItem('expiresAt');
  let token = localStorage.getItem('accessToken');

  if (dayjs(expireAt).diff(dayjs()) < 0 && refreshToken) {
    const body = {
      refreshToken,
    };

    const { data } = await axios.post('/auth/token', body);

    token = data.data.accessToken;
    localStorage.setItem('accessToken', data.data.accessToken);
    localStorage.setItem('expiresAt', data.data.accessToken);
  }

  // eslint-disable-next-line no-param-reassign
  config.headers.Authorization = `Bearer ${token}`; // 백엔드 테스트 후 eslint 옵션 제거

  return config;
};

const refreshError = () => {
  Cookie.remove('refreshToken');
};

export { refresh, refreshError };
