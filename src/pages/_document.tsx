import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script src="https://developers.kakao.com/sdk/js/kakao.js" />
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="author" content="duohaeduo" />
          <meta property="og:title" content="찰떡 궁합 듀오 매칭, 듀오해듀오" />
          <meta
            property="og:description"
            content="소환사님을 기다리고 있어요! 나랑 롤 듀오, 해듀오?"
          />
          <meta property="og:url" content="https://duoduo.lol" />
          <meta
            property="og:image"
            content="https://duoplz.s3.ap-northeast-2.amazonaws.com/kakaoShare.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
