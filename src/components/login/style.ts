import styled from '@emotion/styled';
import { ColorVariant } from '../../types/theme.type';

export const LoginContainer = styled.div`
  width: 100%;
  height: 100vh;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const LoginSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 48px;
`;

export const LoginButton = styled.button<{ color: ColorVariant }>`
  max-width: 480px;
  width: 100%;
  height: 48px;
  background-color: ${({ color, theme }) => theme.color[color]};
  border: 1px solid ${({ color, theme }) => theme.color[color]};
  border-radius: 12px;
  cursor: pointer;
`;

export const IconAndTextContainer = styled.div<{ color: ColorVariant }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;
