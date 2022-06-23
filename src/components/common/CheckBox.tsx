import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { Input, Label, Mark } from './CheckBox.style';
import Typography from './Typography';

interface CheckBoxProps {
  label: string;
  id?: string;
  register?: UseFormRegisterReturn<string>;
}

function CheckBox(props: CheckBoxProps) {
  const { id, label, register } = props;

  return (
    <Label htmlFor={id}>
      <Input type="checkbox" id={id || label} value={label} {...register} />
      <Mark />
      <Typography variant="body3">{label}</Typography>
    </Label>
  );
}

export default CheckBox;
