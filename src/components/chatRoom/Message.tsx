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

const myId = '62d509be151f1fb3b2e0f792';

function Message(props: MessageProps) {
  const {
    message: { userId, text, createdAt },
  } = props;

  const time = dayjs(createdAt).format('A h:mm');
  if (userId === myId) {
    return (
      <MyMessageContainer>
        <Typography variant="captionRegular" color="onBackgroundSub">
          {time}
        </Typography>
        <MySpeechBubble>
          <Typography variant="body2" color="onPrimary">
            {text}
          </Typography>
        </MySpeechBubble>
      </MyMessageContainer>
    );
  }

  return (
    <OpponentMessageContainer>
      <OpponentSpeechBubble>
        <Typography variant="body2" color="surface">
          {text}
        </Typography>
      </OpponentSpeechBubble>
      <Typography variant="captionRegular" color="onBackgroundSub">
        {time}
      </Typography>
    </OpponentMessageContainer>
  );
}

export default Message;
