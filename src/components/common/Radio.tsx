import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import Typography from './Typography';

import { Input, InputWrapper, Label, Mark } from './Radio.style';

interface RadioProps {
  label: string;
  id?: string;
  name?: string;
  checked?: boolean;
  register?: UseFormRegisterReturn<string>;
}

function Radio(props: RadioProps) {
  const { id, name, label, checked = false, register } = props;

  return (
    <Label htmlFor={id}>
      <InputWrapper>
        <Input
          type="radio"
          id={id || label}
          name={name || label}
          value={label}
          defaultChecked={checked}
          {...register}
        />
        <Mark />
      </InputWrapper>
      <Typography variant="body3">{label}</Typography>
    </Label>
  );
}

export default Radio;
