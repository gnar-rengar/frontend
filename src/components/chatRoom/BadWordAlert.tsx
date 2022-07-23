import React from 'react';
import { Button, Typography } from '../common';
import { ButtonContainer, Notice, WarningMessageContainer } from './style';

import type { AddMessage } from '../../hooks/useMessages';

interface BadWordAlertProps {
  addMessages: AddMessage;
  setHasBadWord: React.Dispatch<React.SetStateAction<boolean>>;
  inputRef: React.MutableRefObject<string>;
}

function BadWordAlert(props: BadWordAlertProps) {
  const { addMessages, setHasBadWord, inputRef } = props;

  const handleClickRewrite = () => {
    setHasBadWord(false);
  };

  const handleClickIgnore = () => {
    addMessages('1', inputRef.current);
    setHasBadWord(false);
  };

  return (
    <Notice>
      <WarningMessageContainer>
        <Typography variant="body1">잠시만요, 나쁜 말은 안돼요!</Typography>
        <Typography variant="captionRegular">
          분노는 목적 없는 충동을 일으킬 뿐이오. - 마스터이
        </Typography>
      </WarningMessageContainer>
      <Typography variant="body3">상대방을 조금 더 배려하는건 어떨까요?</Typography>
      <ButtonContainer>
        <Button variant="contained" color="primaryVariant" size="sm" onClick={handleClickRewrite}>
          다시 작성
        </Button>
        <Button variant="contained" color="disable" size="sm" onClick={handleClickIgnore}>
          그대로 전송
        </Button>
      </ButtonContainer>
    </Notice>
  );
}

export default BadWordAlert;
