import React, { useCallback, useRef, useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { Typography } from '..';

import { TextAreaContainer } from './style';

interface TextAreaProps {
  maxLength?: number;
  minHeight?: number;
  register: UseFormRegisterReturn<string>;
  placeholder?: string;
}

function TextArea(props: TextAreaProps) {
  const { maxLength, minHeight, register, placeholder } = props;

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
    <TextAreaContainer>
      <textarea
        name=""
        id=""
        {...other}
        value={text}
        placeholder={placeholder}
        onChange={handleChange}
        ref={ref}
      />
      <Typography variant="caption" align="right">
        {`${text.length}/${maxLength}자`}
      </Typography>
    </TextAreaContainer>
  );
}

export default TextArea;

TextArea.defaultProps = {
  maxLength: 800,
  minHeight: 120,
};
