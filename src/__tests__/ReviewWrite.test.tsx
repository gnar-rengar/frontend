import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { useRouter } from 'next/router';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';

import ReviewWrite from '../components/reviewWrite';
import { darkTheme } from '../theme';

beforeEach(() => {
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
        <ReviewWrite />
      </ThemeProvider>
    </QueryClientProvider>
  );
});

jest.mock('next/router');

describe('<ReviewWrite/>', () => {
  it("should render different question depending on user's answer", () => {
    const negativeBtn = screen.getByRole('button', { name: /별로에요/i });
    fireEvent.click(negativeBtn);
    expect(
      screen.getByRole('heading', { name: /어떤 점이 별로였는지 알려주세요/i })
    ).toBeInTheDocument();
  });

  it('disables submit button when the form is not valid', () => {
    const submitButton = screen.getByRole('button', { name: /매너 평가하기/i });
    expect(submitButton).toBeDisabled();
  });
});
