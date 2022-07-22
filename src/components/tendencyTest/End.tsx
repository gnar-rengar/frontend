import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { tendencyImage, tendencyResult } from '../../constant';
import { Button, Chip, Typography } from '../common';
import {
  ResultContainer,
  EndContainer,
  PlayStyleContainer,
  StartEndButtonContainer,
  ChipContainer,
} from './style';

interface EndProps {
  testAnswer: string[];
  setTestNumber: React.Dispatch<React.SetStateAction<number>>;
  setTestAnswer: React.Dispatch<React.SetStateAction<string[]>>;
}

function End({ testAnswer, setTestNumber, setTestAnswer }: EndProps) {
  const [result, setResult] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const resultArray = testAnswer.map(
      (answer: 'top' | 'bottom', index) => tendencyResult[index][answer]
    );
    setResult([...resultArray]);
  }, []);

  const onClickTestReset = () => {
    setTestNumber(-1);
    setTestAnswer([]);
  };

  return (
    <>
      <EndContainer>
        <PlayStyleContainer>
          <Typography variant="h3" align="center">
            소환사님은
          </Typography>
          <ResultContainer>
            {result.map((style) => (
              <ChipContainer key={style}>
                <Chip key={style} size="body1" chosen color="secondary">
                  {`#${style}`}
                </Chip>
              </ChipContainer>
            ))}
          </ResultContainer>
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
        <Button onClick={onClickTestReset} size="md" variant="text" color="primaryVariant">
          테스트 다시 하기
        </Button>
        <Button
          onClick={() =>
            router.push(
              `/on-boarding?battle=${result[0]}&line=${result[1]}&champion=${result[2]}&physical=${result[3]}`
            )
          }
          size="lg"
          variant="contained"
          color="primaryVariant"
        >
          가입하고 찰떡 듀오 매칭하기
        </Button>
      </StartEndButtonContainer>
    </>
  );
}

export default End;
