import Link from 'next/link';
import React from 'react';
import Typography from '../typography/Typography';
import { FooterContainer, InfoKoreanCotainer, LinkContainer } from './Footer.style';

function Footer() {
  return (
    <FooterContainer>
      <InfoKoreanCotainer>
        <Typography variant="captionBold">선데이유니크</Typography>
        <Typography variant="caption">
          대표 신동영 | 사업자등록번호 677-12-01869
          <br />
          경기도 시흥시 봉우재로 11번길 24, 1층 101호
          <br />
          cs@duoduo.gg
        </Typography>
      </InfoKoreanCotainer>
      <Typography variant="caption">
        © 2022 DUODUO was created under Riot Games&#39; &quot;Legal Jibber Jabber&quot; policy using
        assets owned by Riot Games. Riot Games does not endorse or sponsor this project.
      </Typography>
      <LinkContainer>
        <Typography variant="captionBold">
          <Link href="/my-page">
            <a className="underline">개인정보처리방침</a>
          </Link>
        </Typography>
        <Typography variant="caption">
          <Link href="/my-page">
            <a className="underline">이용약관</a>
          </Link>
        </Typography>
      </LinkContainer>
    </FooterContainer>
  );
}

export default Footer;
