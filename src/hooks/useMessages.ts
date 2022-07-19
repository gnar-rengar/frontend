import { useState, useContext, useEffect } from 'react';
import dayjs from 'dayjs';
import { SocketContext } from '../components/SocketProvider';

export type Message = { userId: string; text: string; createdAt: string };
export type Messages = { [key in string]: Message[] };
export type AddMessage = (id: string, message: string) => void;

function useMessages(): [Messages, AddMessage] {
  const socket = useContext(SocketContext);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('onEnterChatRoom', (data) => {
      const defaultMessages = data.reduce((prev, crnt) => {
        const [date, message] = Object.entries(crnt)[0];
        prev[date] = message;
        return prev;
      }, {});
      setMessages(defaultMessages);
    });
  }, []);

  const addMessage: AddMessage = (id: string, message: string) => {
    const timestamp = new Date().getTime();
    const date = dayjs(timestamp).format('YYYY년 M월 D일');
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
