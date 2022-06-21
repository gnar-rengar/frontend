import styled from '@emotion/styled';

import type { TypographyProps } from './Typography';

type StyledTypographyProps = Pick<TypographyProps, 'variant' | 'align' | 'nowrap'>;

export const StyledTypography = styled.div<StyledTypographyProps>`
  align: ${(props) => props.align};
  nowrap: ${(props) => props.nowrap};
  margin-bottom: ${(props) => props.theme.margin.base};
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
