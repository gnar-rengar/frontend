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

    if (variant === 'outlined') {
      return `
        border: 1.5px solid ${theme.color[color]};
        background: intherit;
        color: ${theme.color[color]};
      `;
    }

    if (variant === 'text') {
      return `
        border: none;
        bacgkround: none;
        color: ${theme.color[color]};
      `;
    }

    return `
    border: 1.5px solid ${theme.color[color]};
    background: ${theme.color[color]};
    color: ${theme.color.onPrimary};
  `;
  }}
`;
