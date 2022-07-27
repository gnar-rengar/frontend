import React, { Suspense } from 'react';

function Home() {
  return (
    <Suspense fallback="loadding">
      <div>test</div>
    </Suspense>
  );
}

export default Home;
