import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { ThemeProvider } from '@emotion/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import OnBoarding from '../components/onBoarding';
import { darkTheme } from '../theme';

describe('<OnBoarding />', () => {
  it('입력값 검증 에러 테스트', () => {
    const queryClient = new QueryClient();
    const { getByTestId, findByText } = render(
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={darkTheme}>
          <OnBoarding />
        </ThemeProvider>
      </QueryClientProvider>
    );
    fireEvent.click(getByTestId('submit'));

    findByText('소환사명을 입력해주세요');
    findByText('하나 이상 골라주셔야 잘 추천해드릴 수 있어요!!!');
  });
});
