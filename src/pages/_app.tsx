import { ThemeProvider } from '@emotion/react';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import Head from 'next/head';
import React, { ReactElement, useRef } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { RecoilRoot } from 'recoil';
import Layout from '../components/layout/Layout';
import SocketProvider from '../contexts/socket';
import { darkTheme } from '../theme';
import GlobalStyle from '../theme/globalStyle';
import ErrorBoundary from '../components/ErrorBoundary';

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

// if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
//   require('../mocks');
// }

dayjs.locale('ko');

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page: React.ReactNode) => <Layout>{page}</Layout>);
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
      <Head>
        <title>듀오해듀오</title>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=5.0,user-scalable=yes,viewport-fit=cover"
        />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={darkTheme}>
        <ErrorBoundary>
          <QueryClientProvider client={queryClient.current}>
            <Hydrate state={pageProps.dehydratedState}>
              <RecoilRoot>
                <SocketProvider>{getLayout(<Component {...pageProps} />)}</SocketProvider>
              </RecoilRoot>
            </Hydrate>
            <ReactQueryDevtools position="bottom-right" />
          </QueryClientProvider>
        </ErrorBoundary>
      </ThemeProvider>
    </>
  );
}

export default App;
