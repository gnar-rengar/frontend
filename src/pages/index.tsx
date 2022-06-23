import React from 'react';
import CheckBox from '../components/common/CheckBox';
import Radio from '../components/common/Radio';

function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Radio label="내용을 작성해 주세요" id="radio1" name="radio" checked />
      <Radio label="이건 골라진 내용이에요" id="radio2" name="radio" />
      <CheckBox label="내용을 작성해 주세요" name="checkbox" checked />
      <CheckBox label="이건 골라진 내용이에요" name="checkbox" />
    </div>
  );
}

export default Home;
