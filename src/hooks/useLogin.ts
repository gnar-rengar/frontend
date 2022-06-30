import axios from 'axios';
import { useRouter } from 'next/router';
import { LoginDTO } from '../types/dto/login.type';

const useLogin = async () => {
  const router = useRouter();
  const { code, state, sns } = router.query;

  if (code) {
    try {
      const { data } = await axios.get<LoginDTO>(
        `/auth/${sns}/callback?code=${code}&state=${state}`
      );
      router.replace('/');
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  }
};

export default useLogin;
