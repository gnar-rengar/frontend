import React from 'react';
import { Typography } from '..';

import { Input, InputWrapper, Label, Mark } from './Radio.style';

interface RadioProps {
  label: string;
  id?: string;
  name?: string;
  checked?: boolean;
}

function Radio(props: RadioProps) {
  const { id, name, label, checked = false } = props;

  return (
    <Label htmlFor={id}>
      <InputWrapper>
        <Input
          type="radio"
          id={id || label}
          name={name || label}
          value={label}
          defaultChecked={checked}
        />
        <Mark />
      </InputWrapper>
      <Typography variant="body3">{label}</Typography>
    </Label>
  );
}

export default Radio;
