import styled from '@emotion/styled';
import { ColorVariant } from '../../../types/theme.type';
import { Label } from '../checkbox/CheckBox.style';

interface StyledChipProps {
  chosen?: boolean;
  size?: 'sm' | 'lg';
  color?: ColorVariant;
}

export const StyledChip = styled.span<StyledChipProps>`
  width: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;

  ${({ size }) => {
    if (size === 'sm') return 'padding: 3px 8px;';
    return 'padding: 5px 14px;';
  }}

  ${({ theme, chosen, color }) => {
    if (chosen) {
      return `
        background: ${theme.color[color]};
        border: 1px solid ${theme.color[color]};
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

export const SelectLabel = styled(Label)<{ width: 'fit-content' | 'fix' }>`
  ${({ width }) => {
    if (width === 'fit-content') {
      return 'width: fit-content';
    }
    return 'width: 89px';
  }}
`;
