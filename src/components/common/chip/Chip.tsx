import React from 'react';
import { ColorVariant } from '../../../types/theme.type';
import Typography from '../typography/Typography';

import { StyledChip } from './Chip.style';

export interface ChipProps {
  chosen?: boolean;
  size?: 'sm' | 'lg';
  colorProp?: ColorVariant;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLLabelElement>) => void;
}

const typoVariant = {
  sm: 'caption',
  lg: 'body4',
} as const;

function Chip(props: ChipProps) {
  const { chosen, size, children, colorProp, onClick } = props;

  return (
    <StyledChip onClick={onClick} chosen={chosen} colorProp={colorProp} size={size}>
      <Typography variant={typoVariant[size]} space="nowrap">
        {children}
      </Typography>
    </StyledChip>
  );
}

Chip.defaultProps = {
  chosen: false,
  size: 'lg',
};

export default Chip;
