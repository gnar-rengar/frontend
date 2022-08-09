import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button, Typography } from '../common';
import { ReviewSuccessContainer } from './style';

function ReviewSuccess() {
  return (
    <ReviewSuccessContainer>
      <Image src="/icons/checkCircle.svg" layout="fixed" width="100px" height="100px" />
      <Typography variant="h3">매너 평가를 완료했어요</Typography>
      <Link href="/">
        <a>
          <Button size="lg" width="148px">
            홈으로
          </Button>
        </a>
      </Link>
    </ReviewSuccessContainer>
  );
}

export default ReviewSuccess;
