import React, { Suspense } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from '@emotion/react';
import { render, screen } from '@testing-library/react';
import MyPageComponent from '../components/myPage';

import { darkTheme } from '../theme';

// TODO 테스트 코드 작성
describe('<MyPage />', () => {
  it('should fetch mypage data', async () => {
    render(
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
            <MyPageComponent />
          </Suspense>
        </ThemeProvider>
      </QueryClientProvider>
    );
    screen.debug();
  });
});
