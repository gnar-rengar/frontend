import styled from '@emotion/styled';

import type { TypographyProps } from './Typography';

type StyledTypographyProps = Omit<TypographyProps, 'children'>;

export const StyledTypography = styled.div<StyledTypographyProps>`
  ${(props) => {
    const { typography, color } = props.theme;
    const variant = typography[props.variant];

    return `
      color: ${color[props.color]};
      align: ${props.align};
      white-space: ${props.nowrap && 'nowrap'};
      font-size: ${variant.fontSize};
      font-weight: ${variant.fontWeight};
      line-height: ${variant.lineHeight};
      margin-bottom: ${props.margin}px;
    `;
  }}
`;