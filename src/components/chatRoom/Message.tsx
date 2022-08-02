import dayjs from 'dayjs';
import React, { memo } from 'react';
import { Typography } from '../common';
import {
  MyMessageContainer,
  MySpeechBubble,
  OpponentMessageContainer,
  OpponentSpeechBubble,
} from './style';

import type { Message as MessageType } from '../../types/api.type';

interface MessageProps {
  myId: string;
  message: MessageType;
}

function Message(props: MessageProps) {
  const {
    myId,
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
          <Typography variant="body2" color="onPrimary" paragraph>
            {text}
          </Typography>
        </MySpeechBubble>
      </MyMessageContainer>
    );
  }

  return (
    <OpponentMessageContainer>
      <OpponentSpeechBubble>
        <Typography variant="body2" color="surface" paragraph>
          {text}
        </Typography>
      </OpponentSpeechBubble>
      <Typography variant="captionRegular" color="onBackgroundSub">
        {time}
      </Typography>
    </OpponentMessageContainer>
  );
}

export default memo(Message);
