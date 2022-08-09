import Image from 'next/image';
import React from 'react';
import { Typography } from '../common';
import { SuccessContainer } from './style';

function Success() {
  return (
    <SuccessContainer>
      <Image src="/icons/checkCircle.svg" width="100px" height="100px" />
      <Typography variant="h3" align="center">
        탈퇴가 완료되었어요
        <br />그 동안 이용해주셔서 감사합니다.
      </Typography>
      <Typography variant="captionRegular" align="center">
        &quot;이별은 달콤한 슬픔이란 말...다 헛소리야!&quot;
        <br /> - 징크스
      </Typography>
    </SuccessContainer>
  );
}

export default Success;
