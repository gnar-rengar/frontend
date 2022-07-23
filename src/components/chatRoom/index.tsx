import React, { useCallback, useContext, useEffect, useState } from 'react';
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

  const [isOpponentTyping, setIsOpponentTypingTyping] = useState(false);

  const socket = useContext(SocketContext);

  const [setTimer, clearTimer] = useTimer(() => setIsOpponentTypingTyping(false), 5000);

  const queryClient = useQueryClient();

  const setRoomData = useCallback(
    (room: { userId: string; profileUrl: string; lolNickname: string }) => {
      const { userId, profileUrl, lolNickname } = room;
      queryClient.setQueryData('chatRoom', {
        roomId,
        opponent: {
          userId,
          profileUrl,
          lolNickname,
        },
      });
    },
    [queryClient]
  );

  const setDefaultMessages = useCallback(
    (msgs: Messages[]) => {
      msgs.sort((a, b) => Object.keys(a)[0].localeCompare(Object.keys(b)[0]));
      const defaultMessages = msgs.reduce((prev, crnt) => {
        const [date, message] = Object.entries(crnt)[0];
        // eslint-disable-next-line no-param-reassign
        prev[date] = message;
        return prev;
      }, {});

      setMessages(defaultMessages);
    },
    [setMessages]
  );

  useEffect(() => {
    socket.emit('enterChatRoom', roomId, '62d509be151f1fb3b2e0f792');

    socket.on(
      'onEnterChatRoom',
      (room: { userId: string; profileUrl: string; lolNickname: string }, msgs: Messages[]) => {
        setRoomData(room);
        setDefaultMessages(msgs);
      }
    );

    // TODO 내가 보낸 메시지에 대한 반환은 다른 이벤트로.
    // socket.on('onSendMessage')

    socket.on('receiveMessage', (message: ReceivedMessage) => {
      setIsOpponentTypingTyping(false);
      addMessage(message);
      setNewReceivedMessage(message.text);
    });
  }, [socket]);

  socket.on('onTyping', () => {
    clearTimer();
    setIsOpponentTypingTyping(true);
    setTimer();
  });

  socket.on('onEndTyping', () => {
    clearTimer();
    setIsOpponentTypingTyping(false);
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
        isOpponentTyping={isOpponentTyping}
      />
      <InputArea setHasBadWord={setHasBadWord} input={input} setInput={setInput} />
    </ChatRoomContainer>
  );
}

export default ChatRoom;
