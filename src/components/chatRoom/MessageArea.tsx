import React from 'react';
import { sortByKey } from '../../utils';
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
}

function MessageArea(props: MessageProps) {
  const { messages, setMessages } = props;

  const sortedMessages = sortByKey(messages);
  return (
    <MessageAreaContainer>
      {Object.keys(sortedMessages).length > 0 ? (
        Object.entries(sortedMessages).map(([date, messages]) => (
          <>
            <DayDivider>{date}</DayDivider>
            {messages.map((message) => (
              <Message message={message} />
            ))}
          </>
        ))
      ) : (
        <QuickChat setMessages={setMessages} />
      )}
    </MessageAreaContainer>
  );
}

export default MessageArea;
