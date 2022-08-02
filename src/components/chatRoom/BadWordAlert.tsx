import React, { useContext } from 'react';
import { Button, Typography } from '../common';
import { SocketContext } from '../../contexts/socket';
import { ButtonContainer, Notice, WarningMessageContainer } from './style';

interface BadWordAlertProps {
  roomId: string;
  setHasBadWord: React.Dispatch<React.SetStateAction<boolean>>;
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  myId: string;
}

function BadWordAlert(props: BadWordAlertProps) {
  const { roomId, setHasBadWord, input, setInput, myId } = props;

  const socket = useContext(SocketContext);

  const handleClick = () => {
    setInput('');
    setHasBadWord(false);
  };

  const handleClickIgnore = () => {
    socket.emit('sendMessage', roomId, myId, input);
    handleClick();
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
        <Button variant="contained" color="primaryVariant" size="sm" onClick={handleClick}>
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
