import { useTheme } from '@emotion/react';
import React from 'react';
import { StyledTypography } from './Typography.style';

import type { TypographyVariant } from '../../types/typography.type';
import type { ColorVariant } from '../../types/color.type';

export interface TypographyProps {
  variant?: TypographyVariant;
  align?: 'center' | 'left' | 'right' | 'inherit';
  nowrap?: boolean;
  children: React.ReactNode;
  margin?: string;
  color?: ColorVariant;
}

function Typography(props: TypographyProps) {
  const { children, variant, ...other } = props;

  const theme = useTheme();

  const elementType = theme.typography[variant].element;

  return (
    <StyledTypography {...{ ...other, variant }}>
      {React.createElement(elementType, {}, children)}
    </StyledTypography>
  );
}

Typography.defaultProps = {
  variant: 'body1',
  nowrap: false,
};

export default Typography;
