import axios from 'axios';
import React, { useEffect } from 'react';

function Home() {
  useEffect(() => {
    (async () => {
      const { data } = await axios('/users');
      // eslint-disable-next-line no-console
      console.log(data);
    })();
  });
  return <div>test</div>;
}

export default Home;
