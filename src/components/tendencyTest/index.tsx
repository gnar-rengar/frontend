import React, { useState } from 'react';
import { tendencyQuestion } from '../../constant';
import useGTagOnMount from '../../hooks/useGTagOnMount';

import End from './End';
import Question from './Question';
import Start from './Start';

function TendencyTest() {
  const [testNumber, setTestNumber] = useState(-1);
  const [testAnswer, setTestAnswer] = useState<string[]>([]);

  useGTagOnMount('tendency_test');

  const pageRenderMemo = () => {
    if (testNumber === -1) {
      return <Start setTestNumber={setTestNumber} />;
    }
    if (testNumber < tendencyQuestion.length) {
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
      <End testAnswer={testAnswer} setTestNumber={setTestNumber} setTestAnswer={setTestAnswer} />
    );
  };

  return <div>{pageRenderMemo()}</div>;
}

export default TendencyTest;
