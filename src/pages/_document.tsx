import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script src="https://developers.kakao.com/sdk/js/kakao.js" />
          <script async src="https://tally.so/widgets/embed.js" />
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4220281451052822"
            crossOrigin="anonymous"
          />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-MFWV002LGZ" />
          <script
            // eslint-disable-next-line
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-MFWV002LGZ', {
                page_path: window.location.pathname,
              });`,
            }}
          />
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="author" content="duohaeduo" />
          <meta name="description" content="내 플레이 맞춤 기반 롤 듀오 매칭 서비스" />
          <meta property="og:title" content="찰떡 궁합 듀오 매칭, 듀오해듀오" />
          <meta
            property="og:description"
            content="소환사님을 기다리고 있어요! 나랑 롤 듀오, 해듀오?"
          />
          <meta property="og:url" content="https://duoduo.lol" />
          <meta
            property="og:image"
            content="https://duoplz.s3.ap-northeast-2.amazonaws.com/logo.png"
          />
          <link rel="icon" href="/favicon.jpg" />
          <link rel="canonical" href="https://duoduo.lol" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
