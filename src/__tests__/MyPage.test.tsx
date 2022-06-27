import React, { Suspense } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from '@emotion/react';
import { render } from '@testing-library/react';
import MyPage from '../components/mypage';

import { darkTheme } from '../theme';

describe('<MyPage />', () => {
  it('should fetch mypage data', async () => {
    const { findByTestId } = render(
      <QueryClientProvider
        client={
          new QueryClient({
            defaultOptions: {
              queries: {
                suspense: true,
              },
            },
          })
        }
      >
        <ThemeProvider theme={darkTheme}>
          <Suspense fallback="loading...">
            <MyPage />
          </Suspense>
        </ThemeProvider>
      </QueryClientProvider>
    );
    const nickname = await findByTestId('nickname');
    expect(nickname).toHaveTextContent('썩은김치');
  });
});
