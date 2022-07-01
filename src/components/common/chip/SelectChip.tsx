import React, { useState } from 'react';
import Chip from './Chip';

import { Label } from '../checkbox/CheckBox.style';
import { Input } from './Chip.style';

import type { ChipProps } from './Chip';

interface SelectChipProps extends ChipProps {
  htmlFor: string;
  value: string;
}

function SelectChip(props: SelectChipProps) {
  const { htmlFor, value, ...other } = props;
  const [checked, setChecked] = useState(false);

  return (
    <Label htmlFor={htmlFor}>
      <Input type="checkbox" value={value} checked={checked} onChange={() => {}} />
      <Chip {...other} chosen={checked} onClick={() => setChecked((p) => !p)} />
    </Label>
  );
}
export default SelectChip;
