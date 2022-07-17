import styled from '@emotion/styled';

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${({ theme }) => theme.header.height};
  padding: 14px 16px;
  background: ${({ theme }) => theme.color.surface};
  z-index: 10;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 18px;
`;
