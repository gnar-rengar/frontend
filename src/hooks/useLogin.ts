import { useRouter } from 'next/router';
import { axios } from '../axios';
import { LoginDTO } from '../types/api.type';

const useLogin = async () => {
  const router = useRouter();
  const state = process.env.NEXT_PUBLIC_STATE_CSRF;
  const { code, sns } = router.query;

  if (code) {
    try {
      await axios.get<LoginDTO>(`/auth/${sns}/callback?code=${code}&state=${state}`);
      router.replace('/on-boarding');
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  }
};

export default useLogin;
