import dayjs from 'dayjs';
import Image from 'next/image';
import React from 'react';
import { Typography } from '../common';
import {
  ChatRoomContainer,
  InfoArea,
  Message,
  MessageAndCount,
  NameAndTime,
  RecentMessageCount,
} from './style';

interface ChatRoomProps {
  room: {
    id: string;
    profileUrl: string;
    name: string;
    timeStamp: number;
    message: string;
    unRead: number;
  };
}

function ChatRoom(props: ChatRoomProps) {
  const {
    room: { profileUrl, name, timeStamp, message, unRead },
  } = props;

  const time = dayjs(timeStamp).format('A h:mm');

  return (
    <ChatRoomContainer>
      <Image src={profileUrl} layout="fixed" width="48px" height="48px" />
      <InfoArea>
        <NameAndTime>
          <Typography variant="body1" color="onSurface">
            {name}
          </Typography>
          <Typography variant="body4" color="onBackgroundSub">
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
            <Typography variant="body3" color="onBackground" component="span">
              {unRead}
            </Typography>
          </RecentMessageCount>
        </MessageAndCount>
      </InfoArea>
    </ChatRoomContainer>
  );
}

export default ChatRoom;
