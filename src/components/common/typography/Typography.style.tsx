import styled from '@emotion/styled';

import type { TypographyProps } from './Typography';

type StyledTypographyProps = Omit<TypographyProps, 'children'>;

export const StyledTypography = styled.div<StyledTypographyProps>`
  ${(props) => {
    const { typography, color } = props.theme;
    const variant = typography[props.variant];
    const { isLineHeight } = props;

    return `
      color: ${color[props.color]};
      text-align: ${props.align};
      white-space: ${props.space};
      font-size: ${variant.fontSize};
      font-weight: ${variant.fontWeight};
      line-height: ${isLineHeight && variant.lineHeight};
      margin-bottom: ${props.margin}px;
    `;
  }}
`;
