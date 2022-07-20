import { useState, useContext, useEffect } from 'react';
import { SocketContext } from '../components/SocketProvider';

export type Message = { userId: string; text: string; createdAt: string };
export type Messages = { [key in string]: Message[] };
export type ReceivedMessage = Message & { date: string; isRead: boolean; updatedAt: string };
export type AddMessage = (message: ReceivedMessage) => void;

function useMessages(): [Messages, AddMessage] {
  const socket = useContext(SocketContext);
  const [messages, setMessages] = useState<Messages>({});

  useEffect(() => {
    socket.on('onEnterChatRoom', (data: Messages[]) => {
      const defaultMessages = data.reduce((prev, crnt) => {
        const [date, message] = Object.entries(crnt)[0];
        // eslint-disable-next-line no-param-reassign
        prev[date] = message;
        return prev;
      }, {});
      setMessages(defaultMessages);
    });

    socket.on('receiveMessage', (message: ReceivedMessage) => {
      console.log(message);
      // TODO 타이핑 끝남. => ... 애니메이션 종료

      addMessage(message);
    });
  }, [socket]);

  const addMessage: AddMessage = (message) => {
    const { userId, date, text, createdAt } = message;
    const newMessage = { userId, createdAt, text };

    setMessages((msgs) => {
      if (msgs[date]) {
        return { ...msgs, [date]: [...msgs[date], newMessage] };
      }
      return { ...messages, [date]: [newMessage] };
    });
  };
  return [messages as any, addMessage];
}

export default useMessages;
