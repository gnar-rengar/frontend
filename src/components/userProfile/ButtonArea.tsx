import React from 'react';
import { Button } from '../common';
import { ButtonContainer } from './style';

function ButtonArea() {
  return (
    <ButtonContainer>
      <Button variant="outlined" size="lg">
        리뷰 작성
      </Button>
      <Button variant="contained" size="lg">
        채팅하기
      </Button>
    </ButtonContainer>
  );
}

export default ButtonArea;
