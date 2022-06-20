import React from 'react';
import Header from '../components/layout/header/Header';

import { ThemeProvider } from '@emotion/react';
import { darkTheme } from '../theme';

import { render } from '@testing-library/react';

describe('<Layout/>', () => {
  it('should render a logo', () => {
    const { getByText, getByRole } = render(
      <ThemeProvider theme={darkTheme}>
        <Header />
      </ThemeProvider>
    );
    const logo = getByText('LOGO');
    expect(logo).toBeInTheDocument();
  });

  it('should render a navigation', () => {
    const { getByText, getByRole } = render(
      <ThemeProvider theme={darkTheme}>
        <Header />
      </ThemeProvider>
    );
    const nav = getByRole('navigation');
    const links = nav.querySelectorAll('a');
    expect(links[0]).toHaveAttribute('href');
  });
});
