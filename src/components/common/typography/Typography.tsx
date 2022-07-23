import { useTheme } from '@emotion/react';
import React from 'react';
import { StyledTypography } from './Typography.style';

import type { ColorVariant, TypographyVariant } from '../../../types/theme.type';

export interface TypographyProps {
  variant?: TypographyVariant;
  align?: 'center' | 'left' | 'right' | 'inherit';
  color?: ColorVariant;
  mb?: number;
  paragraph?: boolean;
  component?: 'div' | 'span';
  whiteSpace?: string;
  children: React.ReactNode;
}

function Typography(props: TypographyProps) {
  const { children, variant, paragraph, component, ...other } = props;

  const theme = useTheme();

  const elementType = theme.typography[variant].element;

  return (
    <StyledTypography as={component} {...{ ...other, variant }}>
      {paragraph ? React.createElement(elementType, {}, children) : children}
    </StyledTypography>
  );
}

Typography.defaultProps = {
  variant: 'body1',
};

export default Typography;
