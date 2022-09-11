import React from 'react';
import useGetOpponent from '../../hooks/useGetOpponent';
import { Typography } from '../common';
import {
  ButtonWrapper,
  Notice,
  QuickChatContainer,
  QuickChatSpeechBubble,
  QuickChatSpeechBubbleContainer,
} from './style';

interface QuickChatProps {
  roomId: string;
  lolNickname: string;
  sendMessage: (message: string) => void;
}

function QuickChat(props: QuickChatProps) {
  const { roomId, lolNickname, sendMessage } = props;

  const {
    opponent: { lolNickname: opponentNickname },
  } = useGetOpponent(roomId);

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    const text = (e.target as HTMLElement).innerText;
    sendMessage(text);
  };

  return (
    <QuickChatContainer>
      <Notice>
        <div>
          <Typography variant="body1" mb={2}>
            {opponentNickname}님과의 첫 대화에요
          </Typography>
          <Typography variant="captionRegular">이 메시지는 {lolNickname}님에게만 보여요</Typography>
        </div>
        <Typography variant="body3">
          먼저 이야기 꺼내기 어색하실까봐 저희가 몇가지를 준비했어요. 마음에 드는 문구가 있다면
          눌러서 보내보세요. {opponentNickname}님과 영혼의 듀오가 되셨으면 좋겠어요!
        </Typography>
      </Notice>
      <QuickChatSpeechBubbleContainer>
        <ButtonWrapper onClick={handleClick}>
          <QuickChatSpeechBubble>
            <Typography variant="body2" color="onSurface">
              협곡으로 같이 떠나요!
            </Typography>
          </QuickChatSpeechBubble>
        </ButtonWrapper>
        <ButtonWrapper onClick={handleClick}>
          <QuickChatSpeechBubble>
            <Typography variant="body2" color="onSurface">
              저랑 같이 플레이 하실래요?
            </Typography>
          </QuickChatSpeechBubble>
        </ButtonWrapper>
        <ButtonWrapper onClick={handleClick}>
          <QuickChatSpeechBubble>
            <Typography variant="body2" color="onSurface">
              안녕하세요! 언제 시간 되세요?
            </Typography>
          </QuickChatSpeechBubble>
        </ButtonWrapper>
      </QuickChatSpeechBubbleContainer>
    </QuickChatContainer>
  );
}

export default QuickChat;
