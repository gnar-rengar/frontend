/* eslint-disable react/jsx-one-expression-per-line */
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import useLogin from '../../hooks/useLogin';
import { Typography } from '../common';
import {
  ButtonContainer,
  IconAndTextContainer,
  LoginButton,
  LoginContainer,
  LoginSection,
} from './style';

function Login() {
  useLogin();

  return (
    <LoginContainer>
      <Image src="/icons/main-logo.svg" width="160px" height="40px" alt="logo" />
      <LoginSection>
        <Typography variant="captionRegular" color="onBackgroundSub">
          간편 로그인/회원가입
        </Typography>
        <ButtonContainer>
          <Link href={process.env.NEXT_PUBLIC_DISCORD_URL ?? ''}>
            <a>
              <LoginButton color="discord">
                <IconAndTextContainer color="discord">
                  <Image src="/icons/discord.svg" width="24px" height="24px" alt="discord login" />
                  <Typography variant="body1" color="onBackground">
                    디스코드 로그인
                  </Typography>
                </IconAndTextContainer>
              </LoginButton>
            </a>
          </Link>
          <Link href={process.env.NEXT_PUBLIC_KAKAO_URL ?? ''}>
            <a>
              <LoginButton color="kakao">
                <IconAndTextContainer color="kakao">
                  <Image src="/icons/kakao.svg" width="24px" height="24px" alt="kakao login" />
                  <Typography variant="body1" color="background">
                    카카오 로그인
                  </Typography>
                </IconAndTextContainer>
              </LoginButton>
            </a>
          </Link>
          <Link href={process.env.NEXT_PUBLIC_NAVER_URL ?? ''}>
            <a>
              <LoginButton color="naver">
                <IconAndTextContainer color="naver">
                  <Image src="/icons/naver.svg" width="24px" height="24px" alt="naver login" />
                  <Typography variant="body1" color="onBackground">
                    네이버 로그인
                  </Typography>
                </IconAndTextContainer>
              </LoginButton>
            </a>
          </Link>
        </ButtonContainer>
        <Typography variant="captionRegular" align="center" underline color="onBackgroundSub">
          회원가입 시 듀오해듀오의{' '}
          <Link href="/on-boarding">
            <a>서비스 이용 약관</a>
          </Link>
          과<br />
          <Link href="/on-boarding">
            <a>개인정보 보호정책</a>
          </Link>
          에 동의하게 됩니다.
        </Typography>
      </LoginSection>
    </LoginContainer>
  );
}

export default Login;
