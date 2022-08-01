import React, { useCallback, useContext, useEffect, useState } from 'react';
import useMessages from '../../hooks/useMessages';
import useGetAuth from '../../hooks/useGetAuth';
import useGetMessages from '../../hooks/useGetMessages';

import { SocketContext } from '../../contexts/socket';

import InputArea from './InputArea';
import MessageArea from './MessageArea';
import { ChatRoomContainer } from './style';

import { useTimer } from '../../utils';

import type { Messages, ReceivedMessage } from '../../types/api.type';

function ChatRoom({ roomId }: { roomId: string }) {
  const { userId: myId, lolNickname } = useGetAuth();

  const { chat } = useGetMessages(roomId);

  const [messages, addMessage, setMessages] = useMessages();
  const [newReceivedMessage, setNewReceivedMessage] = useState('');

  const [input, setInput] = useState('');
  const [hasBadWord, setHasBadWord] = useState(false);

  const [isOpponentTyping, setIsOpponentTypingTyping] = useState(false);

  const socket = useContext(SocketContext);

  const [setTimer, clearTimer] = useTimer(() => setIsOpponentTypingTyping(false), 5000);

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

  const handleOnTyping = useCallback(() => {
    clearTimer();
    setIsOpponentTypingTyping(true);
    setTimer();
  }, []);

  const handleOnEndTyping = useCallback(() => {
    clearTimer();
    setIsOpponentTypingTyping(false);
  }, []);

  useEffect(() => {
    setDefaultMessages(chat);
  }, []);

  useEffect(() => {
    socket.emit('enterChatRoom', roomId, myId);
    socket.on('receiveMessage', handleReceiveMessage);
    socket.on('onTyping', handleOnTyping);
    socket.on('onEndTyping', handleOnEndTyping);

    return () => {
      socket.off('receiveMessage', handleReceiveMessage);
      socket.off('onTyping', handleOnTyping);
      socket.off('onEndTyping', handleOnEndTyping);
    };
  }, [socket]);

  return (
    <ChatRoomContainer>
      {/* <Header opponent={opponent} /> */}
      <MessageArea
        roomId={roomId}
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
        roomId={roomId}
        setHasBadWord={setHasBadWord}
        input={input}
        setInput={setInput}
        myId={myId}
      />
    </ChatRoomContainer>
  );
}

export default ChatRoom;
