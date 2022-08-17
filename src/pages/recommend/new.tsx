import React from 'react';
import LoadingSuspense from '../../components/common/loadingSuspense';
import New from '../../components/recommend/New';

function NewPage() {
  return (
    <LoadingSuspense>
      <New />
    </LoadingSuspense>
  );
}

export default NewPage;
