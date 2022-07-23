import React, { useContext, useMemo } from 'react';
import Image from 'next/image';
import { useTheme } from '@emotion/react';

import { Form, Input, ButtonWrapper } from './style';

import { throttle } from '../../utils';
import { SocketContext } from '../../contexts/socket';

const badWords = ['개새끼', '병신'];

const roomId = '62d565601115b1eb5763d761';
const userId = '62d509be151f1fb3b2e0f792';

const whitespaceValidation = /\S/;

interface InputAreaProps {
  setHasBadWord: React.Dispatch<React.SetStateAction<boolean>>;
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
}

function InputArea(props: InputAreaProps) {
  const { setHasBadWord, input, setInput } = props;

  const socket = useContext(SocketContext);
  const {
    icon: {
      size: { xl },
    },
  } = useTheme();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const text = form.message.value;
    if (!whitespaceValidation.test(text)) return;

    // TODO 필터링 함수 작성 또는 라이브러리 사용
    if (badWords.includes(text)) {
      setHasBadWord(true);
    } else {
      socket.emit('sendMessage', roomId, userId, text);
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
    if (text.length > 0) {
      emitTyping();
    } else {
      socket.emit('endTyping', roomId);
    }

    setInput(e.target.value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        id="message"
        type="text"
        placeholder="모험은 역시 친구랑 같이 해야 신나는법!"
        onChange={handleChange}
        value={input}
      />
      <ButtonWrapper type="submit">
        <Image src="/icons/send.svg" width={xl} height={xl} />
      </ButtonWrapper>
    </Form>
  );
}

export default InputArea;
