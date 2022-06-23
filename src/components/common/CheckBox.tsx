import React from 'react';
import Typography from './Typography';

import { Input, InputWrapper, Label, Mark } from './CheckBox.style';

interface CheckBoxProps {
  label: string;
  id?: string;
  name?: string;
  checked?: boolean;
}

function CheckBox(props: CheckBoxProps) {
  const { id, name, label, checked = false } = props;

  return (
    <Label htmlFor={id}>
      <InputWrapper>
        <Input
          type="checkbox"
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

export default CheckBox;
