import styled from '@emotion/styled';

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${({ theme }) => theme.header.height};
  padding: 9px 16px;
  background: ${({ theme }) => theme.color.surface};
  z-index: 50;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const TextWrapper = styled.div`
  padding: 10px 6px;
`;

export const IconWrapper = styled.div`
  padding: 8px;
`;
