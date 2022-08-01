import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useQueryClient } from 'react-query';
import useMessages from '../../hooks/useMessages';
import useGetAuth from '../../hooks/useGetAuth';
import { queryKeys } from '../../hooks/queryKeys';

import { SocketContext } from '../../contexts/socket';

import InputArea from './InputArea';
import MessageArea from './MessageArea';
import { ChatRoomContainer } from './style';

import { useTimer } from '../../utils';

import type { Messages, ReceivedMessage, Opponent } from '../../types/api.type';

function ChatRoom({ roomId }: { roomId: string }) {
  const { userId: myId, lolNickname } = useGetAuth();

  const [messages, addMessage, setMessages] = useMessages();
  const [newReceivedMessage, setNewReceivedMessage] = useState('');

  const [input, setInput] = useState('');
  const [hasBadWord, setHasBadWord] = useState(false);

  const [isOpponentTyping, setIsOpponentTypingTyping] = useState(false);

  const socket = useContext(SocketContext);

  const [setTimer, clearTimer] = useTimer(() => setIsOpponentTypingTyping(false), 5000);

  const queryClient = useQueryClient();

  const setRoomData = useCallback(
    (opponent: Opponent) => {
      queryClient.setQueryData(queryKeys.chatRoom, {
        roomId,
        opponent,
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

  const handleEnterChatRoom = useCallback((opponent: Opponent, msgs: Messages[]) => {
    setRoomData(opponent);
    setDefaultMessages(msgs);
  }, []);

  const handleReceiveMessage = useCallback(
    (message: ReceivedMessage) => {
      if (message.userId !== myId) {
        setIsOpponentTypingTyping(false);
        setNewReceivedMessage(message.text);
      }
      addMessage(message);
      socket.emit('readMessage', roomId, myId);
    },
    [socket]
  );

  useEffect(() => {
    socket.emit('enterChatRoom', roomId, myId);
    socket.on('onEnterChatRoom', handleEnterChatRoom);
    socket.on('receiveMessage', handleReceiveMessage);

    return () => {
      socket.off('onEnterChatRoom', handleEnterChatRoom);
      socket.off('receiveMessage', handleReceiveMessage);
    };
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
        myId={myId}
        lolNickname={lolNickname}
      />
      <InputArea
        setHasBadWord={setHasBadWord}
        input={input}
        setInput={setInput}
        roomId={roomId}
        myId={myId}
      />
    </ChatRoomContainer>
  );
}

export default ChatRoom;
