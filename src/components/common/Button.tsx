import React from 'react';
import { StyledButton } from './Button.style';
import Typography from './Typography';

export interface ButtonProps {
  color?: 'primary' | 'onBackground';
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
