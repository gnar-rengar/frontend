import styled from '@emotion/styled';

interface InputProps {
  error?: boolean;
  active?: boolean;
}

export const Input = styled.input<InputProps>`
  height: 48px;
  width: 230px;
  padding: 14px 16px;
  background: inherit;
  border-radius: 8px;
  outline: none;
  font-size: ${(props) => props.theme.typography.body4.fontSize};

  ${(props) => {
    const {
      theme: { color },
      error,
      active,
    } = props;

    if (error) {
      return `
        border: 1px solid ${color.error};
        color: ${color.error};
      `;
    }
    if (active) {
      return `
        border: 1px solid ${color.primary};
        color: ${color.onBackground};
      `;
    }
    return `
      border: 1px solid ${color.onBackgroundSub};
      color: ${color.onBackgroundSub};

      &: focus {
        border: 1px solid ${color.primary};
        color: ${color.onBackground};
      `;
  }}
`;
