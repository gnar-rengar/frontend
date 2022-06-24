import styled from '@emotion/styled';

import type { TypographyProps } from './Typography';

type StyledTypographyProps = Omit<TypographyProps, 'children'>;

export const StyledTypography = styled.div<StyledTypographyProps>`
  ${(props) => {
    const { typography, color } = props.theme;
    const variant = typography[props.variant];

    return `
<<<<<<< HEAD:src/components/common/typography/Typography.style.tsx
      color: ${color[props.color]};
=======
>>>>>>> ed3b207 (UDFM-17 - 추가된 공통 아이콘 업데이트 (#24)):src/components/common/Typography.style.tsx
      align: ${props.align};
      white-space: ${props.nowrap && 'nowrap'};
      font-size: ${variant.fontSize};
      font-weight: ${variant.fontWeight};
      line-height: ${variant.lineHeight};
      margin-bottom: ${props.margin}px;
    `;
  }}
`;
