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
