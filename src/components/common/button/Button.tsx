import React from 'react';
import Typography from '../typography/Typography';
import { StyledButton } from './Button.style';

import type { ColorVariant } from '../../../types/color.type';

export interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  color?: ColorVariant;
  variant?: 'contained' | 'outlined' | 'text';
  size?: 'sm' | 'lg';
  value?: string | number;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}

const typoVariant = {
  sm: 'body4',
  lg: 'body1',
} as const;

function Button(props: ButtonProps) {
  const { type, size, value, onClick, children, ...other } = props;

  return (
    <StyledButton type={type} value={value} onClick={onClick} {...{ ...other, size }}>
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
