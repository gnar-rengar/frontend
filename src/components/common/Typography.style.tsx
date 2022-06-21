import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const StyledTypography = styled.div<{
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'body1' | 'body2' | 'body3' | 'body4' | 'caption';
  align?: string;
  nowrap?: boolean;
}>`
  align: ${(props) => props.align};
  nowrap: ${(props) => props.nowrap};
  ${(props) => {
    const { typography } = props.theme;
    const variant = typography[props.variant];

    return css`
      font-size: ${variant.fontSize};
      font-weight: ${variant.fontWeight};
      line-height: ${variant.lineHeight};
    `;
  }}
`;
