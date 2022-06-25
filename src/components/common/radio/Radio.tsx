import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import { UseFormRegisterReturn } from 'react-hook-form';
=======
<<<<<<< HEAD
>>>>>>> ca8b69a (UDFM-24 - 프론트엔드 마이 페이지 (#27))
=======
<<<<<<< HEAD
>>>>>>> ac1c17a (충돌 수정 및 import 수정)
import Typography from '../typography/Typography';
=======
<<<<<<< HEAD:src/components/common/Radio.tsx
=======
>>>>>>> 7c80a00 (충돌 수정 및 import 수정)
import { UseFormRegisterReturn } from 'react-hook-form';
import Typography from '../typography/Typography';
<<<<<<< HEAD
>>>>>>> 40f8fee (UDFM-24 - 프론트엔드 마이 페이지 (#27)):src/components/common/radio/Radio.tsx
>>>>>>> 73b1f2a (UDFM-24 - 프론트엔드 마이 페이지 (#27))
=======
>>>>>>> 7c80a00 (충돌 수정 및 import 수정)

import { Input, InputWrapper, Label, Mark } from './Radio.style';

interface RadioProps {
  label: string;
  id?: string;
  name?: string;
  checked?: boolean;
<<<<<<< HEAD
  register?: UseFormRegisterReturn<string>;
}

function Radio(props: RadioProps) {
  const { id, name, label, checked = false, register } = props;
=======
<<<<<<< HEAD
}

function Radio(props: RadioProps) {
  const { id, name, label, checked = false } = props;
=======
  register?: UseFormRegisterReturn<string>;
}

function Radio(props: RadioProps) {
  const { id, name, label, checked = false, register } = props;
>>>>>>> 73b1f2a (UDFM-24 - 프론트엔드 마이 페이지 (#27))
>>>>>>> ca8b69a (UDFM-24 - 프론트엔드 마이 페이지 (#27))

  return (
    <Label htmlFor={id}>
      <InputWrapper>
        <Input
          type="radio"
          id={id || label}
          name={name || label}
          value={label}
          defaultChecked={checked}
<<<<<<< HEAD
          {...register}
=======
<<<<<<< HEAD
=======
          {...register}
>>>>>>> 73b1f2a (UDFM-24 - 프론트엔드 마이 페이지 (#27))
>>>>>>> ca8b69a (UDFM-24 - 프론트엔드 마이 페이지 (#27))
        />
        <Mark />
      </InputWrapper>
      <Typography variant="body3">{label}</Typography>
    </Label>
  );
}

export default Radio;
