import React, { useState } from 'react';
import { useQueryClient } from 'react-query';
import useMessages from '../../hooks/useMessages';
import InputArea from './InputArea';
import MessageArea from './MessageArea';
import { ChatRoomContainer } from './style';

function ChatRoom({ roomId }: { roomId: string }) {
  const [messages] = useMessages();
  const [input, setInput] = useState('');

  const [hasBadWord, setHasBadWord] = useState(false);

  return (
    <ChatRoomContainer>
      <MessageArea
        messages={messages}
        hasBadWord={hasBadWord}
        setHasBadWord={setHasBadWord}
        input={input}
        setInput={setInput}
      />
      <InputArea setHasBadWord={setHasBadWord} input={input} setInput={setInput} />
    </ChatRoomContainer>
  );
}

export default ChatRoom;
