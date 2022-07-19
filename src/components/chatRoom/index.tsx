import React, { useState } from 'react';
import useMessages from '../../hooks/useMessages';
import InputArea from './InputArea';
import MessageArea from './MessageArea';
import { ChatRoomContainer } from './style';

function ChatRoom() {
  const [messages, addMessages] = useMessages();
  const [input, setInput] = useState('');

  const [hasBadWord, setHasBadWord] = useState(false);
  console.log(messages);
  return (
    <ChatRoomContainer>
      <MessageArea
        messages={messages}
        addMessages={addMessages}
        hasBadWord={hasBadWord}
        setHasBadWord={setHasBadWord}
        input={input}
        setInput={setInput}
      />
      <InputArea
        addMessages={addMessages}
        setHasBadWord={setHasBadWord}
        input={input}
        setInput={setInput}
      />
    </ChatRoomContainer>
  );
}

export default ChatRoom;
