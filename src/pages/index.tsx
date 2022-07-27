import React, { Suspense } from 'react';
import HomeComponent from '../components/home';

function Home() {
  return (
    <Suspense fallback="loading">
      <HomeComponent />
    </Suspense>
  );
}

export default Home;
