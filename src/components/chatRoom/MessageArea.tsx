import React from 'react';
import { sortByKey } from '../../utils';
import BadWordAlert from './BadWordAlert';
import DayDivider from './DayDivider';
import Message from './Message';
import QuickChat from './QuickChat';
import { MessageAreaContainer } from './style';

interface MessageProps {
  messages: {
    [key in string]: {
      id: string;
      timestamp: number;
      message: string;
    }[];
  };
  setMessages: React.Dispatch<
    React.SetStateAction<{
      messages: {
        id: string;
        timestamp: number;
        message: string;
      }[];
    }>
  >;
  hasBadWord: boolean;
  setHasBadWord: React.Dispatch<React.SetStateAction<boolean>>;
  ignore: Event;
}

function MessageArea(props: MessageProps) {
  const { messages, setMessages, hasBadWord, setHasBadWord, ignore } = props;

  const sortedMessages = sortByKey(messages);
  return (
    <MessageAreaContainer>
      {Object.keys(sortedMessages).length > 0 ? (
        Object.entries(sortedMessages).map(([date, messages]) => (
          <>
            <DayDivider>{date}</DayDivider>
            {messages.map((message) => (
              <Message key={message.timestamp} message={message} />
            ))}
          </>
        ))
      ) : (
        <QuickChat setMessages={setMessages} />
      )}
      {hasBadWord && <BadWordAlert setHasBadWord={setHasBadWord} ignore={ignore} />}
    </MessageAreaContainer>
  );
}

export default MessageArea;
