import dayjs from 'dayjs';
import React from 'react';
import { Typography } from '../common';
import {
  MyMessageContainer,
  MySpeechBubble,
  OpponentMessageContainer,
  OpponentSpeechBubble,
} from './style';

interface MessageProps {
  message: {
    id: string;
    timestamp: number;
    message: string;
  };
}

const myId = '1';

function Message(props: MessageProps) {
  const {
    message: { id, timestamp, message },
  } = props;

  const time = dayjs(timestamp).format('A h:mm');

  if (id === myId) {
    return (
      <MyMessageContainer>
        <Typography variant="caption" color="onBackgroundSub">
          {time}
        </Typography>
        <MySpeechBubble>
          <Typography variant="body2">{message}</Typography>
        </MySpeechBubble>
      </MyMessageContainer>
    );
  }

  return (
    <OpponentMessageContainer>
      <OpponentSpeechBubble>
        <Typography variant="body2">{message}</Typography>
      </OpponentSpeechBubble>
      <Typography variant="caption" color="onBackgroundSub">
        {time}
      </Typography>
    </OpponentMessageContainer>
  );
}

export default Message;
