import styled from '@emotion/styled';

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 16px;
  width: 343px;
  height: 202px;
  background: ${({ theme: { color } }) => color.surface};
  border-radius: 16px;
`;

export const Top = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Ul = styled.ul`
  display: flex;
  gap: 8px;
`;

export const TierLi = styled.li`
  padding: 2px 4px;
  border: 0.5px solid ${({ theme }) => theme.color.onSurface};
`;

export const Img = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;

export const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
