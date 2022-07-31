import React, { Suspense } from 'react';
import { test } from '../utils';

function Home() {
  test();
  return (
    <Suspense fallback="loadding">
      <div>test</div>
    </Suspense>
  );
}

export default Home;
