import styled from '@emotion/styled';

export const Label = styled.label`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-size: 22px;
  user-select: none;
`;

export const Input = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;

  &: checked + span {
    border: 1px solid ${({ theme }) => theme.color.primaryVariant};
  }

  &: checked + span::before {
    background: ${({ theme }) => theme.color.primaryVariant};
  }
`;

export const Mark = styled.span`
  position: relative;
  width: 13.75px;
  height: 13.75px;
  border: 1px solid ${({ theme }) => theme.color.onBackground};

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8px;
    height: 8px;
  }
`;
