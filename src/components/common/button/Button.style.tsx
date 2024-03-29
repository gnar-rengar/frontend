import styled from '@emotion/styled';

import type { ButtonProps } from './Button';

type StyledButtonProps = Pick<ButtonProps, 'color' | 'variant' | 'size' | 'width' | 'disabled'>;

export const StyledButton = styled.button<StyledButtonProps>`
  cursor: pointer;
  ${({ variant, size, width }) => {
    if (variant === 'text') {
      return `
        padding: 0;
      `;
    }
    if (size === 'lg') {
      return `
        width: ${width};
        max-width: 480px;
        height: 48px;
        border-radius: 16px;
      `;
    }
    if (size === 'md') {
      return `
        height: 36px;
        padding: 8px 16px;
        border-radius: 8px;
      `;
    }
    return `
      width: fit-content;
      height: 36px;
      padding: 8px 16px;
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
        background: inherit;
        color: ${theme.color[color]};

        &:active {
          background: ${theme.color[color]};
          color: ${theme.color.onPrimary};
        }
      `;
    }
    if (variant === 'text') {
      return `
        border: none;
        background: inherit;
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
