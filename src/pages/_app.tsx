import { ThemeProvider } from '@emotion/react';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import React, { ReactElement, useRef } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import { RecoilRoot } from 'recoil';
import Layout from '../components/layout/Layout';
import SocketProvider from '../contexts/socket';
import { darkTheme } from '../theme';
import GlobalStyle from '../theme/globalStyle';
import Header from '../components/layout/header/Header';

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
  const getLayout =
    Component.getLayout || ((page: React.ReactNode) => <Layout header={<Header />}>{page}</Layout>);
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
            <SocketProvider>
              <ThemeProvider theme={darkTheme}>
                {getLayout(<Component {...pageProps} />)}
              </ThemeProvider>
            </SocketProvider>
          </RecoilRoot>
        </Hydrate>
        <ReactQueryDevtools position="bottom-right" />
      </QueryClientProvider>
    </>
  );
}

export default App;
