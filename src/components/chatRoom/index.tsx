import React, { useContext, useEffect, useState } from 'react';
import { useQueryClient } from 'react-query';
import { SocketContext } from '../../contexts/socket';
import useMessages, { Messages, ReceivedMessage } from '../../hooks/useMessages';
import InputArea from './InputArea';
import MessageArea from './MessageArea';
import { ChatRoomContainer } from './style';

import { useTimer } from '../../utils';

function ChatRoom() {
  const [messages, addMessage, setMessages] = useMessages();
  const [input, setInput] = useState('');
  const [hasBadWord, setHasBadWord] = useState(false);

  const [typing, setTyping] = useState(false);

  const [setTimer, clearTimer] = useTimer(() => setTyping(false), 5000);

  const socket = useContext(SocketContext);

  useEffect(() => {
    socket.on('onTyping', () => {
      clearTimer();
      setTyping(true);
      setTimer();
    });

    // TODO onTypingEnd
  }, [socket]);

  const queryClient = useQueryClient();

  useEffect(() => {
    socket.on('onEnterChatRoom', (data: Messages[]) => {
      queryClient.setQueryData('chatRoom', {
        roomId: '62d565601115b1eb5763d761',
        user1: '62d509be151f1fb3b2e0f792',
        user2: '62d509be151f1fb3b2e0f792',
      });

      data.sort((a, b) => Object.keys(a)[0].localeCompare(Object.keys(b)[0]));
      const defaultMessages = data.reduce((prev, crnt) => {
        const [date, message] = Object.entries(crnt)[0];
        // eslint-disable-next-line no-param-reassign
        prev[date] = message;
        return prev;
      }, {});
      setMessages(defaultMessages);
    });

    socket.on('receiveMessage', (message: ReceivedMessage) => {
      setTyping(false);
      addMessage(message);
    });
  }, [socket]);

  return (
    <ChatRoomContainer>
      <MessageArea
        messages={messages}
        hasBadWord={hasBadWord}
        setHasBadWord={setHasBadWord}
        input={input}
        setInput={setInput}
        typing={typing}
      />
      <InputArea
        setHasBadWord={setHasBadWord}
        input={input}
        setInput={setInput}
        setTyping={setTyping}
      />
    </ChatRoomContainer>
  );
}

export default ChatRoom;
