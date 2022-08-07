import React from 'react';
import LoadingSuspense from '../components/common/loadingSuspense';
import Home from '../components/home';

function HomePage() {
  return (
    <LoadingSuspense>
      <Home />
    </LoadingSuspense>
  );
}

export default HomePage;
