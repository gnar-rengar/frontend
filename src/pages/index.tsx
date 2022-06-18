import axios from 'axios';
import React, { useEffect } from 'react';

interface User {
  id: string;
  name: string;
  nickname: string;
}

function Home({ users }: { users: User[] }) {
  useEffect(() => {
    (async () => {
      const { data } = await axios('/users');
      // eslint-disable-next-line no-console
      console.log(data);
    })();
  });
  return (
    <>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch('https://backend.api/users');
  const users: User[] = await res.json();

  return {
    props: {
      users,
    },
  };
}

export default Home;
