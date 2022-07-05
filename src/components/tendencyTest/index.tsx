import React, { useMemo, useState } from 'react';
import { tendencyQuestion } from '../../constant';
import Question from './Question';
import Start from './Start';

function TendencyTest() {
  const [testNumber, setTestNumber] = useState(-1);
  const [testAnswer, setTestAnswer] = useState<string[]>([]);

  const pageRenderMemo = useMemo(() => {
    if (testNumber === -1) {
      return <Start setTestNumber={setTestNumber} />;
    }
    if (testNumber <= tendencyQuestion.length) {
      return (
        <Question
          setTestNumber={setTestNumber}
          testNumber={testNumber}
          testAnswer={testAnswer}
          setTestAnswer={setTestAnswer}
        />
      );
    }
    return (
      <Question
        setTestNumber={setTestNumber}
        testNumber={testNumber}
        testAnswer={testAnswer}
        setTestAnswer={setTestAnswer}
      />
    );
  }, [testNumber]);

  return <div>{pageRenderMemo}</div>;
}

export default TendencyTest;
