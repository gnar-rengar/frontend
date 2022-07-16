import dayjs from 'dayjs';
import React, { useState } from 'react';
import InputArea from './InputArea';
import MessageArea from './MessageArea';
import { ChatRoomContainer } from './style';

const defaultMessages = {
  // '2022-07-15': [
  //   { id: '1', timestamp: dayjs('2022/07/15 10:30').unix(), message: '반가워요' },
  //   { id: '2', timestamp: dayjs('2022/07/15 11:00').unix(), message: '안녕' },
  //   { id: '2', timestamp: dayjs('2022/07/15 11:02').unix(), message: '봇듀오 가실래요?' },
  // ],
  // '2022-07-16': [
  //   { id: '1', timestamp: dayjs('2022/07/15 10:30').unix(), message: '오늘도 ㄱㄱ?' },
  //   { id: '2', timestamp: dayjs('2022/07/15 11:00').unix(), message: 'ㅇㅋㅇㅋ' },
  //   { id: '1', timestamp: dayjs('2022/07/15 11:02').unix(), message: '롤챗 들어오셈' },
  // ],
};

function ChatRoom() {
  const [messages, setMessages] = useState(defaultMessages);

  return (
    <ChatRoomContainer>
      <MessageArea messages={messages} setMessages={setMessages} />
      <InputArea setMessages={setMessages} />
    </ChatRoomContainer>
  );
}

export default ChatRoom;
