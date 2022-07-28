import { useRouter } from 'next/router';
import React from 'react';
import { Button, StickyBottom } from '../common';

interface ButtonAreaProps {
  userId: string;
  lolNickname: string;
}

function ButtonArea(props: ButtonAreaProps) {
  const { userId, lolNickname } = props;

  const router = useRouter();

  return (
    <StickyBottom>
      <Button
        variant="outlined"
        color="onBackground"
        size="lg"
        onClick={() => router.push({ pathname: `/review-write/${userId}`, query: { lolNickname } })}
      >
        리뷰 작성
      </Button>
      <Button variant="contained" size="lg" onClick={() => router.push(`/chats/${userId}`)}>
        채팅하기
      </Button>
    </StickyBottom>
  );
}

export default ButtonArea;
