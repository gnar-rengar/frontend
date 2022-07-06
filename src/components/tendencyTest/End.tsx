import Image from 'next/future/image';
import { useRouter } from 'next/router';
import React from 'react';
import { tendencyImage } from '../../constant';
import { Button, Chip, Typography } from '../common';
import { ChipContainer, EndContainer, PlayStyleContainer, StartEndButtonContainer } from './style';

interface EndProps {
  testAnswer: string[];
}

function End({ testAnswer }: EndProps) {
  const router = useRouter();

  return (
    <>
      <EndContainer>
        <PlayStyleContainer>
          <Typography variant="h3" align="center">
            소환사님은
          </Typography>
          <ChipContainer>
            <Chip size="sm" chosen colorProp="secondary">
              #네글자요
            </Chip>
            <Chip size="sm" chosen colorProp="secondary">
              #네글자요
            </Chip>
          </ChipContainer>
          <ChipContainer>
            <Chip size="sm" chosen colorProp="secondary">
              #네글자요
            </Chip>
            <Chip size="sm" chosen colorProp="secondary">
              #네글자요
            </Chip>
          </ChipContainer>
        </PlayStyleContainer>
        <Typography variant="h3" align="center">
          이런 플레이 스타일이군요!
        </Typography>
        <Image src={tendencyImage.end} width={240} height={240} />
        <Typography variant="h3" align="center">
          소환사님과 딱 맞는
          <br />
          찰떡궁합 듀오가 기다리오 있어요
        </Typography>
      </EndContainer>
      <StartEndButtonContainer>
        <Button size="md" variant="text" color="primaryVariant">
          플레이스타일 수정하기
        </Button>
        <Button
          onClick={() => router.push('/on-boarding')}
          size="lg"
          variant="contained"
          color="primaryVariant"
        >
          지금 바로 듀오 찾으러가기
        </Button>
      </StartEndButtonContainer>
    </>
  );
}

export default End;
