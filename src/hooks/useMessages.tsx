import { useState } from 'react';
import dayjs from 'dayjs';

export type Message = { id: string; timestamp: number; message: string };
export type Messages = { [key in string]: Message[] };
export type AddMessage = (id: string, message: string) => void;

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

function useMessages(): [Messages, AddMessage] {
  const [messages, setMessages] = useState<Messages>(defaultMessages);

  const addMessage: AddMessage = (id: string, message: string) => {
    const timestamp = new Date().getTime();
    const date = dayjs(timestamp).format('YYYY-MM-DD');
    const newMessage = { id, timestamp, message };

    setMessages((msgs) => {
      if (msgs[date]) {
        return { ...msgs, [date]: [...msgs[date], newMessage] };
      }
      return { ...messages, [date]: [newMessage] };
    });
  };
  return [messages, addMessage];
}

export default useMessages;
