import React from 'react';

interface User {
  id: string;
  name: string;
  nickname: string;
}

function Home({ users }: { users: User[] }) {
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
