import React, { useEffect, useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import Chip from './Chip';
import { Input, SelectLabel } from './Chip.style';

import type { ChipProps } from './Chip';

interface CheckBoxChipProps extends ChipProps {
  htmlFor: string;
  value: string;
  width?: 'fit-content' | 'fix';
  register?: UseFormRegisterReturn<string>;
  getValues?: string[];
}

function CheckBoxChip(props: CheckBoxChipProps) {
  const { htmlFor, width = 'fit-content', value, register, getValues, ...other } = props;
  const [checked, setChecked] = useState(getValues?.includes(value) || false);

  useEffect(() => {
    setChecked(getValues?.includes(value));
  }, [getValues]);

  return (
    <SelectLabel width={width} htmlFor={htmlFor}>
      <Input type="checkbox" value={value} id={htmlFor} {...register} />
      <Chip onClick={() => setChecked((p) => !p)} chosen={checked} {...other} />
    </SelectLabel>
  );
}
export default CheckBoxChip;
