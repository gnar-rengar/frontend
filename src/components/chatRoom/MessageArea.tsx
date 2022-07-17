import React, { useMemo } from 'react';

import BadWordAlert from './BadWordAlert';
import DayDivider from './DayDivider';
import Message from './Message';
import QuickChat from './QuickChat';
import { MessageAreaContainer } from './style';

import { sortByKey } from '../../utils';
import type { AddMessage, Messages } from '../../hooks/useMessages';

interface MessageProps {
  messages: Messages;
  addMessages: AddMessage;
  hasBadWord: boolean;
  setHasBadWord: React.Dispatch<React.SetStateAction<boolean>>;
  inputRef: React.MutableRefObject<string>;
}

function MessageArea(props: MessageProps) {
  const { messages, addMessages, hasBadWord, setHasBadWord, inputRef } = props;

  const sortedMessages = useMemo(() => sortByKey(messages), [messages]);

  return (
    <MessageAreaContainer>
      {Object.keys(sortedMessages).length > 0 || hasBadWord ? (
        Object.entries(sortedMessages).map(([date, msgs]) => (
          <React.Fragment key={date}>
            <DayDivider>{date}</DayDivider>
            {msgs.map((message) => (
              <Message key={message.timestamp} message={message} />
            ))}
          </React.Fragment>
        ))
      ) : (
        <QuickChat addMessages={addMessages} />
      )}
      {hasBadWord && (
        <BadWordAlert addMessages={addMessages} setHasBadWord={setHasBadWord} inputRef={inputRef} />
      )}
    </MessageAreaContainer>
  );
}

export default MessageArea;
