import Head from 'next/head';
import React, { ReactElement } from 'react';
import Layout from '../components/layout/Layout';
import TendencyTest from '../components/tendencyTest';

function TendencyTestPage() {
  return (
    <>
      <Head>
        <meta property="og:title" content="나의 롤 플레이 스타일은?" />
        <meta
          property="og:description"
          content="듀오해듀오에서 플레이 스타일 테스트하고, 맞춤 듀오 추천받자!"
        />
        <meta property="og:url" content="https://duoduo.lol/tendency-test" />
        <meta
          property="og:image"
          content="https://duoplz.s3.ap-northeast-2.amazonaws.com/share.png"
        />
      </Head>
      <TendencyTest />
    </>
  );
}

export default TendencyTestPage;

TendencyTestPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout header={false}>{page}</Layout>;
};
