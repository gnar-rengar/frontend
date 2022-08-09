import React, { ReactElement } from 'react';
import BannerDetail from '../../components/banner';
import Layout from '../../components/layout/Layout';

function GifticonPage() {
  return (
    <BannerDetail
      src="/banner/gifticonDetail.png"
      height={1103}
      buttonColor="eventYellow"
      buttonText="환상의 짝궁 찾으러 가기"
    />
  );
}

export default GifticonPage;

GifticonPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout header={false}>{page}</Layout>;
};
