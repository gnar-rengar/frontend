import { useRouter } from 'next/router';
import React from 'react';
import { axios } from '../../axios';
import { Button, StickyBottom } from '../common';

interface ButtonAreaProps {
  userId: string;
  lolNickname: string;
}

function ButtonArea(props: ButtonAreaProps) {
  const { userId, lolNickname } = props;

  const router = useRouter();

  const handleClickReviewButton = () => {
    router.push({ pathname: `/review-write/${userId}`, query: { lolNickname } });
  };

  const handleClickChatButton = async () => {
    const {
      data: { roomId },
    } = await axios.get(`/user/roomId/${userId}`);

    router.push(`/chats/${roomId}`);
  };

  return (
    <StickyBottom>
      <Button variant="outlined" color="onBackground" size="lg" onClick={handleClickReviewButton}>
        리뷰 작성
      </Button>
      <Button variant="contained" size="lg" onClick={handleClickChatButton}>
        채팅하기
      </Button>
    </StickyBottom>
  );
}

export default ButtonArea;
