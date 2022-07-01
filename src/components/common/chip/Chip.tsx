import React from 'react';
import { StyledChip } from './Chip.style';
import Typography from '../typography/Typography';

export interface ChipProps {
  chosen?: boolean;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLLabelElement>) => void;
}

function Chip(props: ChipProps) {
  const { chosen, children, onClick } = props;

  return (
    <StyledChip onClick={onClick} chosen={chosen}>
      <Typography variant="body4">{children}</Typography>
    </StyledChip>
  );
}

export default Chip;
