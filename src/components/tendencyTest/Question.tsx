import Image from 'next/image';
import React from 'react';
import { tendencyAnswer, tendencyImage, tendencyQuestion } from '../../constant';
import { Button, Typography } from '../common';
import {
  ButtonContainer,
  QuestionAndExpression,
  QuestionContainer,
  TendencyProgressBar,
} from './style';

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
    <QuestionContainer>
      <TendencyProgressBar width={progressValue}>
        <div />
      </TendencyProgressBar>
      <QuestionAndExpression>
        <Typography align="center" whiteSpace="pre-line" variant="h3">
          {tendencyQuestion[testNumber]}
        </Typography>
        <Image src={tendencyImage.answer[testNumber]} width={240} height={240} />
      </QuestionAndExpression>
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
    </QuestionContainer>
  );
}

export default Question;
