import { render } from '@testing-library/react';
import React from 'react';
import Home from '../pages';

it('렌더 및  제목 텍스트 확인', () => {
  const { getByText } = render(<Home />);
  expect(getByText('Home')).toBeInTheDocument();
});
