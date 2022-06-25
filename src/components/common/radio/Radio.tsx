import React from 'react';
<<<<<<< HEAD:src/components/common/Radio.tsx
import { UseFormRegisterReturn } from 'react-hook-form';
import Typography from './Typography';
=======
import Typography from '../typography/Typography';
>>>>>>> 40f8fee (UDFM-24 - 프론트엔드 마이 페이지 (#27)):src/components/common/radio/Radio.tsx

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
