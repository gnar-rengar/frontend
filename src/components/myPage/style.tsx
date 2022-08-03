import styled from '@emotion/styled';

export const ProfileCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 0;
  gap: 16px;
  cursor: pointer;
`;

export const AreaButton = styled.button`
  padding: 16px 0;
  width: 100%;
  background: inherit;
  border: none;
  color: ${({ theme: { color } }) => color.onBackgroundSub};
  text-align: left;
  cursor: pointer;
`;
