import React, { useCallback, useContext, useEffect, useState } from 'react';
import useGetMessages from '../../hooks/useGetMessages';
import useMessages from '../../hooks/useMessages';
import useGetAuth from '../../hooks/useGetAuth';

import { SocketContext } from '../../contexts/socket';

import InputArea from './InputArea';
import MessageArea from './MessageArea';
import { ChatRoomContainer } from './style';

import { useTimer } from '../../utils';

import type { ReceivedMessage } from '../../types/api.type';

interface ChatRoomProps {
  roomId: string;
}

function ChatRoom(props: ChatRoomProps) {
  const { roomId } = props;
  const { userId: myId, lolNickname } = useGetAuth();

  const { chat: defaultMessages } = useGetMessages(roomId);
  const [messages, addMessage] = useMessages(defaultMessages);
  const [newReceivedMessage, setNewReceivedMessage] = useState('');

  const [input, setInput] = useState('');
  const [hasBadWord, setHasBadWord] = useState(false);

  const [isOpponentTyping, setIsOpponentTypingTyping] = useState(false);

  const socket = useContext(SocketContext);

  const [setTimer, clearTimer] = useTimer(() => setIsOpponentTypingTyping(false), 5000);

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
      <MessageArea
        roomId={roomId}
        messages={messages}
        newReceivedMessage={newReceivedMessage}
        hasBadWord={hasBadWord}
        setHasBadWord={setHasBadWord}
        input={input}
        setInput={setInput}
        myId={myId}
        lolNickname={lolNickname}
      />
      <InputArea
        roomId={roomId}
        setHasBadWord={setHasBadWord}
        input={input}
        setInput={setInput}
        myId={myId}
        isOpponentTyping={isOpponentTyping}
      />
    </ChatRoomContainer>
  );
}

export default ChatRoom;
