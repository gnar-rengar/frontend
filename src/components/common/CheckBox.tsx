import React, { useState } from 'react';
import { Input, Label, Mark } from './CheckBox.style';
import Typography from './Typography';

interface CheckBoxProps {
  label: string;
  id?: string;
  name?: string;
  checked?: boolean;
}

function CheckBox(props: CheckBoxProps) {
  const { id, name, label, checked = false } = props;

  const [isChecked, setIsChecked] = useState(checked || false);

  return (
    <Label htmlFor={id}>
      <Input
        type="checkbox"
        id={id || label}
        name={name || label}
        onChange={() => setIsChecked((p) => !p)}
        checked={isChecked}
      />
      <Mark />
      <Typography variant="body3">{label}</Typography>
    </Label>
  );
}

export default CheckBox;
