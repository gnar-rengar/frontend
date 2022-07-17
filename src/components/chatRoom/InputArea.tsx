import { useTheme } from '@emotion/react';
import dayjs from 'dayjs';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import { throttle } from '../../utils';
import { Form, Input, ButtonWrapper } from './style';

const badWords = ['개새끼', '병신'];
function InputArea(props) {
  const { hasBadWord, setMessages, setHasBadWord } = props;

  const {
    icon: {
      size: { xl },
    },
  } = useTheme();

  const ref = useRef<HTMLInputElement>(null);

  const sendNewMsg = (id: string, message: string) => {
    const timestamp = new Date().getTime();
    const date = dayjs(timestamp).format('YYYY-MM-DD');
    const newMessage = { id, timestamp, message };
    setMessages((messages) => {
      if (messages[date]) {
        return { ...messages, [date]: [...messages[date], newMessage] };
      }
      return { ...messages, [date]: [newMessage] };
    });
  };

  useEffect(() => {
    ref.current.addEventListener('ignore', (e) => {
      const message = (e.target as HTMLInputElement).value;
      sendNewMsg('1', message);
      setHasBadWord(false);
    });
  }, []);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const message = form.message.value;

    // TODO 필터링 함수 작성 또는 라이브러리 사용
    if (badWords.includes(message)) {
      setHasBadWord(true);
    } else {
      sendNewMsg('1', message);
      form.reset();
    }
  };

  const handleChange = throttle(() => console.log('typing'), 1000);

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        id="message"
        type="text"
        placeholder="모험은 역시 친구랑 같이 해야 신나는법!"
        onChange={handleChange}
        ref={ref}
      />
      <ButtonWrapper type="submit">
        <Image src="/icons/send.svg" width={xl} height={xl} />
      </ButtonWrapper>
    </Form>
  );
}

export default InputArea;
