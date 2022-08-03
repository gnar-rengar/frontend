import React, { Suspense } from 'react';
import New from '../../components/recommend/New';

function NewPage() {
  return (
    <Suspense>
      <New />
    </Suspense>
  );
}

export default NewPage;
