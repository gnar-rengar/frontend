import React, { Suspense } from 'react';
import { GetServerSideProps } from 'next';
import { dehydrate, QueryClient } from 'react-query';
import { axios } from '../../axios';
import MatchHistory from '../../components/matchHistory';

interface MatchHistoryPageProps {
  userId: string;
}

function MatchHistoryPage({ userId }: MatchHistoryPageProps) {
  return (
    <Suspense fallback="loading">
      <MatchHistory userId={userId} />
    </Suspense>
  );
}

export default MatchHistoryPage;

const fetchMatchHistory = async (userId: string) => {
  const { data } = await axios.get(`user/recentRecord/${userId}`);
  return data;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { userId } = context.query;
  // const queryClient = new QueryClient();

  // await queryClient.prefetchInfiniteQuery(
  //   ['matchHistory', userId],
  //   ({ pageParam = 0 }) => fetchMatchHistory(userId, pageParam),
  //   {
  //     getNextPageParam: (lastPage) => lastPage.nextPage,
  //   }
  // );

  return {
    props: {
      userId,
      // dehydratedState: dehydrate(queryClient),
    },
  };
};
