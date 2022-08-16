import React, { useEffect } from 'react';
import Router from 'next/router';
import useGetAuth from '../hooks/useGetAuth';
import { Loading } from './common/loadingSuspense';

const WithAuth = (Component: React.FC) =>
  function (props: any) {
    const { isAuth } = props;

    if (!isAuth) {
      return <Component {...props} />;
    }

    const { isOnBoarded } = useGetAuth();

    if (isOnBoarded) {
      return <Component {...props} />;
    }

    useEffect(() => {
      if (!isOnBoarded) {
        Router.replace('/on-boarding');
      }
    }, []);

    return <Loading />;
  };

export default WithAuth;
