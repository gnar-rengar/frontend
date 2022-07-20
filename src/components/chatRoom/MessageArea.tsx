import React, { useEffect, useMemo, useRef } from 'react';

import BadWordAlert from './BadWordAlert';
import DayDivider from './DayDivider';
import Message from './Message';
import QuickChat from './QuickChat';
import { MessageAreaContainer } from './style';

import { sortByKey } from '../../utils';
import type { AddMessage, Messages } from '../../hooks/useMessages';

interface MessageProps {
  messages: Messages;
  hasBadWord: boolean;
  setHasBadWord: React.Dispatch<React.SetStateAction<boolean>>;
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
}

function MessageArea(props: MessageProps) {
  const { messages, hasBadWord, setHasBadWord, input, setInput } = props;

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView();
  }, [messages]);

  const sortedMessages = useMemo(() => sortByKey(messages), [messages]);

  return (
    <MessageAreaContainer>
      {Object.keys(sortedMessages).length > 0 || hasBadWord ? (
        Object.entries(sortedMessages as Messages).map(([date, msgs]) => (
          <React.Fragment key={date}>
            <DayDivider>{date}</DayDivider>
            {msgs.map((message) => (
              <Message key={message.createdAt} message={message} />
            ))}
            <div ref={scrollRef} />
          </React.Fragment>
        ))
      ) : (
        <QuickChat />
      )}
      {hasBadWord && (
        <BadWordAlert setHasBadWord={setHasBadWord} input={input} setInput={setInput} />
      )}
    </MessageAreaContainer>
  );
}

export default MessageArea;
