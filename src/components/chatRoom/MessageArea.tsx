import React from 'react';
import Message from './Message';
import { MessageAreaContainer } from './style';

const messages = [
  { id: '1', timestamp: new Date().getTime(), message: '반가워요' },
  { id: '2', timestamp: new Date().getTime(), message: '안녕' },
  { id: '1', timestamp: new Date().getTime(), message: '봇듀오 가실래요?' },
];

function MessageArea() {
  return (
    <MessageAreaContainer>
      {messages.map((message) => (
        <Message message={message} />
      ))}
    </MessageAreaContainer>
  );
}

export default MessageArea;
