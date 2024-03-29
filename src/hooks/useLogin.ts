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

      localStorage.setItem('isOnboarded', JSON.stringify(data.isOnBoarded));
      if (data.isOnBoarded) {
        router.replace('/');
      } else if (localStorage.getItem('isDirect') == 'true') {
        router.replace('/on-boarding');
      } else {
        localStorage.removeItem('tendencyResult');
        router.replace('/on-boarding?type=notTest');
        router.replace('/on-boarding');
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  }
};

export default useLogin;
