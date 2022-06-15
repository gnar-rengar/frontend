import React from 'react';
import { render } from '@testing-library/react';

import Home from '../pages/index';

it('should render test', () => {
  const result = render(<Home />);
  result.getByText('Home');
});
