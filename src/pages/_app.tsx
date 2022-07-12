import { ThemeProvider } from '@emotion/react';
import { AppProps } from 'next/app';
import React, { useRef } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { RecoilRoot } from 'recoil';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import Layout from '../components/layout/Layout';
import { darkTheme } from '../theme';
import GlobalStyle from '../theme/globalStyle';

if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
  require('../mocks');
}

dayjs.locale('ko');

function App({ Component, pageProps }: AppProps) {
  const queryClient = useRef(
    new QueryClient({
      defaultOptions: {
        queries: {
          suspense: true,
        },
      },
    })
  );

  return (
    <>
      <GlobalStyle />
      <QueryClientProvider client={queryClient.current}>
        <Hydrate state={pageProps.dehydratedState}>
          <RecoilRoot>
            <ThemeProvider theme={darkTheme}>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </ThemeProvider>
          </RecoilRoot>
        </Hydrate>
        <ReactQueryDevtools position="bottom-right" />
      </QueryClientProvider>
    </>
  );
}

export default App;
