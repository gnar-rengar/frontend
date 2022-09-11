import React, { forwardRef } from 'react';
import { Input } from './TextField.style';

interface TextFieldProps {
  name?: string;
  placeholder?: string;
  required?: boolean;
  error?: boolean;
  active?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  value?: string | number;
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
  const { value, ...other } = props;
  return <Input type="text" ref={ref} value={value} {...other} />;
});

export default TextField;
