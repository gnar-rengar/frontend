import React from 'react';
import Button from '../components/common/Button';
import CheckBox from '../components/common/CheckBox';

function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <CheckBox label="만나서 반갑습니다" />
      <Button>내 듀오 찾으러 가기</Button>
    </div>
  );
}

export default Home;
