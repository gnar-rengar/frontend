import { useRouter } from 'next/router';
import React from 'react';
import useGetRoomId from '../../hooks/useGetRoomId';
import { Button, StickyBottom } from '../common';

interface ButtonAreaProps {
  userId: string;
  lolNickname: string;
  isMe: boolean;
}

function ButtonArea(props: ButtonAreaProps) {
  const { userId, lolNickname, isMe } = props;

  const router = useRouter();
  const { refetch } = useGetRoomId(userId);

  const handleClickReviewButton = () => {
    router.push({ pathname: `/review-write/${userId}`, query: { lolNickname } });
  };

  const handleClickChatButton = async () => {
    const {
      data: { roomId },
    } = await refetch();

    router.push(`/chats/${roomId}`);
  };

  const handleClickEditButton = () => {
    router.push('/on-boarding');
  };

  if (isMe) {
    return (
      <StickyBottom>
        <Button
          variant="contained"
          size="lg"
          color="primaryVariant"
          onClick={handleClickEditButton}
        >
          수정하기
        </Button>
      </StickyBottom>
    );
  }

  return (
    <StickyBottom>
      <Button variant="outlined" color="onBackground" size="lg" onClick={handleClickReviewButton}>
        리뷰 작성
      </Button>
      <Button variant="contained" size="lg" color="primaryVariant" onClick={handleClickChatButton}>
        채팅하기
      </Button>
    </StickyBottom>
  );
}

export default ButtonArea;
