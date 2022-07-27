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
      const nowDate = new Date();
      const tokenExpireTime = nowDate.setMinutes(
        nowDate.getMinutes() + separateStringInNumber(data.tokenExpireTime)
      );
      const rtokenExpireTime = nowDate.setMinutes(
        nowDate.getMinutes() + separateStringInNumber(data.rtokenExpireTime)
      );

      localStorage.setItem('tokenExpireTime', tokenExpireTime.toString());
      localStorage.setItem('rtokenExpireTime', rtokenExpireTime.toString());
      router.replace('/');
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  }
};

export default useLogin;
