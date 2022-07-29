import React from 'react';
import useGetMatchHistory from '../../hooks/useGetMatchHistory';
import { Asking, BaseContainer } from '../common';
import MatchCard from '../profile/MatchCard';

import { MatchCardContainer } from '../profile/style';

function MatchHistory({ userId }: { userId: string }) {
  const { recentRecord } = useGetMatchHistory(userId);

  return (
    <BaseContainer>
      <Asking title="고수달님의 최근 전적">
        <MatchCardContainer>
          {recentRecord.map((record) => (
            <MatchCard matchData={record} />
          ))}
        </MatchCardContainer>
      </Asking>
    </BaseContainer>
  );
}

export default MatchHistory;
