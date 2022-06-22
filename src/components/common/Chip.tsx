import React from 'react';
import { StyledChip } from './Chip.style';
import Typography from './Typography';

interface ChipProps {
  chosen?: boolean;
  children?: string | number;
  htmlfor: string;
  onClick?: (e: React.MouseEvent<HTMLLabelElement>) => void;
}

function Chip(props: ChipProps) {
  const { chosen, children, htmlfor, onClick } = props;

  return (
    <StyledChip onClick={onClick} chosen={chosen} htmlFor={htmlfor}>
      <Typography variant="body4">{children}</Typography>
    </StyledChip>
  );
}

export default Chip;
