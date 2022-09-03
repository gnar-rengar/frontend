import { GetServerSideProps } from 'next';
import React from 'react';
import ReviewWrite from '../../components/reviewWrite';
import { preFetchAuth } from '../../hooks/preFetchFns';

interface ReviewWritePageProps {
  userId: string;
  lolNickname: string;
}

function ReviewWritePage(props: ReviewWritePageProps) {
  return <ReviewWrite {...props} />;
}

export default ReviewWritePage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  await preFetchAuth(context);
  const { userId, lolNickname } = context.query;
  return {
    props: {
      userId,
      lolNickname,
    },
  };
};
