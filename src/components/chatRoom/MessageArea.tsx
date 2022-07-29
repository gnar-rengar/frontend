import React, { useCallback, useEffect, useRef, useState } from 'react';

import BadWordAlert from './BadWordAlert';
import DayDivider from './DayDivider';
import Message from './Message';
import QuickChat from './QuickChat';
import Typing from './Typing';
import NewMessageNotice from './NewMessageNotice';

import { MessageAreaContainer, OpponentSpeechBubble } from './style';

import type { Messages } from '../../types/api.type';

const INPUT_AREA_HEIGHT = 48;

interface MessageProps {
  messages: Messages;
  newReceivedMessage: string;
  hasBadWord: boolean;
  setHasBadWord: React.Dispatch<React.SetStateAction<boolean>>;
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  isOpponentTyping: boolean;
  userId: string;
}

function MessageArea(props: MessageProps) {
  const {
    messages,
    newReceivedMessage,
    hasBadWord,
    setHasBadWord,
    input,
    setInput,
    isOpponentTyping,
    userId,
  } = props;

  const [isNewMsgNoticeShown, setIsNewMsgNoticeShown] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => scrollRef.current.scrollIntoView(), [scrollRef.current]);

  //! 헤더 수정 후 업데이트 필요
  const isNewMsgOutOfSight =
    containerRef.current &&
    typeof window === 'object' &&
    containerRef.current.clientHeight - (window.innerHeight - INPUT_AREA_HEIGHT) * 2 >=
      window.scrollY - INPUT_AREA_HEIGHT;

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

  //! 메시지 업데이트마다 정렬하지 않아도 순서가 유지되는지 검증 필요.
  //! 유지되지 않는다면 여기서 정렬해야 함.
  // const sortedMessages = useMemo(() => sortByKey(messages), [messages]);

  return (
    <MessageAreaContainer ref={containerRef}>
      {Object.keys(messages).length > 0 || hasBadWord ? (
        Object.entries(messages as Messages).map(([date, msgs]) => (
          <React.Fragment key={date}>
            <DayDivider>{date}</DayDivider>
            {msgs.map((message) => (
              <Message key={message.createdAt} message={message} />
            ))}
          </React.Fragment>
        ))
      ) : (
        <QuickChat userId={userId} />
      )}
      {isOpponentTyping && (
        <OpponentSpeechBubble>
          <Typing />
        </OpponentSpeechBubble>
      )}
      <div ref={scrollRef}>
        {hasBadWord && (
          <BadWordAlert
            setHasBadWord={setHasBadWord}
            input={input}
            setInput={setInput}
            userId={userId}
          />
        )}
      </div>
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
