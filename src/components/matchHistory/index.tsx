import React from 'react';
import useGetMatchHistory from '../../hooks/useGetMatchHistory';
import useGetProfile from '../../hooks/useGetProfile';
import { Asking, BaseContainer, Button } from '../common';
import MatchCard from '../profile/MatchCard';

import { MatchCardContainer } from '../profile/style';

function MatchHistory({ userId }: { userId: string }) {
  const {
    data: { pages },
    fetchNextPage,
  } = useGetMatchHistory(userId);

  const { lolNickname } = useGetProfile(userId);

  return (
    <BaseContainer>
      <Asking title={`${lolNickname}님의 최근 전적`}>
        <MatchCardContainer>
          {pages.map((page) =>
            page.data.recentRecord.map((matchData) => <MatchCard matchData={matchData} />)
          )}
        </MatchCardContainer>
      </Asking>
      <Button variant="outlined" size="lg" color="onBackground" onClick={() => fetchNextPage()}>
        더보기
      </Button>
    </BaseContainer>
  );
}

export default MatchHistory;
