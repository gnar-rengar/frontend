import React, { Suspense } from 'react';
import Home from '../components/home';

function HomePage() {
  return (
    <Suspense>
      <Home />
    </Suspense>
  );
}

export default HomePage;
