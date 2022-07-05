import React, { useMemo, useState } from 'react';
import { tendencyQuestion } from '../../constant';
import { Button, Typography } from '../common';
import Question from './Question';
import { ButtonContainer, TestContainer } from './style';

function TendencyTest() {
  const [testNumber, setTestNumber] = useState(-1);
  const [testAnswer, setTestAnswer] = useState<string[]>([]);

  const pageRenderMemo = useMemo(() => {
    if (testNumber === -1) {
      return (
        <>
          <TestContainer>
            <Typography variant="h2">나는 어떤 소환사일까?</Typography>
            <Typography align="center" variant="body2">
              내 플레이 스타일을 확인하고
              <br />
              맞춤 듀오를 찾아보아요!
            </Typography>
          </TestContainer>
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
    if (testNumber >= 0 && testNumber <= tendencyQuestion.length) {
      return <Question />;
    }
  }, []);

  return (
    <>
      <TestContainer>
        <Typography variant="h2">나는 어떤 소환사일까?</Typography>
        <Typography align="center" variant="body2">
          내 플레이 스타일을 확인하고
          <br />
          맞춤 듀오를 찾아보아요!
        </Typography>
      </TestContainer>
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

export default TendencyTest;
