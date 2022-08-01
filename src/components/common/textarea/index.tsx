import React, { useCallback, useRef, useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { Typography } from '..';

import { TextAreaContainer } from './style';

interface TextAreaProps {
  id?: string;
  name?: string;
  width?: string;
  maxLength?: number;
  minHeight?: number;
  register: UseFormRegisterReturn<string>;
  placeholder?: string;
}

function TextArea(props: TextAreaProps) {
  const { id, name, width, maxLength, minHeight, register } = props;

  const [text, setText] = useState('');

  const { ref: formRef, ...other } = register;
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const ref: React.LegacyRef<HTMLTextAreaElement> = (e) => {
    formRef(e);
    textAreaRef.current = e;
  };

  const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = useCallback((e) => {
    const newText = e.target.value;
    if (newText.length > maxLength) return;

    const { scrollHeight } = textAreaRef.current;
    textAreaRef.current.style.height = `${Math.max(scrollHeight, minHeight)}px`;
    setText(newText);
  }, []);

  return (
    <TextAreaContainer width={width}>
      <textarea id={id} name={name} {...other} value={text} onChange={handleChange} ref={ref} />
      <Typography variant="captionRegular" align="right">
        {`${text.length}/${maxLength}자`}
      </Typography>
    </TextAreaContainer>
  );
}

export default TextArea;

TextArea.defaultProps = {
  id: '',
  name: '',
  width: 'auto',
  maxLength: 800,
  minHeight: 120,
};
