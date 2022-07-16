import React from 'react';
import Message from './Message';
import QuickChat from './QuickChat';
import { MessageAreaContainer } from './style';

interface MessageProps {
  messages: {
    id: string;
    timestamp: number;
    message: string;
  }[];
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

  return (
    <MessageAreaContainer>
      {messages.length ? (
        messages.map((message) => <Message message={message} />)
      ) : (
        <QuickChat setMessages={setMessages} />
      )}
    </MessageAreaContainer>
  );
}

export default MessageArea;
