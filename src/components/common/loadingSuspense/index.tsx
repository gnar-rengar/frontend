import Image from 'next/image';
import React, { Suspense } from 'react';
import Typography from '../typography/Typography';
import { LoadingContainer } from './style';

export function Loading() {
  return (
    <LoadingContainer>
      <Image src="/icons/loading.svg" layout="fixed" width="100px" height="100px" />
      <Typography variant="h3">열심히 로딩 중</Typography>
      <Typography variant="captionRegular">이게 최대한 빨리 움직이는거라고 - 말파이트</Typography>
    </LoadingContainer>
  );
}

function LoadingSuspense({ children }: { children: React.ReactElement }) {
  return <Suspense fallback={<Loading />}>{children}</Suspense>;
}

export default LoadingSuspense;
