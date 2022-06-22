import React from 'react';
import { render } from '@testing-library/react';

import Home from '../pages/index';

it('should render test', () => {
  const { getByText } = render(<Home />);
  expect(getByText('Home')).toBeInTheDocument();
});
