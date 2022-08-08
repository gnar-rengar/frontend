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
  checkedMax?: number;
  watch?: string[];
}

function CheckBoxChip(props: CheckBoxChipProps) {
  const { htmlFor, width = 'fit-content', value, register, checkedMax, watch, ...other } = props;
  const [checked, setChecked] = useState(watch?.includes(value) || false);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    setChecked(watch?.includes(value));
  }, [watch]);

  const onClickChip = () => {
    if (watch.length + 1 > checkedMax && !checked) setDisabled(true);
    else {
      setDisabled(false);
      setChecked((p) => !p);
    }
  };

  return (
    <SelectLabel width={width} htmlFor={htmlFor}>
      <Input type="checkbox" value={value} id={htmlFor} {...register} disabled={disabled} />
      <Chip onClick={onClickChip} chosen={checked} {...other} />
    </SelectLabel>
  );
}
export default CheckBoxChip;
