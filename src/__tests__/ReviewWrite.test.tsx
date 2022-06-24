import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { render, fireEvent } from '@testing-library/react';
import ReviewWrite from '../components/reviewWrite';

import { darkTheme } from '../theme';

describe('<ReviewWrite/>', () => {
  it("should render different question depending on user's answer", () => {
    const { getByRole } = render(
      <ThemeProvider theme={darkTheme}>
        <ReviewWrite />
      </ThemeProvider>
    );

    const negativeBtn = getByRole('button', { name: /별로에요/i });
    fireEvent.click(negativeBtn);
    expect(getByRole('heading', { name: /어떤 점이 별로였는지 알려주세요/i })).toBeInTheDocument();
  });
});
