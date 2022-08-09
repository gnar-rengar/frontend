import React, { useContext, useMemo } from 'react';
import Image from 'next/image';
import { useTheme } from '@emotion/react';

import { Form, Input, ButtonWrapper, InputAreaContainer } from './style';

import { badWordFilter, throttle } from '../../utils';
import { SocketContext } from '../../contexts/socket';
import useGetOpponent from '../../hooks/useGetOpponent';
import { Typography } from '../common';

const whitespaceValidation = /\S/;

interface InputAreaProps {
  setHasBadWord: React.Dispatch<React.SetStateAction<boolean>>;
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  roomId: string;
  myId: string;
  isOpponentTyping: boolean;
}

function InputArea(props: InputAreaProps) {
  const { setHasBadWord, input, setInput, roomId, myId, isOpponentTyping } = props;

  const socket = useContext(SocketContext);
  const {
    icon: {
      size: { xl },
    },
  } = useTheme();

  const { opponent } = useGetOpponent(roomId);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const text = form.message.value;
    if (!whitespaceValidation.test(text)) return;

    const { hasBadWord } = badWordFilter(text);

    if (hasBadWord) {
      setHasBadWord(true);
    } else {
      socket.emit('sendMessage', roomId, myId, text);
      setInput('');
    }
  };

  const emitTyping = useMemo(
    () =>
      throttle(() => {
        socket.emit('typing', roomId);
      }, 1000),
    []
  );

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const text = e.target.value;
    if (text.length >= 256) return;

    if (text.length > 0) {
      emitTyping();
    } else {
      socket.emit('endTyping', roomId);
    }

    setInput(e.target.value);
  };

  return (
    <InputAreaContainer>
      <Form onSubmit={handleSubmit}>
        <Input
          id="message"
          type="text"
          placeholder="모험은 역시 친구랑 같이 해야 신나는법!"
          onChange={handleChange}
          value={input}
          autoComplete="off"
        />
        <ButtonWrapper type="submit">
          <Image src="/icons/send.svg" width={xl} height={xl} />
        </ButtonWrapper>
      </Form>
      {isOpponentTyping && (
        <Typography variant="captionBold" color="onBackgroundSub">
          {opponent.lolNickname}님이 입력하고 있어요...
        </Typography>
      )}
    </InputAreaContainer>
  );
}

export default InputArea;
