import React, { useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import Chip from './Chip';
import { Input, SelectLabel } from './Chip.style';

import type { ChipProps } from './Chip';

interface CheckBoxChipProps extends ChipProps {
  htmlFor: string;
  width?: 'fit-content' | 'fix';
  register?: UseFormRegisterReturn<string>;
  getValues?: string[];
}

function CheckBoxChip(props: CheckBoxChipProps) {
  const { htmlFor, width = 'fit-content', register, getValues, ...other } = props;
  const [checked, setChecked] = useState(getValues?.includes(htmlFor) || false);

  return (
    <SelectLabel width={width} htmlFor={htmlFor}>
      <Input type="checkbox" value={htmlFor} id={htmlFor} {...register} />
      <Chip onClick={() => setChecked((p) => !p)} chosen={checked} {...other} />
    </SelectLabel>
  );
}
export default CheckBoxChip;
