import React, { useState } from 'react';
import Chip from './Chip';
import { Input, SelectLabel } from './Chip.style';

import type { ChipProps } from './Chip';

interface RadioChipProps extends ChipProps {
  htmlFor: string;
  value: string;
  name: string;
  width?: 'fit-content' | 'fix';
}

function RadioChip(props: RadioChipProps) {
  const { htmlFor, value, width = 'fit-content', ...other } = props;
  const [checked, setChecked] = useState(false);

  return (
    <SelectLabel width={width} htmlFor={htmlFor}>
      <Input type="checkbox" value={value} defaultChecked={checked} />
      <Chip onClick={() => setChecked((p) => !p)} chosen={checked} {...other} />
    </SelectLabel>
  );
}
export default RadioChip;
