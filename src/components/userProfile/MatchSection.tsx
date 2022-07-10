import React, { memo } from 'react';
import Image from 'next/image';
import { useTheme } from '@emotion/react';
import useGetMatchHistory from '../../hooks/useGetMatchHistory';

import MatchCard from './MatchCard';
import { Typography } from '../common';
import { MatchCardContainer } from './style';

interface MatchSectionProps {
  userId: string;
}

function MatchSection({ userId }: MatchSectionProps) {
  const {
    icon: {
      size: { sm },
    },
  } = useTheme();

  const { recentRecord } = useGetMatchHistory(userId);

  return (
    <section>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '16px',
        }}
      >
        <Typography variant="h3">최근 전적을 확인해보세요</Typography>
        <div style={{ display: 'flex' }}>
          <Typography variant="caption">더보기</Typography>
          <Image src="/icons/chevron-right.svg" width={sm} height={sm} />
        </div>
      </div>
      <MatchCardContainer>
        {recentRecord.map((matchData) => (
          <MatchCard matchData={matchData} />
        ))}
      </MatchCardContainer>
    </section>
  );
}

export default memo(MatchSection);
