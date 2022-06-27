import { useRouter } from 'next/router';

const useKakaoLogin = () => {
  const router = useRouter();
  const { code } = router.query;

  // if (code) {
  //   try {
  //     const { data } = axios(`/auth/kakao/callback?code=${code}`);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
};

export default useKakaoLogin;
