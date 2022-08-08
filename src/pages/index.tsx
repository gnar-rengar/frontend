import React from 'react';
import LoadingSuspense from '../components/common/loading-suspense';
import Home from '../components/home';

function HomePage() {
  return (
    <LoadingSuspense>
      <Home />
    </LoadingSuspense>
  );
}

export default HomePage;
