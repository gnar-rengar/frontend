import { css, Global } from '@emotion/react';
import reset from 'emotion-reset';
import React from 'react';

function GlobalStyle() {
  return (
    <Global
      styles={css`
        ${reset} html, body, #__next {
          margin: 0;
          padding: 0;
          height: 100%;
        }
        * {
          box-sizing: border-box;
          -moz-user-select: text;
          -webkit-user-select: text;
          -ms-user-select: text;
          user-select: text;
        }
        body {
          overflow-x: hidden;
          width: 100%;
          font-family: 'Pretendard Variable', notokr, 'Nanum Gothic', 'Malgun Gothic', sans-serif;
          background: black;
        }
        a {
          text-decoration: none;
          outline: none;
          color: inherit;
        }
        a:visited {
          text-decoration: none;
          color: inherit;
        }
      `}
    />
  );
}

export default GlobalStyle;
