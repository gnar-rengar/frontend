import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import Typography from '../typography/Typography';
import { Input, InputWrapper, Label, Mark } from './CheckBox.style';

interface CheckBoxProps {
  label: string;
  id?: string;
  register?: UseFormRegisterReturn<string>;
}

function CheckBox(props: CheckBoxProps) {
  const { id, label, register } = props;

  return (
    <Label htmlFor={id}>
      <InputWrapper>
        <Input type="checkbox" id={id || label} value={label} {...register} />
        <Mark />
      </InputWrapper>
      <Typography variant="body3">{label}</Typography>
    </Label>
  );
}

export default CheckBox;
