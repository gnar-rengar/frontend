import { GetServerSideProps } from 'next';
import React, { Suspense } from 'react';
import UserProfile from '../../components/profile';

interface UserProfilePageProps {
  userId: string;
}

function UserProfilePage({ userId }: UserProfilePageProps) {
  return (
    <Suspense fallback="loading">
      <UserProfile userId={userId} />
    </Suspense>
  );
}

export default UserProfilePage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { userId } = context.query;
  return {
    props: {
      userId,
    },
  };
};
