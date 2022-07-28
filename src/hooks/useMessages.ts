import { useState } from 'react';
import { Messages, ReceivedMessage } from '../types/api.type';

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
