import React, { forwardRef } from 'react';
import { Input, InputWrapper } from './TextField.style';

interface TextFieldProps {
  name?: string;
  placeholder?: string;
  required?: boolean;
  error?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => (
  <InputWrapper>
    <Input type="text" {...props} ref={ref} />
  </InputWrapper>
));

export default TextField;
