import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const StyledChip = styled.span<{ chosen: boolean }>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 5px 14px;
  height: 30px;
  border-radius: 100px;

  ${({ theme, chosen }) => {
    const { color } = theme;

    if (chosen) {
      return css`
        background: ${color.PRIMARY_VARIANT};
        border: 1px solid ${color.PRIMARY_VARIANT};
        color: ${color.ON_PRIMARY};
      `;
    }
    return css`
      background: inherit;
      border: 1px solid ${color.SUB_ON_BACKGROUND};
      color: ${color.SUB_ON_BACKGROUND};
    `;
  }}
`;
