import Link from 'next/link';
import React from 'react';
import { Button, Typography } from '../common';
import { BlurContainer } from './style';

function Blur() {
  return (
    <BlurContainer>
      <Typography variant="h3" align="center">
        로그인 후 찰떡궁합
        <br />
        듀오를 확인하세요!
      </Typography>
      <Button size="sm">
        <Link href="/login">
          <a>로그인</a>
        </Link>
      </Button>
    </BlurContainer>
  );
}

export default Blur;
