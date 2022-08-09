import React from 'react';
import LoadingSuspense from '../../components/common/loading-suspense';
import New from '../../components/recommend/New';

function NewPage() {
  return (
    <LoadingSuspense>
      <New />
    </LoadingSuspense>
  );
}

export default NewPage;
