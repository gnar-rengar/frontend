import { GetServerSideProps } from 'next';
import React from 'react';
import LoadingSuspense from '../../components/common/loadingSuspense';
import UserProfile from '../../components/profile';

interface UserProfilePageProps {
  userId: string;
}

function UserProfilePage({ userId }: UserProfilePageProps) {
  return (
    <LoadingSuspense>
      <UserProfile userId={userId} />
    </LoadingSuspense>
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
