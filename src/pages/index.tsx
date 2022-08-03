import dynamic from 'next/dynamic';
import React, { Suspense } from 'react';

const Home = dynamic(() => import('../components/home'), { ssr: false });

function HomePage() {
  return (
    <Suspense>
      <Home />
    </Suspense>
  );
}

export default HomePage;
