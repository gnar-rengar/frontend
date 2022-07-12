import React, { ReactElement } from 'react';
import Layout from '../components/layout/Layout';
import TendencyTest from '../components/tendencyTest';

function TendencyTestPage() {
  return <TendencyTest />;
}

export default TendencyTestPage;

TendencyTestPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout header={false}>{page}</Layout>;
};
