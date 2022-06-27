import Link from 'next/link';
import React from 'react';
import useKakaoLogin from '../../hooks/useKakaoLogin';
import { Button, Typography } from '../common';
import { ButtonContainer, LoginContainer } from './style';

function Login() {
  useKakaoLogin();
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_REST_ID}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}&response_type=code`;

  return (
    <LoginContainer>
      <Typography variant="caption">DUODUO</Typography>
      <ButtonContainer>
        <Button size="lg">
          <Link href={kakaoURL}>
            <a>카카오로 로그인</a>
          </Link>
        </Button>
        <Button size="lg">구글 아디로 로그인</Button>
        <Button size="lg">네이버로 로그인</Button>
      </ButtonContainer>
    </LoginContainer>
  );
}

export default Login;
