import React from 'react';
import { GetServerSideProps } from 'next';
import MatchHistory from '../../components/matchHistory';
import LoadingSuspense from '../../components/common/loading-suspense';

interface MatchHistoryPageProps {
  userId: string;
}

function MatchHistoryPage({ userId }: MatchHistoryPageProps) {
  return (
    <LoadingSuspense>
      <MatchHistory userId={userId} />
    </LoadingSuspense>
  );
}

export default MatchHistoryPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { userId } = context.query;
  return {
    props: {
      userId,
    },
  };
};
