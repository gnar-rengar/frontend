import React from 'react';
import { StyledChip } from './Chip.style';
import Typography from './Typography';

interface ChipProps {
  chosen?: boolean;
  children?: string | number;
}

function Chip(props: ChipProps) {
  const { chosen, children } = props;

  return (
    <StyledChip chosen={chosen}>
      <Typography variant="body4">{children}</Typography>
    </StyledChip>
  );
}

export default Chip;
