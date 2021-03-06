import React from 'react';
import { Button, StickyBottom } from '../common';

function ButtonArea() {
  return (
    <StickyBottom>
      <Button variant="outlined" color="onBackground" size="lg">
        리뷰 작성
      </Button>
      <Button variant="contained" size="lg">
        채팅하기
      </Button>
    </StickyBottom>
  );
}

export default ButtonArea;
