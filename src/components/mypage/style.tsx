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
  padding: 6px 12px;
  width: fit-content;
  background: ${({ theme }) => theme.color.surface};
  gap: 8px;
  border-radius: 16px;
`;

export const FeedbackContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
