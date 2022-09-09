import styled from '@emotion/styled';

export const ToggleContainer = styled.div<{ on: boolean }>`
  display: flex;
  width: 44px;
  height: 26px;
  padding: 2px;
  border-radius: 20px;
  ${(props) => {
    const { on, theme } = props;

    if (on) {
      return `
        justify-content: right;
        background: ${theme.color.primaryVariant};
      `;
    }

    return `
      justify-content: left;
      background: ${theme.color.disable};
    `;
  }}
`;

export const Circle = styled.div`
  width: 22px;
  height: 22px;
  background: white;
  border-radius: 50%;
`;
