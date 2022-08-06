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
  checkedMax?: number;
}

function CheckBoxChip(props: CheckBoxChipProps) {
  const {
    htmlFor,
    width = 'fit-content',
    value,
    register,
    getValues,
    checkedMax,
    ...other
  } = props;
  const [checked, setChecked] = useState(getValues?.includes(value) || false);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    setChecked(getValues?.includes(value));
  }, [getValues]);

  const onClickChip = () => {
    if (getValues.length >= checkedMax && !checked) setDisabled(true);
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
