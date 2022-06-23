import React from 'react';
import { render } from '@testing-library/react';
import OnBoarding from '../components/onBoarding';

it('렌더 및  제목 텍스트 확인', () => {
  const { getByText } = render(<OnBoarding />);
  expect(getByText('소환사명을 알려주세요')).toBeInTheDocument();
});
