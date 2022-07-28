import React, { useContext } from 'react';
import { useQueryClient } from 'react-query';
import { SocketContext } from '../../contexts/socket';
import { Typography } from '../common';
import {
  ButtonWrapper,
  Notice,
  QuickChatContainer,
  QuickChatSpeechBubble,
  QuickChatSpeechBubbleContainer,
} from './style';

const userId = '62d509be151f1fb3b2e0f792';

function QuickChat() {
  const socket = useContext(SocketContext);

  const roomData = useQueryClient().getQueryData<{
    roomId: string;
    opponent: {
      userId: string;
      profileUrl: string;
      lolNickname: string;
    };
  }>('chatRoom');
  const roomId = roomData?.roomId;

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    const text = (e.target as HTMLElement).innerText;
    socket.emit('sendMessage', roomId, userId, text);
  };

  return (
    <QuickChatContainer>
      <Notice>
        <div>
          <Typography variant="body1" mb={2}>
            고수달님과의 첫 대화에요
          </Typography>
          <Typography variant="captionRegular">이 메시지는 메기님에게만 보여요</Typography>
        </div>
        <Typography variant="body3">
          먼저 이야기 꺼내기 어색하실까봐 저희가 몇가지를 준비했어요. 마음에 드는 문구가 있다면
          눌러서 보내보세요. 고수달님과 영혼의 듀오가 되셨으면 좋겠어요!
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
