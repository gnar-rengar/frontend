import React from 'react';
import { GetServerSideProps } from 'next';

import axios from 'axios';
import { dehydrate, QueryClient, useQuery } from 'react-query';

// eslint-disable-next-line import/no-named-default
import { default as MyPageComponent } from '../components/mypage';

const fetchMyPage = async () => {
  const { data } = await axios.get('https://api.duo-duo/users/mypage');
  return data;
};

function MyPage() {
  const { data } = useQuery('mypage', fetchMyPage);

  if (!data) return <div>loading...</div>;

  if (data) return <MyPageComponent data={data} />;
}

export default MyPage;

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery('mypage', fetchMyPage);

  return {
    props: {
      dehydrateState: dehydrate(queryClient),
    },
  };
};
