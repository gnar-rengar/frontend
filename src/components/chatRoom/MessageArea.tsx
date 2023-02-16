import React, { useCallback, useEffect, useRef, useState } from 'react';

import BadWordAlert from './BadWordAlert';
import DayDivider from './DayDivider';
import Message from './Message';
import QuickChat from './QuickChat';
import NewMessageNotice from './NewMessageNotice';

import { MessageAreaContainer } from './style';

import type { Messages } from '../../types/api.type';

const INPUT_AREA_HEIGHT = 48;

interface MessageProps {
  roomId: string;
  messages: Messages;
  newReceivedMessage: string;
  hasBadWord: boolean;
  setHasBadWord: React.Dispatch<React.SetStateAction<boolean>>;
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  myId: string;
  lolNickname: string;
  sendMessage: (message: string) => void;
}

function MessageArea(props: MessageProps) {
  const {
    roomId,
    messages,
    newReceivedMessage,
    hasBadWord,
    setHasBadWord,
    input,
    setInput,
    myId,
    lolNickname,
    sendMessage,
  } = props;

  const [isNewMsgNoticeShown, setIsNewMsgNoticeShown] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => scrollRef.current.scrollIntoView(), [scrollRef.current]);

  const isNewMsgOutOfSight =
    containerRef.current &&
    typeof window === 'object' &&
    window.scrollY - INPUT_AREA_HEIGHT < containerRef.current.clientHeight - window.innerHeight;

  useEffect(() => {
    if (isNewMsgOutOfSight) return;
    scrollToBottom();
  }, [messages, hasBadWord]);

  useEffect(() => {
    if (newReceivedMessage.length > 0 && isNewMsgOutOfSight) {
      setIsNewMsgNoticeShown(true);
    }
  }, [newReceivedMessage]);

  useEffect(() => {
    const hideNewMsgNotice = () => {
      if (containerRef.current.clientHeight <= window.innerHeight + window.scrollY) {
        setIsNewMsgNoticeShown(false);
      }
    };

    window.addEventListener('scroll', hideNewMsgNotice);

    return () => window.removeEventListener('scroll', hideNewMsgNotice);
  }, []);

  return (
    <MessageAreaContainer ref={containerRef}>
      {Object.keys(messages).length === 0 && !hasBadWord ? (
        <QuickChat roomId={roomId} lolNickname={lolNickname} sendMessage={sendMessage} />
      ) : (
        Object.entries(messages as Messages).map(([date, msgs]) => (
          <React.Fragment key={date}>
            <DayDivider>{date}</DayDivider>
            {msgs.map((message) => (
              <Message key={message.createdAt} myId={myId} message={message} />
            ))}
          </React.Fragment>
        ))
      )}
      {hasBadWord && (
        <BadWordAlert
          setHasBadWord={setHasBadWord}
          input={input}
          setInput={setInput}
          sendMessage={sendMessage}
        />
      )}
      <div ref={scrollRef} />
      {isNewMsgNoticeShown && (
        <NewMessageNotice
          setIsNewMsgNoticeShown={setIsNewMsgNoticeShown}
          scrollToBottom={scrollToBottom}
        >
          {newReceivedMessage}
        </NewMessageNotice>
      )}
    </MessageAreaContainer>
  );
}

export default MessageArea;
