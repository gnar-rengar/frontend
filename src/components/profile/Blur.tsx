import { css, Global } from '@emotion/react';
import Link from 'next/link';
import React from 'react';
import { Button, Typography } from '../common';
import { BlurContainer, LoginMessage } from './style';

function Blur() {
  return (
    <BlurContainer>
      <Global
        styles={css`
          body {
            overflow: hidden;
          }
        `}
      />
      <LoginMessage>
        <div>
          <Typography variant="h3" color="onBackground">
            로그인 후 찰떡궁합
          </Typography>
          <Typography variant="h3" color="onBackground">
            듀오를 확인하세요!
          </Typography>
        </div>
        <Button size="sm">
          <Link href="/login">
            <a>로그인하기</a>
          </Link>
        </Button>
      </LoginMessage>
    </BlurContainer>
  );
}

export default Blur;
