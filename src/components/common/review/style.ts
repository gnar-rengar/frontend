import styled from '@emotion/styled';

export const StyledReview = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
  padding: 6px 12px;
  background: ${({ theme: { color } }) => color.surface};
  border-radius: 16px;
`;

export const PeopleCount = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
