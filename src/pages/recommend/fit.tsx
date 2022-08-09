import React from 'react';
import LoadingSuspense from '../../components/common/loading-suspense';
import Fit from '../../components/recommend/Fit';

function FitPage() {
  return (
    <LoadingSuspense>
      <Fit />
    </LoadingSuspense>
  );
}

export default FitPage;
