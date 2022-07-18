import React from 'react';
import Image from 'next/image';
import { useTheme } from '@emotion/react';

import { Form, Input, ButtonWrapper } from './style';

// import { throttle } from '../../utils';
import type { AddMessage } from '../../hooks/useMessages';

const badWords = ['개새끼', '병신'];

interface InputAreaProps {
  addMessages: AddMessage;
  setHasBadWord: React.Dispatch<React.SetStateAction<boolean>>;
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
}

function InputArea(props: InputAreaProps) {
  const { addMessages, setHasBadWord, input, setInput } = props;

  const {
    icon: {
      size: { xl },
    },
  } = useTheme();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const message = form.message.value;

    // TODO 필터링 함수 작성 또는 라이브러리 사용
    if (badWords.includes(message)) {
      setHasBadWord(true);
    } else {
      addMessages('1', message);
      setInput('');
    }
  };

  // TODO 입력할 때 ... 애니메이션
  // const animate = throttle(() => console.log('typing'), 1000);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    // animate();
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
