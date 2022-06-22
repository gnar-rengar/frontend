import { useTheme } from '@emotion/react';
import React from 'react';
import { StyledTypography } from './Typography.style';

interface TypographyProps {
  align?: 'center' | 'left' | 'right' | 'inherit';
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'body1' | 'body2' | 'body3' | 'body4' | 'caption';
  nowrap?: boolean;
  children: string | number;
}

function Typography(props: TypographyProps) {
  const { children, variant, ...other } = props;

  const theme = useTheme();

  const elementType = theme.typography[variant].element;

  return (
    <StyledTypography {...{ other, variant }}>
      {React.createElement(elementType, {}, children)}
    </StyledTypography>
  );
}

Typography.defaultProps = {
  variant: 'body1',
  nowrap: false,
};
export default Typography;
