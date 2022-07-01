import React from 'react';
import { StyledChip } from './Chip.style';
import Typography from '../typography/Typography';

export interface ChipProps {
  chosen?: boolean;
  children: React.ReactNode;
  size: 'sm' | 'lg';
  onClick?: (e: React.MouseEvent<HTMLLabelElement>) => void;
}

const typoVariant = {
  sm: 'caption',
  lg: 'body3',
} as const;

function Chip(props: ChipProps) {
  const { chosen, size, children, onClick } = props;

  return (
    <StyledChip onClick={onClick} chosen={chosen} size={size}>
      <Typography variant={typoVariant[size]} nowrap>
        {children}
      </Typography>
    </StyledChip>
  );
}

export default Chip;
