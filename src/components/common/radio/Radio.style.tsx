import styled from '@emotion/styled';

export const Label = styled.label`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
  cursor: pointer;
  user-select: none;
`;

export const InputWrapper = styled.div`
  height: 20px;
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;

  &: checked + span {
    border: 1px solid ${({ theme }) => theme.color.primary};
  }

  &: checked + span::before {
    background: ${({ theme }) => theme.color.primary};
  }
`;

export const Mark = styled.span`
  position: relative;
  width: 16px;
  height: 16px;
  border: 1px solid ${({ theme }) => theme.color.onBackground};
  border-radius: 50%;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }
`;
