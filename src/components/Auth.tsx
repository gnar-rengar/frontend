import Router from 'next/router';
import React, { useEffect } from 'react';
import useGetAuth from '../hooks/useGetAuth';

const IsOnBoarded = (Component: React.FunctionComponent) =>
  function (props: any) {
    const { isAuth } = props;

    if (!isAuth) {
      useEffect(() => {
        Router.push('/login');
      }, []);
      return <Component {...props} />;
    }
    const { isOnBoarded } = useGetAuth();

    useEffect(() => {
      if (!isOnBoarded) {
        Router.push('/tendency-test');
      }
    }, []);
    return <Component {...props} />;
  };

export default IsOnBoarded;
