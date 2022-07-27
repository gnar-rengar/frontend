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
    lolNickname: string;
    profileUrl: string;
    lastMessageText: string;
    lastMessagedTime: string;
    unRead: number;
    roomId: string;
    userId: string;
  };
}

function ChatRoomCard(props: ChatRoomCardProps) {
  const {
    room: { lolNickname, profileUrl, lastMessageText, lastMessagedTime, unRead },
  } = props;

  const time = dayjs(lastMessagedTime).format('A h:mm');

  return (
    <ChatRoomCardContainer>
      <Image src={profileUrl} layout="fixed" width="48px" height="48px" />
      <InfoArea>
        <NameAndTime>
          <Typography variant="body1" color="onSurface">
            {lolNickname}
          </Typography>
          <Typography variant="captionRegular" color="onBackgroundSub">
            {time}
          </Typography>
        </NameAndTime>
        <MessageAndCount>
          <Message>
            <Typography variant="body3" color="onBackground" paragraph>
              {lastMessageText}
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
