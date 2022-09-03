import React from 'react';
import Withdrawal from '../../components/withdrawal/Withdrawal';
import { preFetchAuth } from '../../hooks/preFetchFns';

function WithdrawalPage() {
  return <Withdrawal />;
}

export default WithdrawalPage;

export const getServerSideProps = preFetchAuth;
