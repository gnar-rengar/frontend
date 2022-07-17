import React, { useRef, useState } from 'react';
import useMessages from '../../hooks/useMessages';
import InputArea from './InputArea';
import MessageArea from './MessageArea';
import { ChatRoomContainer } from './style';

function ChatRoom() {
  const [messages, addMessages] = useMessages();
  const [hasBadWord, setHasBadWord] = useState(false);

  const inputRef = useRef('');

  return (
    <ChatRoomContainer>
      <MessageArea
        messages={messages}
        addMessages={addMessages}
        hasBadWord={hasBadWord}
        setHasBadWord={setHasBadWord}
        inputRef={inputRef}
      />
      <InputArea addMessages={addMessages} setHasBadWord={setHasBadWord} inputRef={inputRef} />
    </ChatRoomContainer>
  );
}

export default ChatRoom;
