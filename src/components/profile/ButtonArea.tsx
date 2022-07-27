import Link from 'next/link';
import React from 'react';
import { Button, StickyBottom } from '../common';

interface ButtonAreaProps {
  userId: string;
}

function ButtonArea({ userId }: ButtonAreaProps) {
  return (
    <StickyBottom>
      <Link href={`/review-write/${userId}`}>
        <a>
          <Button variant="outlined" color="onBackground" size="lg">
            리뷰 작성
          </Button>
        </a>
      </Link>
      <Link href={`/chats/${userId}`}>
        <a>
          <Button variant="contained" size="lg">
            채팅하기
          </Button>
        </a>
      </Link>
    </StickyBottom>
  );
}

export default ButtonArea;
