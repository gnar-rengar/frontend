import React from 'react';
import Layout from '../components/layout/Layout';
import { ThemeProvider } from '@emotion/react';
import { AppProps } from 'next/app';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import { darkTheme } from '../theme';
import GlobalStyle from '../theme/globalStyle';

if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
  // eslint-disable-next-line global-require
  require('../mocks');
}

function App({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <RecoilRoot>
            <ThemeProvider theme={darkTheme}>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </ThemeProvider>
          </RecoilRoot>
        </Hydrate>
      </QueryClientProvider>
    </>
  );
}

export default App;
