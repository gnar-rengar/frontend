import Link from 'next/link';
import React from 'react';
import Typography from '../typography/Typography';
import { FooterContainer, LinkContainer, UnderLineLink } from './Footer.style';

function Footer() {
  return (
    <FooterContainer>
      {/* <InfoKoreanCotainer>
        <Typography variant="captionBold">선데이유니크</Typography>
        <Typography variant="captionRegular">
          대표 신동영 | 사업자등록번호 677-12-01869
          <br />
          경기도 시흥시 봉우재로 11번길 24, 1층 101호
          <br />
          duohaeduo@gmail.com
        </Typography>
      </InfoKoreanCotainer> */}
      <Typography variant="captionRegular">
        © 2022 DUODUO was created under Riot Games&#39; &quot;Legal Jibber Jabber&quot; policy using
        assets owned by Riot Games. Riot Games does not endorse or sponsor this project.
      </Typography>
      <LinkContainer>
        <Typography variant="captionBold">
          <Link href="/policy/privacy">
            <UnderLineLink>개인정보처리방침</UnderLineLink>
          </Link>
        </Typography>
        <Typography variant="captionRegular">
          <Link href="/policy/service">
            <UnderLineLink>이용약관</UnderLineLink>
          </Link>
        </Typography>
      </LinkContainer>
    </FooterContainer>
  );
}

export default Footer;
