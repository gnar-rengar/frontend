import React, { useContext } from 'react';
import { useQueryClient } from 'react-query';
import { Button, Typography } from '../common';
import { SocketContext } from '../../contexts/socket';
import { ButtonContainer, Notice, WarningMessageContainer } from './style';

interface BadWordAlertProps {
  setHasBadWord: React.Dispatch<React.SetStateAction<boolean>>;
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
}

const userId = '62d509be151f1fb3b2e0f792';

function BadWordAlert(props: BadWordAlertProps) {
  const { setHasBadWord, input, setInput } = props;

  const socket = useContext(SocketContext);

  const roomData = useQueryClient().getQueryData<{
    roomId: string;
    opponent: {
      userId: string;
      profileUrl: string;
      lolNickname: string;
    };
  }>('chatRoom');
  const roomId = roomData?.roomId;

  const handleClick = () => {
    setInput('');
    setHasBadWord(false);
  };

  const handleClickIgnore = () => {
    socket.emit('sendMessage', roomId, userId, input);
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