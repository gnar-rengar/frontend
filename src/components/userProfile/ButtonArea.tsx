import React from 'react';
import { Button } from '../common';

import { ButtonContainer } from './style';

// TODO 성규님과 버튼 상의 후 수정
function ButtonArea() {
  return (
    <ButtonContainer>
      <Button variant="outlined" color="onBackground" size="lg">
        리뷰 작성
      </Button>
      <Button variant="contained" size="lg">
        채팅하기
      </Button>
    </ButtonContainer>
  );
}

export default ButtonArea;
