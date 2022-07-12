import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import Chip from './Chip';
import { Input, SelectLabel } from './Chip.style';

import type { ChipProps } from './Chip';

interface RadioChipProps extends ChipProps {
  htmlFor: string;
  value: string;
  name?: string;
  width?: 'fit-content' | 'fix';
  radioChecked: string;
  setRadioChecked: React.Dispatch<React.SetStateAction<string>>;
  register?: UseFormRegister<any>;
  watch?: UseFormRegister<any>;
}

function RadioChip(props: RadioChipProps) {
  const {
    htmlFor,
    value,
    width = 'fit-content',
    radioChecked,
    setRadioChecked,
    register,
    watch,
    ...other
  } = props;
  const { onBlur, ref, onChange, name } = register(`playStyle.${other.name}`);
  const testValue = watch(`playStyle.${other.name}`);
  const onChangeRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
    setRadioChecked(e.target.value);
  };
  return (
    <SelectLabel width={width} htmlFor={htmlFor}>
      <Input
        type="radio"
        onChange={onChangeRadio}
        value={value}
        defaultChecked={false}
        id={value}
        onBlur={onBlur}
        ref={ref}
        name={name}
      />
      <Chip chosen={(testValue as unknown) === value} {...other} />
    </SelectLabel>
  );
}
export default RadioChip;
