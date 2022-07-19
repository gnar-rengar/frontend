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
  register?: UseFormRegister<any>;
  watch?: string;
}

function RadioChip(props: RadioChipProps) {
  const { htmlFor, value, width = 'fit-content', register, watch, ...other } = props;
  const readioRegister = register(other.name);

  return (
    <SelectLabel width={width} htmlFor={htmlFor}>
      <Input type="radio" value={value} defaultChecked={false} id={value} {...readioRegister} />
      <Chip chosen={(watch as unknown) === value} {...other} />
    </SelectLabel>
  );
}
export default RadioChip;
