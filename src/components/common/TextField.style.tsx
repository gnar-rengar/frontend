import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const InputWrapper = styled.div``;

export const Input = styled.input<{ error?: boolean }>`
  height: 48px;
  width: 296px;
  padding: 14px 16px;
  background: inherit;
  border-radius: 8px;
  outline: none;

  ${(props) => {
    const { color } = props.theme;

    if (props.error) {
      return css`
        border: 1px solid ${color.ERROR};
        color: ${color.ERROR};
      `;
    }
    return css`
      border: 1px solid ${color.SUB_ON_BACKGROUND};
      color: ${color.SUB_ON_BACKGROUND};

      &: focus {
        border: 1px solid ${color.PRIMARY};
        color: ${color.ON_BACKGROUND} ;
      `;
  }}
`;
