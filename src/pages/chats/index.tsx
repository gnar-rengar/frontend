import React from 'react';
import LoadingSuspense from '../../components/common/loadingSuspense';
import Chats from '../../components/chats';
import InValid from '../../components/chats/InValid';
import { preFetchAuth } from '../../hooks/preFetchAuth';

function ChatsPage({ isAuth }: { isAuth: boolean }) {
  if (!isAuth) {
    return (
      <InValid title={'로그인 후\n채팅 목록을 확인해보세요!'} path="/login" buttonText="로그인" />
    );
  }
  return (
    <LoadingSuspense>
      <Chats />
    </LoadingSuspense>
  );
}

export default ChatsPage;

// const fetchIfAuth =
//   (fetcher: (context: GetServerSidePropsContext) => any) =>
//   async (context: GetServerSidePropsContext) => {
//     const { token } = context.req.cookies;
//     if (!token) return { props: {} };

//     return fetcher(context);
//   };

// const fetcher = async (context: GetServerSidePropsContext) => {
//   axios.defaults.headers.common.Cookie = context.req.headers.cookie;
//   const userData = await authUserGetAPI();
//   return {
//     props: { userData },
//   };
// };

// export const getServerSideProps = fetchIfAuth(fetcher);

export const getServerSideProps = preFetchAuth;
