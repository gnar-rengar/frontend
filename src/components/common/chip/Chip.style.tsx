import styled from '@emotion/styled';

export const StyledChip = styled.span<{ chosen: boolean }>`
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
