import Image from 'next/image';
import React from 'react';
import { Typography } from '../common';
import { NoneContainer } from './style';

function None() {
  return (
    <NoneContainer>
      <Image src="/icons/user.svg" width="100px" height="100px" alt="filter result none" />
      <Typography variant="h3" align="center">
        조건에 맞는 소환사가 없어요
        <br />
        검색 조건을 변경해주세요
      </Typography>
      <Typography variant="captionRegular">예상 밖의 결과로군 - 벨코즈</Typography>
    </NoneContainer>
  );
}

export default None;
