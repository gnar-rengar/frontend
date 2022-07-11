import React, { memo } from 'react';
import Image from 'next/image';
import { useTheme } from '@emotion/react';
import Link from 'next/link';
import useGetMatchHistory from '../../hooks/useGetMatchHistory';

import MatchCard from './MatchCard';
import { Typography } from '../common';

import { MatchCardContainer, MatchSectionTitle, Section } from './style';

interface MatchSectionProps {
  userId: string;
}

function MatchSection({ userId }: MatchSectionProps) {
  const {
    icon: {
      size: { sm },
    },
  } = useTheme();

  const { data } = useGetMatchHistory(userId);

  const { recentRecord } = data.pages[0].data;

  return (
    <Section>
      <MatchSectionTitle>
        <Typography variant="h3">최근 전적을 확인해보세요</Typography>
        <div style={{ display: 'flex' }}>
          <Link href={`/match-history/${userId}`}>
            <a>
              <Typography variant="caption">더보기</Typography>
            </a>
          </Link>
          <Image src="/icons/chevron-right.svg" width={sm} height={sm} />
        </div>
      </MatchSectionTitle>
      <MatchCardContainer>
        {recentRecord.slice(0, 3).map((matchData) => (
          <MatchCard matchData={matchData} />
        ))}
      </MatchCardContainer>
    </Section>
  );
}

export default memo(MatchSection);
