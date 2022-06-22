import styled from '@emotion/styled';

import type { ButtonProps } from './Button';

type StyledButtonProps = Pick<ButtonProps, 'color' | 'variant' | 'disabled'>;

export const StyledButton = styled.button<StyledButtonProps>`
  width: 345px;
  height: 48px;
  border-radius: 16px;
  cursor: pointer;

  border: 1.5px solid ${({ color, theme }) => theme.color[color]};
`;
