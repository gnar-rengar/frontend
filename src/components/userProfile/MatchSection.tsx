import React from 'react';
import Image from 'next/image';
import { useTheme } from '@emotion/react';
import MatchCard from './MatchCard';
import { Typography } from '../common';
import useGetMatchHistory from '../../hooks/useGetMatchHistory';

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
    <section style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '16px 0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h3">최근 전적은 아래와 같아요</Typography>
        <div style={{ display: 'flex' }}>
          <Typography variant="caption">더보기</Typography>
          <Image src="/icons/chevron-right.svg" width={sm} height={sm} />
        </div>
      </div>
      {recentRecord.map((matchData) => (
        <MatchCard matchData={matchData} />
      ))}
    </section>
  );
}

export default MatchSection;
