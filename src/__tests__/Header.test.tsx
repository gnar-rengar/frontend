import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { render } from '@testing-library/react';
import Header from '../components/layout/header/Header';

import { darkTheme } from '../theme';

describe('<Layout/>', () => {
  it('should render logo ', () => {
    const { getByAltText } = render(
      <ThemeProvider theme={darkTheme}>
        <Header />
      </ThemeProvider>
    );

    const logo = getByAltText('logo');
    expect(logo).toBeInTheDocument();
  });

  it('should render a navigation', () => {
    const { getByRole } = render(
      <ThemeProvider theme={darkTheme}>
        <Header />
      </ThemeProvider>
    );
    const nav = getByRole('navigation');
    const links = nav.querySelectorAll('a');
    expect(links[0]).toHaveAttribute('href');
  });
});
