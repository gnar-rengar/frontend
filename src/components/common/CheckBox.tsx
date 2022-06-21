import React from 'react';
import { Input, Label } from './CheckBox.style';

interface CheckBoxProps {
  label: string;
  id?: string;
  name?: string;
  checked?: boolean;
}

function CheckBox(props: CheckBoxProps) {
  const { id, name, label, checked = false } = props;

  return (
    <Label htmlFor={id}>
      <span>
        <Input type="checkbox" id={id || label} name={name || label} checked={checked} />
      </span>
      <span>{label}</span>
    </Label>
  );
}

export default CheckBox;
