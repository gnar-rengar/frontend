import { useTheme } from '@emotion/react';
import React from 'react';
import { StyledTypography } from './Typography.style';

<<<<<<< HEAD:src/components/common/Typography.tsx
import type { TypographyVariant } from '../../types/typography.type';
import { ColorVariant } from '../../types/color.type';
=======
import type { TypographyVariant } from '../../../types/typography.type';
import type { ColorVariant } from '../../../types/color.type';
>>>>>>> 40f8fee (UDFM-24 - 프론트엔드 마이 페이지 (#27)):src/components/common/typography/Typography.tsx

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
