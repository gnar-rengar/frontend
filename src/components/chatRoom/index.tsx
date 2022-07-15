import React from 'react';
import InputArea from './InputArea';
import MessageArea from './MessageArea';
import { ChatRoomContainer } from './style';

function ChatRoom() {
  return (
    <ChatRoomContainer>
      <MessageArea />
      <InputArea />
    </ChatRoomContainer>
  );
}

export default ChatRoom;
