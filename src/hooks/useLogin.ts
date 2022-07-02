import axios from 'axios';
import { useRouter } from 'next/router';
import { LoginDTO } from '../types/dto/login.type';

const useLogin = async () => {
  const router = useRouter();
  const state = 'STATE_STRING';
  const { code, sns } = router.query;

  console.log(code, state);

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
