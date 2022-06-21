import styled from '@emotion/styled';

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  padding: 14px 16px;
  background: ${(props) => props.theme.color.SURFACE};
`;

export const Nav = styled.nav`
  display: flex;
  gap: 24px;
`;