import styled from '@emotion/styled';
import { ColorVariant } from '../../../types/theme.type';

interface StyledChipProps {
  chosen?: boolean;
  size?: 'sm' | 'lg';
  colorProp?: ColorVariant;
}

export const StyledChip = styled.span<StyledChipProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;

  ${({ size }) => {
    if (size === 'sm') return 'padding: 4px 8px;';
    return 'padding: 5px 14px;';
  }}

  ${({ theme, chosen, colorProp }) => {
    if (chosen) {
      return `
        background: ${theme.color[colorProp]};
        border: 1px solid ${theme.color[colorProp]};
        color: ${theme.color.onPrimary};
      `;
    }
    return `
      background: inherit;
      border: 1px solid ${theme.color.onBackgroundSub};
      color: ${theme.color.onBackgroundSub};
    `;
  }}
`;

export const Input = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;
