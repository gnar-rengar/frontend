import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FooterContainer = styled(Container)`
  padding: 64px 0;
  gap: 16px;
`;

export const InfoKoreanCotainer = styled(Container)`
  gap: 4px;
`;

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const UnderLineLink = styled.a`
  text-decoration: underline;
`;
