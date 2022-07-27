import { GetServerSideProps } from 'next';
import React, { Suspense } from 'react';
import ReviewWrite from '../../components/reviewWrite';

function ReviewWritePage() {
  return (
    <Suspense fallback="...loading">
      <ReviewWrite />
    </Suspense>
  );
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
