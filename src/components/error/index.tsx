import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button, Typography } from '../common';
import { ErrorButton, ErrorContainer } from './style';

function Error({ type }: { type: 404 | 500 }) {
  return (
    <ErrorContainer>
      <Image src="/icons/warning.svg" width={100} height={100} />
      <Typography variant="h3">
        {type === 404 ? '페이지를 찾을 수 없어요' : '서버에 문제가 발생했어요'}
      </Typography>
      <Typography variant="captionRegular">어디로 가야하오 - 리신</Typography>
      <ErrorButton>
        <Link href="/">
          <a>
            <Button size="lg">홈으로 가기</Button>
          </a>
        </Link>
      </ErrorButton>
    </ErrorContainer>
  );
}

export default Error;
