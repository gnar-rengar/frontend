import { useTheme } from '@emotion/react';
import React from 'react';
import { StyledTypography } from './Typography.style';

import type { ColorVariant, TypographyVariant } from '../../../types/theme.type';

export interface TypographyProps {
  variant?: TypographyVariant;
  align?: 'center' | 'left' | 'right' | 'inherit';
  color?: ColorVariant;
  margin?: string;
  paragraph?: boolean;
  component?: 'div' | 'span';
  space?: string;
  isLineHeight?: boolean;
  children: React.ReactNode;
}

function Typography(props: TypographyProps) {
  const { children, variant, paragraph, component, isLineHeight = true, ...other } = props;

  const theme = useTheme();

  const elementType = theme.typography[variant].element;

  return (
    <StyledTypography as={component} {...{ ...other, variant, isLineHeight }}>
      {paragraph ? React.createElement(elementType, {}, children) : children}
    </StyledTypography>
  );
}

Typography.defaultProps = {
  variant: 'body1',
};

export default Typography;
