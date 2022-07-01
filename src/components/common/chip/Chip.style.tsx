import styled from '@emotion/styled';

export const StyledChip = styled.span<{ chosen: boolean; size: 'sm' | 'lg' }>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: fit-content;
  border-radius: 100px;
  cursor: pointer;

  ${({ size }) => {
    if (size === 'sm') return 'padding: 4px 8px;';
    return 'padding: 5px 14px;';
  }}

  ${({ theme, chosen }) => {
    const { color } = theme;

    if (chosen) {
      return `
        background: ${color.primaryVariant};
        border: 1px solid ${color.primaryVariant};
        color: ${color.onPrimary};
      `;
    }
    return `
      background: inherit;
      border: 1px solid ${color.onBackgroundSub};
      color: ${color.onBackgroundSub};
    `;
  }}
`;

export const Input = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;
