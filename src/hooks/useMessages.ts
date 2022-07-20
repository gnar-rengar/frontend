import { useState } from 'react';

export type Message = { userId: string; text: string; createdAt: string };
export type Messages = { [key in string]: Message[] };
export type ReceivedMessage = Message & { date: string; isRead: boolean; updatedAt: string };
export type AddMessage = (message: ReceivedMessage) => void;

function useMessages(): [Messages, AddMessage, React.Dispatch<React.SetStateAction<Messages>>] {
  const [messages, setMessages] = useState<Messages>({});

  const addMessage: AddMessage = (message) => {
    const { userId, date, text, createdAt } = message;
    const newMessage = { userId, createdAt, text };

    setMessages((msgs) => {
      if (msgs[date]) {
        return { ...msgs, [date]: [...msgs[date], newMessage] };
      }
      return { ...msgs, [date]: [newMessage] };
    });
  };

  return [messages, addMessage, setMessages];
}

export default useMessages;
