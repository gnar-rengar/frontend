import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const StyledChip = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 14px;
  width: 65px;
  height: 30px;

  ${({ theme: { color } }) => css`
    background: ${color.PRIMARY_VARIANT};
    border: 1px solid ${color.PRIMARY_VARIANT};
    border-radius: 100px;
    color: ${color.ON_PRIMARY};
  `}
`;
