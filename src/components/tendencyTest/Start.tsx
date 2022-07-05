import Image from 'next/future/image';
import React from 'react';
import { tendencyImage } from '../../constant';
import { Button, Typography } from '../common';
import { ButtonContainer, TestStartContainer } from './style';

interface StartProps {
  setTestNumber: React.Dispatch<React.SetStateAction<number>>;
}

function Start({ setTestNumber }: StartProps) {
  return (
    <>
      <TestStartContainer>
        <Typography variant="h2" align="center">
          나는 어떤
          <br />
          플레이 스타일일까?
        </Typography>
        <Typography align="center" variant="body2">
          내 플레이 스타일을 확인하고
          <br />
          맞춤 듀오를 찾아보아요!
        </Typography>
        <Image src={tendencyImage.start} width={240} height={240} />
      </TestStartContainer>
      <ButtonContainer>
        <Button
          onClick={() => setTestNumber(0)}
          size="lg"
          variant="contained"
          color="primaryVariant"
        >
          내 플레이 스타일 알아보기
        </Button>
      </ButtonContainer>
    </>
  );
}

export default Start;
