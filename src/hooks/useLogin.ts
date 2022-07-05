import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import { axios } from '../axios';
import { LoginDTO } from '../types/api.type';

const useLogin = async () => {
  const router = useRouter();
  const state = process.env.NEXT_PUBLIC_STATE_CSRF;
  const { code, sns } = router.query;

  if (code) {
    try {
      const { data } = await axios.get<LoginDTO>(
        `/auth/${sns}/callback?code=${code}&state=${state}`
      );
      const expireAt = dayjs(dayjs()).locale('ko').add(30, 'minute');
      localStorage.setItem('accessToken', data.token);
      localStorage.setItem('expireAt', expireAt.format('MM-DD-HH-m'));
      router.replace('/');
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  }
};

export default useLogin;
