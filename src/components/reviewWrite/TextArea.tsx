import React, { useCallback, useRef, useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { Typography } from '../common';

import { TextAreaContainer } from './style';

const MAX_LENGTH = 800;
const MIN_HEIGHT = 120;

interface TextAreaProps {
  register: UseFormRegisterReturn<string>;
}

function TextArea({ register }: TextAreaProps) {
  const [text, setText] = useState('');

  const { ref: formRef, ...other } = register;
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const ref: React.LegacyRef<HTMLTextAreaElement> = (e) => {
    formRef(e);
    textAreaRef.current = e;
  };

  const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = useCallback((e) => {
    const newText = e.target.value;
    if (newText.length > MAX_LENGTH) return;

    const { scrollHeight } = textAreaRef.current;
    textAreaRef.current.style.height = `${Math.max(scrollHeight, MIN_HEIGHT)}px`;
    setText(newText);
  }, []);

  return (
    <TextAreaContainer>
      <textarea name="" id="" {...other} value={text} onChange={handleChange} ref={ref} />
      <Typography variant="caption" align="right">
        {`${text.length}/${MAX_LENGTH}자`}
      </Typography>
    </TextAreaContainer>
  );
}

export default TextArea;
