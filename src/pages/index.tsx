import React, { Suspense } from 'react';
import useGetAuth from '../hooks/useGetAuth';

function Home() {
  const auth = useGetAuth();
  console.log(auth);
  return (
    <Suspense fallback="loadding">
      <div>test</div>
    </Suspense>
  );
}

export default Home;
