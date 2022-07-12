import React from 'react';
import useGetMatchHistory from '../../hooks/useGetMatchHistory';
import { Asking, BaseContainer, Button } from '../common';
import MatchCard from '../userProfile/MatchCard';

import { MatchCardContainer } from '../userProfile/style';

function MatchHistory({ userId }: { userId: string }) {
  const {
    data: { pages },
    fetchNextPage,
  } = useGetMatchHistory(userId);

  return (
    <BaseContainer>
      <Asking title="고수달님의 최근 전적">
        <MatchCardContainer>
          {pages.map((page) =>
            page.data.recentRecord.map((matchData) => <MatchCard matchData={matchData} />)
          )}
        </MatchCardContainer>
        <Button variant="outlined" size="lg" color="onBackground" onClick={() => fetchNextPage()}>
          더보기
        </Button>
      </Asking>
    </BaseContainer>
  );
}

export default MatchHistory;
