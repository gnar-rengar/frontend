import React from 'react';
import LoadingSuspense from '../../components/common/loadingSuspense';
import New from '../../components/recommend/New';
import WithAuth from '../../components/WithAuth';

function NewPage() {
  return (
    <LoadingSuspense>
      <New />
    </LoadingSuspense>
  );
}

export default WithAuth(NewPage);
