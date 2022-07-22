import React from 'react';
import useGetAuth from '../hooks/useGetAuth';

function Home() {
  useGetAuth();
  return <div>Home</div>;
}

export default Home;
