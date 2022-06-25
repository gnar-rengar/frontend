import { ThemeProvider } from '@emotion/react';
import { render, screen } from '@testing-library/react';
import React from 'react';
<<<<<<< HEAD
=======
import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { ThemeProvider } from '@emotion/react';
>>>>>>> e96ccf6 (테스트 코드 작성)
=======
>>>>>>> ac1c17a (충돌 수정 및 import 수정)
import { QueryClient, QueryClientProvider } from 'react-query';
import OnBoarding from '../components/onBoarding';
import { darkTheme } from '../theme';

describe('<OnBoarding />', () => {
  beforeEach(() => {
    const queryClient = new QueryClient();

    render(
<<<<<<< HEAD
=======
  it('입력값 검증 에러 테스트', () => {
    const queryClient = new QueryClient();
    const { getByTestId, findByText } = render(
>>>>>>> e96ccf6 (테스트 코드 작성)
=======
>>>>>>> ac1c17a (충돌 수정 및 import 수정)
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
<<<<<<< HEAD
=======
    fireEvent.click(getByTestId('submit'));

    findByText('소환사명을 입력해주세요');
    findByText('하나 이상 골라주셔야 잘 추천해드릴 수 있어요!!!');
>>>>>>> e96ccf6 (테스트 코드 작성)
=======
>>>>>>> ac1c17a (충돌 수정 및 import 수정)
  });
});
