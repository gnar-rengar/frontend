import React, { useState } from 'react';
import InputArea from './InputArea';
import MessageArea from './MessageArea';
import { ChatRoomContainer } from './style';

const defaultMessages = [
  { id: '1', timestamp: new Date().getTime(), message: '반가워요' },
  { id: '2', timestamp: new Date().getTime(), message: '안녕' },
  { id: '1', timestamp: new Date().getTime(), message: '봇듀오 가실래요?' },
];

function ChatRoom() {
  const [messages, setMessages] = useState([]);

  return (
    <ChatRoomContainer>
      <MessageArea messages={messages} setMessages={setMessages} />
      <InputArea setMessages={setMessages} />
    </ChatRoomContainer>
  );
}

export default ChatRoom;
