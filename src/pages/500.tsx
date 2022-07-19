import React from 'react';
import Error from '../components/error';

function Custom500() {
  return <Error type={500} />;
}

export default Custom500;
