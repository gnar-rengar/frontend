import styled from '@emotion/styled';

import type { TypographyProps } from './Typography';

type StyledTypographyProps = Pick<TypographyProps, 'variant' | 'align' | 'nowrap'>;

export const StyledTypography = styled.div<StyledTypographyProps>`
  ${(props) => {
    const { typography } = props.theme;
    const variant = typography[props.variant];

    return `
      align: ${props.align};
      white-space: ${props.nowrap && 'nowrap'};
      font-size: ${variant.fontSize};
      font-weight: ${variant.fontWeight};
      line-height: ${variant.lineHeight};
    `;
  }}
`;
