import { GetServerSideProps } from 'next';
import React from 'react';
import LoadingSuspense from '../../components/common/loadingSuspense';
import UserProfile from '../../components/profile';
import WithAuth from '../../components/WithAuth';
import { preFetchAuth } from '../../hooks/preFetchFns';

interface UserProfilePageProps {
  userId: string;
  isAuth: boolean;
}

function UserProfilePage(props: UserProfilePageProps) {
  const { userId, isAuth } = props;
  return (
    <LoadingSuspense>
      <UserProfile userId={userId} isAuth={isAuth} />
    </LoadingSuspense>
  );
}

export default WithAuth(UserProfilePage);

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { props } = await preFetchAuth(context);
  const { userId } = context.query;
  return {
    props: {
      userId,
      ...props,
    },
  };
};
