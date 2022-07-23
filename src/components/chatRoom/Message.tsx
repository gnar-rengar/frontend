import dayjs from 'dayjs';
import React from 'react';
import { Typography } from '../common';
import {
  MyMessageContainer,
  MySpeechBubble,
  OpponentMessageContainer,
  OpponentSpeechBubble,
} from './style';

import type { Message as MessageType } from '../../hooks/useMessages';

interface MessageProps {
  message: MessageType;
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
        <Typography variant="captionRegular" color="onBackgroundSub">
          {time}
        </Typography>
        <MySpeechBubble>
          <Typography variant="body2" color="onPrimary">
            {message}
          </Typography>
        </MySpeechBubble>
      </MyMessageContainer>
    );
  }

  return (
    <OpponentMessageContainer>
      <OpponentSpeechBubble>
        <Typography variant="body2" color="surface">
          {message}
        </Typography>
      </OpponentSpeechBubble>
      <Typography variant="captionRegular" color="onBackgroundSub">
        {time}
      </Typography>
    </OpponentMessageContainer>
  );
}

export default Message;
