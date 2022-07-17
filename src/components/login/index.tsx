import Link from 'next/link';
import React from 'react';
import useLogin from '../../hooks/useLogin';
import { Button, Typography } from '../common';
import { ButtonContainer, LoginContainer } from './style';

function Login() {
  useLogin();

  return (
    <LoginContainer>
      <Typography variant="captionRegular">DUODUO</Typography>
      <ButtonContainer>
        <Button size="lg">
          <Link href={process.env.NEXT_PUBLIC_KAKAO_URL}>
            <a>카카오로 로그인</a>
          </Link>
        </Button>
        <Button size="lg">
          <Link href={process.env.NEXT_PUBLIC_NAVER_URL}>
            <a>네이버로 로그인</a>
          </Link>
        </Button>
        <Button size="lg">
          <Link href={process.env.NEXT_PUBLIC_DISCORD_URL}>
            <a>디스코드로 로그인</a>
          </Link>
        </Button>
        <Button size="lg">구글 아디로 로그인</Button>
      </ButtonContainer>
    </LoginContainer>
  );
}

export default Login;
