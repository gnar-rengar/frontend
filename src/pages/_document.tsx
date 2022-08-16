import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script src="https://developers.kakao.com/sdk/js/kakao.js" />
          <Script
            dangerouslySetInnerHTML={{
              __html: `function(){window.smartlook||(function(d) {
                var o=smartlook=function(){ o.api.push(arguments)},h=d.getElementsByTagName('head')[0];
                var c=d.createElement('script');o.api=new Array();c.async=true;c.type='text/javascript';
                c.charset='utf-8';c.src='https://web-sdk.smartlook.com/recorder.js';h.appendChild(c);
                })(document);
                smartlook('init', '4257bcee6edac11202e8c6cc038575b88a131090', { region: 'eu' });}()`,
            }}
          />
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
            content="https://duoplz.s3.ap-northeast-2.amazonaws.com/logo.png"
          />
          <link rel="icon" href="/favicon.jpg" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
