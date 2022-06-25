import { ThemeProvider } from '@emotion/react';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import OnBoarding from '../components/onBoarding';
import { darkTheme } from '../theme';

describe('<OnBoarding />', () => {
  beforeEach(() => {
    const queryClient = new QueryClient();

    render(
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={darkTheme}>
          <OnBoarding />
        </ThemeProvider>
      </QueryClientProvider>
    );
  });
  it('입력값 검증 에러 테스트', () => {
    const nickNameErrorEl = screen.getByTestId('nickNameError');
    expect(nickNameErrorEl).toBeInTheDocument();
    // fireEvent.submit(screen.getByRole('button', { name: /내 듀오 찾으러 가기/i}));
    // expect()
  });
});
