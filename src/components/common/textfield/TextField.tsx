import React, { forwardRef } from 'react';
import { Input } from './TextField.style';

interface TextFieldProps {
  name?: string;
  placeholder?: string;
  required?: boolean;
  error?: boolean;
  active?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => (
  <Input type="text" {...props} ref={ref} />
));

export default TextField;
