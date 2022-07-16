import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { TypographyVariant } from '../../../types/theme.type';
import Typography from '../typography/Typography';
import { Input, InputWrapper, Label, Mark } from './CheckBox.style';

interface CheckBoxProps {
  label: string;
  id?: string;
  register?: UseFormRegisterReturn<string>;
  variant?: TypographyVariant;
}

function CheckBox(props: CheckBoxProps) {
  const { id, label, register, variant = 'body3' } = props;

  return (
    <Label htmlFor={id}>
      <InputWrapper>
        <Input type="checkbox" id={id || label} value={label} {...register} />
        <Mark />
      </InputWrapper>
      <Typography variant={variant}>{label}</Typography>
    </Label>
  );
}

export default CheckBox;
