import React, { useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { TypographyVariant } from '../../../types/theme.type';
import Typography from '../typography/Typography';
import { Input, InputWrapper, Label, Mark } from './CheckBox.style';

interface CheckBoxProps {
  label: string;
  id?: string;
  register?: UseFormRegisterReturn<string>;
  variant?: TypographyVariant;
  value?: number;
}

function CheckBox(props: CheckBoxProps) {
  const [booleanValue, setBooleanValue] = useState(0);
  const { id, label, register, variant = 'body3', value } = props;
  const { onChange, ...other } = register;

  const customOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setBooleanValue(1);
    } else {
      setBooleanValue(0);
    }
    onChange(e);
  };

  return (
    <Label htmlFor={id}>
      <InputWrapper>
        <Input
          type="checkbox"
          id={id || label}
          onChange={customOnChange}
          value={value ? booleanValue : label}
          {...other}
        />
        <Mark />
      </InputWrapper>
      <Typography variant={variant}>{label}</Typography>
    </Label>
  );
}

export default CheckBox;
