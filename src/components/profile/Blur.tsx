import { css, Global } from '@emotion/react';
import Link from 'next/link';
import React from 'react';
import { Button, Typography } from '../common';
import { BlurContainer, GuideText } from './style';

interface BlurProps {
  type: 'login' | 'onBoarding';
}

const blurType = {
  login: {
    typo1: '로그인 후 찰떡궁합',
    typo2: '듀오를 확인하세요!',
    link: '/login',
    buttonText: '로그인하기',
  },
  onBoarding: {
    typo1: '앗, 정보를 입력해야',
    typo2: '다른 소환사 정보를 볼 수 있어요',
    link: '/on-boarding',
    buttonText: '10초 정보 작성하기',
  },
};

function Blur({ type }: BlurProps) {
  const { typo1, typo2, link, buttonText } = blurType[type];

  return (
    <BlurContainer>
      <Global
        styles={css`
          body {
            overflow: hidden;
          }
        `}
      />
      <GuideText>
        <div>
          <Typography variant="h3" color="onBackground" align="center">
            {typo1}
          </Typography>
          <Typography variant="h3" color="onBackground" align="center">
            {typo2}
          </Typography>
        </div>
        <Button size="lg" width="fit-content">
          <Link href={link}>
            <a>{buttonText}</a>
          </Link>
        </Button>
      </GuideText>
    </BlurContainer>
  );
}

export default Blur;
