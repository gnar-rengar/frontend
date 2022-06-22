import styled from '@emotion/styled';

import type { TypographyProps } from './Typography';

type StyledTypographyProps = Pick<TypographyProps, 'variant' | 'align' | 'nowrap' | 'margin'>;

export const StyledTypography = styled.div<StyledTypographyProps>`
  align: ${(props) => props.align};
  nowrap: ${(props) => props.nowrap};
  margin-bottom: ${(props) => props.margin}px;
  ${(props) => {
    const { typography } = props.theme;
    const variant = typography[props.variant];

    return `
      font-size: ${variant.fontSize};
      font-weight: ${variant.fontWeight};
      line-height: ${variant.lineHeight};
    `;
  }}
`;
