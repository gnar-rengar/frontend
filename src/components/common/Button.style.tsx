import styled from '@emotion/styled';

import type { ButtonProps } from './Button';

type StyledButtonProps = Pick<ButtonProps, 'color' | 'variant' | 'size' | 'disabled'>;

export const StyledButton = styled.button<StyledButtonProps>`
  cursor: pointer;
  ${({ size }) => {
    if (size === 'lg') {
      return `
      width: 345px;
      height: 48px;
      border-radius: 16px;
      `;
    }
    return `
      height: 36px;
      border-radius: 8px;
    `;
  }}

  ${({ theme, color, variant, disabled }) => {
    if (disabled) {
      return `
        border: 1.5px solid ${theme.color.disable};
        background: ${theme.color.disable};
        color: ${theme.color.onPrimary}; 
        cursor: default;
      `;
    }
    return `
      border: 1.5px solid ${theme.color[color]};
      background: ${variant === 'contained' ? theme.color[color] : 'inherit'};
      color: ${variant === 'contained' ? theme.color.onPrimary : theme.color[color]};
    `;
  }}
`;
