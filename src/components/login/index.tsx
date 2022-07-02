import Link from 'next/link';
import React from 'react';
import useLogin from '../../hooks/useLogin';
import { Button, Typography } from '../common';
import { ButtonContainer, LoginContainer } from './style';

function Login() {
  useLogin();
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_REST_ID}&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URI}kakao&response_type=code&state=STATE_STRING`;
  const naverURL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_NAVER_CLIENT_ID}&state=STATE_STRING&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URI}naver`;
  const discordURL = `https://discord.com/api/oauth2/authorize?client_id=${process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID}&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Flogin%3Fsns%3Ddiscord&response_type=code&scope=email`;

  return (
    <LoginContainer>
      <Typography variant="caption">DUODUO</Typography>
      <ButtonContainer>
        <Button size="lg">
          <Link href={kakaoURL}>
            <a>카카오로 로그인</a>
          </Link>
        </Button>
        <Button size="lg">
          <Link href={naverURL}>
            <a>네이버로 로그인</a>
          </Link>
        </Button>
        <Button size="lg">
          <Link href={discordURL}>
            <a>디스코드로 로그인</a>
          </Link>
        </Button>
        <Button size="lg">구글 아디로 로그인</Button>
      </ButtonContainer>
    </LoginContainer>
  );
}

export default Login;
