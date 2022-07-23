import React, { useContext, useEffect, useState } from 'react';
import { useQueryClient } from 'react-query';
import useMessages, { Messages, ReceivedMessage } from '../../hooks/useMessages';

import { SocketContext } from '../../contexts/socket';

import InputArea from './InputArea';
import MessageArea from './MessageArea';
import { ChatRoomContainer } from './style';

import { useTimer } from '../../utils';

function ChatRoom({ roomId }: { roomId: string }) {
  const [messages, addMessage, setMessages] = useMessages();
  const [newReceivedMessage, setNewReceivedMessage] = useState('');

  const [input, setInput] = useState('');
  const [hasBadWord, setHasBadWord] = useState(false);

  const [typing, setTyping] = useState(false);

  const socket = useContext(SocketContext);

  const [setTimer, clearTimer] = useTimer(() => setTyping(false), 5000);

  const queryClient = useQueryClient();

  useEffect(() => {
    socket.emit('enterChatRoom', roomId, '62d509be151f1fb3b2e0f792');

    socket.on(
      'onEnterChatRoom',
      (data: { userId: string; profileUrl: string; lolNickname: string }) => {
        const { userId, profileUrl, lolNickname } = data;
        queryClient.setQueryData('chatRoom', {
          roomId,
          opponent: {
            userId,
            profileUrl,
            lolNickname,
          },
        });
      }
    );

    socket.on('getMessages', (data: Messages[]) => {
      data.sort((a, b) => Object.keys(a)[0].localeCompare(Object.keys(b)[0]));
      const defaultMessages = data.reduce((prev, crnt) => {
        const [date, message] = Object.entries(crnt)[0];
        // eslint-disable-next-line no-param-reassign
        prev[date] = message;
        return prev;
      }, {});

      setMessages(defaultMessages);
    });

    // TODO 내가 보낸 메시지에 대한 반환은 다른 이벤트로.
    // socket.on('onSendMessage')

    socket.on('receiveMessage', (message: ReceivedMessage) => {
      setTyping(false);
      addMessage(message);
      setNewReceivedMessage(message.text);
    });
  }, [socket]);

  socket.on('onTyping', () => {
    clearTimer();
    setTyping(true);
    setTimer();
  });

  socket.on('onEndTyping', () => {
    clearTimer();
    setTyping(false);
  });

  return (
    <ChatRoomContainer>
      <MessageArea
        messages={messages}
        newReceivedMessage={newReceivedMessage}
        hasBadWord={hasBadWord}
        setHasBadWord={setHasBadWord}
        input={input}
        setInput={setInput}
        typing={typing}
      />
      <InputArea setHasBadWord={setHasBadWord} input={input} setInput={setInput} />
    </ChatRoomContainer>
  );
}

export default ChatRoom;
