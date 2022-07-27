import { GetServerSideProps } from 'next';
import React from 'react';
import ReviewWrite from '../../components/reviewWrite';

interface ReviewWritePageProps {
  userId: string;
}

function ReviewWritePage({ userId }: ReviewWritePageProps) {
  return <ReviewWrite userId={userId} />;
}

export default ReviewWritePage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { userId } = context.query;
  return {
    props: {
      userId,
    },
  };
};
