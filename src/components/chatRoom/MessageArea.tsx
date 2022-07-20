import React, { useEffect, useRef } from 'react';

import BadWordAlert from './BadWordAlert';
import DayDivider from './DayDivider';
import Message from './Message';
import QuickChat from './QuickChat';
import Typing from './Typing';
import { MessageAreaContainer, OpponentSpeechBubble } from './style';

import type { Messages } from '../../hooks/useMessages';

interface MessageProps {
  messages: Messages;
  hasBadWord: boolean;
  setHasBadWord: React.Dispatch<React.SetStateAction<boolean>>;
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  typing: boolean;
}

function MessageArea(props: MessageProps) {
  const { messages, hasBadWord, setHasBadWord, input, setInput, typing } = props;

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView();
  }, [messages, hasBadWord, typing]);

  //! 메시지 업데이트마다 정렬하지 않아도 순서가 유지되는지 검증 필요.
  //! 유지되지 않는다면 여기서 정렬해야 함.
  // const sortedMessages = useMemo(() => sortByKey(messages), [messages]);

  return (
    <MessageAreaContainer>
      {Object.keys(messages).length > 0 || hasBadWord ? (
        Object.entries(messages as Messages).map(([date, msgs]) => (
          <React.Fragment key={date}>
            <DayDivider>{date}</DayDivider>
            {msgs.map((message) => (
              <Message key={message.createdAt} message={message} />
            ))}
          </React.Fragment>
        ))
      ) : (
        <QuickChat />
      )}
      {typing && (
        <OpponentSpeechBubble>
          <Typing />
        </OpponentSpeechBubble>
      )}
      <div ref={scrollRef}>
        {hasBadWord && (
          <BadWordAlert setHasBadWord={setHasBadWord} input={input} setInput={setInput} />
        )}
      </div>
    </MessageAreaContainer>
  );
}

export default MessageArea;
