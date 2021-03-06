import dayjs from 'dayjs';
import Image from 'next/image';
import React from 'react';
import { Typography } from '../common';
import {
  ChatRoomCardContainer,
  InfoArea,
  Message,
  MessageAndCount,
  NameAndTime,
  RecentMessageCount,
} from './style';

interface ChatRoomCardProps {
  room: {
    id: string;
    profileUrl: string;
    name: string;
    timeStamp: number;
    message: string;
    unRead: number;
  };
}

function ChatRoomCard(props: ChatRoomCardProps) {
  const {
    room: { profileUrl, name, timeStamp, message, unRead },
  } = props;

  const time = dayjs(timeStamp).format('A h:mm');

  return (
    <ChatRoomCardContainer>
      <Image src={profileUrl} layout="fixed" width="48px" height="48px" />
      <InfoArea>
        <NameAndTime>
          <Typography variant="body1" color="onSurface">
            {name}
          </Typography>
          <Typography variant="captionRegular" color="onBackgroundSub">
            {time}
          </Typography>
        </NameAndTime>
        <MessageAndCount>
          <Message>
            <Typography variant="body3" color="onBackground" paragraph>
              {message}
            </Typography>
          </Message>
          <RecentMessageCount>
            <Typography variant="captionRegular" color="onBackground" component="span">
              {unRead}
            </Typography>
          </RecentMessageCount>
        </MessageAndCount>
      </InfoArea>
    </ChatRoomCardContainer>
  );
}

export default ChatRoomCard;
