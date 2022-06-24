import React from 'react';
import Typography from './Typography';
import { StyledButton } from './Button.style';

import type { ColorVariant } from '../../types/color.type';

export interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  color?: ColorVariant;
  variant?: 'contained' | 'outlined';
  size?: 'sm' | 'lg';
  value?: string | number | boolean;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: string | number;
}

const typoVariant = {
  sm: 'body4',
  lg: 'body1',
} as const;

function Button(props: ButtonProps) {
  const { children, size, ...other } = props;

  return (
    <StyledButton {...{ ...other, size }}>
      <Typography variant={typoVariant[size]} align="center">
        {children}
      </Typography>
    </StyledButton>
  );
}

Button.defaultProps = {
  color: 'primary',
  variant: 'contained',
  width: 'long',
  disabled: false,
};

export default Button;
