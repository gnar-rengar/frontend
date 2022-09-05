import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import useLogin from '../../hooks/useLogin';
import { Typography } from '../common';
import { UnderLineLink } from '../common/footer/Footer.style';
import {
  ButtonContainer,
  IconAndTextContainer,
  LoginButton,
  LoginContainer,
  LoginSection,
} from './style';

function Login() {
  useLogin();
  const router = useRouter();
  const { required } = router.query;

  return (
    <LoginContainer>
      {required ? (
        <Typography variant="h3" align="center">
          로그인하고 나의 찰떡 듀오
          <br />
          소환사를 만나보세요
        </Typography>
      ) : (
        <Image src="/icons/main-logo.svg" width="160px" height="40px" alt="logo" />
      )}
      <LoginSection>
        <Typography variant="captionRegular" color="onBackgroundSub">
          3초 간편 로그인/회원가입
        </Typography>
        <ButtonContainer>
          {process.env.NODE_ENV === 'development' && (
            <Link href={process.env.NEXT_PUBLIC_DISCORD_URL ?? ''}>
              <a>
                <LoginButton color="discord">
                  <IconAndTextContainer color="discord">
                    <Image
                      src="/icons/discord.svg"
                      width="24px"
                      height="24px"
                      alt="discord login"
                    />
                    <Typography variant="body1" color="onBackground">
                      디스코드 로그인
                    </Typography>
                  </IconAndTextContainer>
                </LoginButton>
              </a>
            </Link>
          )}
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
          <Link href="/policy/service">
            <UnderLineLink>서비스 이용 약관</UnderLineLink>
          </Link>
          과<br />
          <Link href="/policy/privacy">
            <UnderLineLink>개인정보처리방침</UnderLineLink>
          </Link>
          에 동의하게 됩니다.
        </Typography>
      </LoginSection>
    </LoginContainer>
  );
}

export default Login;
