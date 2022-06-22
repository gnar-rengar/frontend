import React from 'react';
import Typography from './Typography';
import { StyledButton } from './Button.style';

import type { ColorVariant } from '../../types/color.type';

export interface ButtonProps {
  color?: ColorVariant;
  variant?: 'contained' | 'outlined';
  disabled?: boolean;
  children: string | number;
}

function Button(props: ButtonProps) {
  const { children, ...other } = props;

  return (
    <StyledButton {...other}>
      <Typography variant="body1" align="center">
        {children}
      </Typography>
    </StyledButton>
  );
}

Button.defaultProps = {
  color: 'primary',
  variant: 'contained',
  disabled: false,
};

export default Button;
