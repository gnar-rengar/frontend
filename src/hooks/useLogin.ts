import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import { axios } from '../axios';
import { LoginDTO } from '../types/api.type';
import { separateStringInNumber } from '../utils';

const useLogin = async () => {
  const router = useRouter();
  const state = process.env.NEXT_PUBLIC_STATE_CSRF;
  const { code, sns } = router.query;

  if (code) {
    try {
      const { data } = await axios.get<LoginDTO>(
        `/auth/${sns}/callback?code=${code}&state=${state}`
      );
      const tokenExpireTime = dayjs(dayjs())
        .add(separateStringInNumber(data.tokenExpireTime), 'minute')
        .format('YYYY-MM-DD-HH-mm');
      const rtokenExpireTime = dayjs(dayjs())
        .add(separateStringInNumber(data.rtokenExpireTime), 'minute')
        .format('YYYY-MM-DD-HH-mm');
      localStorage.setItem('tokenExpireTime', tokenExpireTime);
      localStorage.setItem('rtokenExpireTime', rtokenExpireTime);
      router.replace('/');
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  }
};

export default useLogin;
