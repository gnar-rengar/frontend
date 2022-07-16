import dayjs from 'dayjs';
import React from 'react';
import { Typography } from '../common';
import {
  Button,
  QuickChatContainer,
  QuickChatNotice,
  QuickChatSpeechBubble,
  QuickChatSpeechBubbleContainer,
} from './style';

function QuickChat({ setMessages }) {
  const handleClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const target = e.target as HTMLElement;

    const timestamp = new Date().getTime();
    const date = dayjs(timestamp).format('YYYY-MM-DD');
    const newMessage = { id: '1', timestamp, message: target.innerText };
    setMessages((messages) => {
      if (messages[date]) {
        return { ...messages, [date]: [...messages[date], newMessage] };
      }
      return { ...messages, [date]: [newMessage] };
    });
  };

  return (
    <QuickChatContainer>
      <QuickChatNotice>
        <div>
          <Typography variant="body1" mb={2}>
            고수달님과의 첫 대화에요
          </Typography>
          <Typography variant="caption">이 메시지는 메기님에게만 보여요</Typography>
        </div>
        <Typography variant="body3">
          먼저 이야기 꺼내기 어색하실까봐 저희가 몇가지를 준비했어요. 마음에 드는 문구가 있다면
          눌러서 보내보세요. 고수달님과 영혼의 듀오가 되셨으면 좋겠어요!
        </Typography>
      </QuickChatNotice>
      <QuickChatSpeechBubbleContainer>
        <Button onClick={handleClick}>
          <QuickChatSpeechBubble>
            <Typography variant="body2" color="onSurface">
              협곡으로 같이 떠나요!
            </Typography>
          </QuickChatSpeechBubble>
        </Button>
        <Button onClick={handleClick}>
          <QuickChatSpeechBubble>
            <Typography variant="body2" color="onSurface">
              저랑 같이 플레이 하실래요?
            </Typography>
          </QuickChatSpeechBubble>
        </Button>
        <Button onClick={handleClick}>
          <QuickChatSpeechBubble>
            <Typography variant="body2" color="onSurface">
              안녕하세요! 언제 시간 되세요?
            </Typography>
          </QuickChatSpeechBubble>
        </Button>
      </QuickChatSpeechBubbleContainer>
    </QuickChatContainer>
  );
}

export default QuickChat;
