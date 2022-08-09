import React, { ReactElement } from 'react';
import BannerDetail from '../../components/banner';
import Layout from '../../components/layout/Layout';

function ManualPage() {
  return (
    <BannerDetail
      src="/banner/manualDetail.png"
      height={3457}
      buttonColor="primaryVariant"
      buttonText="듀오해듀오 탐방하러 가볼까요?"
    />
  );
}

export default ManualPage;

ManualPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout header={false}>{page}</Layout>;
};
