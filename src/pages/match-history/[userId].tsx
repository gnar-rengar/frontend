import React, { Suspense } from 'react';
import { GetServerSideProps } from 'next';
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { userId } = context.query;
  return {
    props: {
      userId,
    },
  };
};
