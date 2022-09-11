import { useState } from 'react';
import { Messages, ReceivedMessage } from '../types/api.type';

export type AddMessage = (message: ReceivedMessage) => void;

function useMessages(defaultMessages: Messages[]): [Messages, AddMessage] {
  const [messages, setMessages] = useState<Messages>(setDefaultMessages(defaultMessages));
  console.log(defaultMessages, messages);
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

  return [messages, addMessage];
}

export default useMessages;

const setDefaultMessages = (msgs: Messages[]) => {
  msgs.sort(
    (a, b) =>
      new Date(...(Object.keys(a)[0].match(/\d+/g) as [])).getTime() -
      new Date(...(Object.keys(b)[0].match(/\d+/g) as [])).getTime()
  );

  return msgs.reduce((prev, crnt) => {
    const [date, message] = Object.entries(crnt)[0];
    // eslint-disable-next-line no-param-reassign
    prev[date] = message;
    return prev;
  }, {});
};
