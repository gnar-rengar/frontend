import { useTheme } from '@emotion/react';
import dayjs from 'dayjs';
import Image from 'next/image';
import React from 'react';
import { throttle } from '../../utils';
import { Form, Input, Button } from './style';

function InputArea({ setMessages }) {
  const {
    icon: {
      size: { xl },
    },
  } = useTheme();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    const timestamp = new Date().getTime();
    const date = dayjs(timestamp).format('YYYY-MM-DD');
    const newMessage = { id: '1', timestamp, message: form.message.value };
    setMessages((messages) => {
      if (messages[date]) {
        return { ...messages, [date]: [...messages[date], newMessage] };
      }
      return { ...messages, [date]: [newMessage] };
    });

    form.reset();
  };

  const handleChange = throttle(() => console.log('typing'), 1000);

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        id="message"
        type="text"
        placeholder="모험은 역시 친구랑 같이 해야 신나는법!"
        onChange={handleChange}
      />
      <Button type="submit">
        <Image src="/icons/send.svg" width={xl} height={xl} />
      </Button>
    </Form>
  );
}

export default InputArea;
