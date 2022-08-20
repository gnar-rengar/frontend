import Link from 'next/link';
import React from 'react';
import { Button, Typography } from '../common';
import { BlurContainer } from './style';

interface BlurProps {
  type: 'login' | 'onBoarding';
}

const blurType = {
  login: {
    typo: '로그인 후 찰떡궁합 \n듀오를 확인하세요!',
    link: '/login',
    buttonText: '로그인하기',
  },
  onBoarding: {
    typo: '소환사님의 정보를 알려주시면 \n듀오 추천을 해드릴게요!',
    link: '/on-boarding',
    buttonText: '내 정보 입력하기',
  },
};

function Blur({ type }: BlurProps) {
  const { typo, link, buttonText } = blurType[type];

  return (
    <BlurContainer>
      <Typography variant="h3" align="center" whiteSpace="pre-line">
        {typo}
      </Typography>
      <Button size="sm">
        <Link href={link}>
          <a>{buttonText}</a>
        </Link>
      </Button>
    </BlurContainer>
  );
}

export default Blur;
