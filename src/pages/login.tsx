import React, { ReactElement } from 'react';
import Layout from '../components/layout/Layout';
import Login from '../components/login';

function LoginPage() {
  return <Login />;
}

export default LoginPage;

LoginPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout header={false}>{page}</Layout>;
};
