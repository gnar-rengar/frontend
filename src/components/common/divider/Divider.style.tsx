import styled from '@emotion/styled';
import type { DividerProps } from './Divider';

export const Hr = styled.hr<DividerProps>`
  ${({ theme, color, width }) => {
    const lineColor = theme.color[color];

    return `
      margin: 0;
      width: ${width};
      color: ${lineColor};
      background-color: ${lineColor};
      border-color: ${lineColor};
  `;
  }};
`;
