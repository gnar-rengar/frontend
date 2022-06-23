import styled from '@emotion/styled';

export const Input = styled.input<{ error?: boolean }>`
  height: 48px;
  width: 296px;
  padding: 14px 16px;
  background: inherit;
  border-radius: 8px;
  outline: none;
  font-size: ${(props) => props.theme.typography.body4.fontSize};

  ${(props) => {
    const {
      theme: { color },
      error,
    } = props;

    if (error) {
      return `
        border: 1px solid ${color.error};
        color: ${color.error};
      `;
    }
    return `
      border: 1px solid ${color.onBackgroundSub};
      color: ${color.onBackgroundSub};

      &: focus {
        border: 1px solid ${color.primary};
        color: ${color.onBackground} ;
      `;
  }}
`;
