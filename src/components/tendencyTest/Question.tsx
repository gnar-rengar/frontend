import React from 'react';
import Image from 'next/future/image';
import { tendencyAnswer, tendencyImage, tendencyQuestion } from '../../constant';
import { Button, Typography } from '../common';
import { ButtonContainer, TendencyProgressBar, TestContainer } from './style';

interface QuestionProps {
  testNumber: number;
  testAnswer: string[];
  setTestNumber: React.Dispatch<React.SetStateAction<number>>;
  setTestAnswer: React.Dispatch<React.SetStateAction<string[]>>;
}

function Question(props: QuestionProps) {
  const { testNumber, setTestNumber, testAnswer, setTestAnswer } = props;
  const progressValue = String((100 / tendencyAnswer.length) * testAnswer.length);

  const onClickAnswer = (type: 'top' | 'bottom') => {
    setTestNumber((prev) => prev + 1);
    setTestAnswer((prev) => [...prev, type]);
  };

  return (
    <>
      <TendencyProgressBar width={progressValue}>
        <div />
      </TendencyProgressBar>
      <TestContainer>
        <Typography align="center" space="pre-line" variant="h3">
          {tendencyQuestion[testNumber]}
        </Typography>
        <Image src={tendencyImage.answer[testNumber]} width={240} height={240} />
      </TestContainer>
      <ButtonContainer>
        <Button
          onClick={() => onClickAnswer('top')}
          size="lg"
          variant="outlined"
          color="primaryVariant"
        >
          {tendencyAnswer[testNumber][0]}
        </Button>
        <Button
          onClick={() => onClickAnswer('bottom')}
          size="lg"
          variant="outlined"
          color="primaryVariant"
        >
          {tendencyAnswer[testNumber][1]}
        </Button>
      </ButtonContainer>
    </>
  );
}

export default Question;
