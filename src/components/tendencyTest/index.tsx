import React, { useState } from 'react';
import { tendencyAnswer, tendencyQuestion } from '../../constant';
import { Button, Typography } from '../common';
import { ButtonContainer, TendencyProgressBar, TestContainer } from './style';

function TendencyTest() {
  const [testNumber, setTestNumber] = useState(-1);
  const [testAnswer, setTestAnswer] = useState([]);

  const progressValue = String((100 / tendencyAnswer.length) * testAnswer.length);

  const onClickAnswer = (type: 'top' | 'bottom') => {
    setTestNumber((prev) => prev + 1);
    setTestAnswer((prev) => [...prev, type]);
  };

  return (
    <>
      {testNumber >= 0 && (
        <TendencyProgressBar width={progressValue}>
          <div />
        </TendencyProgressBar>
      )}
      <TestContainer>
        {testNumber === -1 ? (
          <>
            <Typography variant="h2">나는 어떤 소환사일까?</Typography>
            <Typography align="center" variant="body2">
              내 플레이 스타일을 확인하고
              <br />
              맞춤 듀오를 찾아보아요!
            </Typography>
          </>
        ) : (
          <Typography align="center" space="pre-line" variant="h3">
            {tendencyQuestion[testNumber]}
          </Typography>
        )}
      </TestContainer>
      <ButtonContainer>
        {testNumber === -1 ? (
          <Button
            onClick={() => setTestNumber(0)}
            size="lg"
            variant="contained"
            color="primaryVariant"
          >
            내 플레이 스타일 알아보기
          </Button>
        ) : (
          <>
            <Button
              onClick={() => onClickAnswer('top')}
              size="lg"
              variant="outlined"
              color="primary"
            >
              {tendencyAnswer[testNumber][0]}
            </Button>
            <Button
              onClick={() => onClickAnswer('bottom')}
              size="lg"
              variant="outlined"
              color="primary"
            >
              {tendencyAnswer[testNumber][1]}
            </Button>
          </>
        )}
      </ButtonContainer>
    </>
  );
}

export default TendencyTest;
