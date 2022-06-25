import styled from '@emotion/styled';

export const StyledChip = styled.label<{ chosen: boolean }>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 5px 14px;
  height: 30px;
  border-radius: 100px;
  cursor: pointer;

  ${({ theme, chosen }) => {
    const { color } = theme;

    if (chosen) {
      return `
        background: ${color.primary};
        border: 1px solid ${color.primary};
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
