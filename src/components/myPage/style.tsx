import styled from '@emotion/styled';

export const ProfileCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 0;
  gap: 16px;
`;

export const StyledFeedback = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const AreaButton = styled.button`
  width: 100%;
  background: inherit;
  border: none;
  color: ${({ theme: { color } }) => color.onBackgroundSub};
  text-align: left;
  cursor: pointer;
`;
