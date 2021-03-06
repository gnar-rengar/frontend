import React, { ReactElement, useRef } from 'react';
import { ThemeProvider } from '@emotion/react';
import { AppProps } from 'next/app';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { RecoilRoot } from 'recoil';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';

import { NextPage } from 'next';
import Layout from '../components/layout/Layout';
import { darkTheme } from '../theme';
import GlobalStyle from '../theme/globalStyle';

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
  require('../mocks');
}

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
      <GlobalStyle />
      <QueryClientProvider client={queryClient.current}>
        <Hydrate state={pageProps.dehydratedState}>
          <RecoilRoot>
            <ThemeProvider theme={darkTheme}>
              {getLayout(<Component {...pageProps} />)}
            </ThemeProvider>
          </RecoilRoot>
        </Hydrate>
        <ReactQueryDevtools position="bottom-right" />
      </QueryClientProvider>
    </>
  );
}

export default App;
