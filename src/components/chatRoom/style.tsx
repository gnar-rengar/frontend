import styled from '@emotion/styled';

export const ChatRoomContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 56px);
`;

export const MessageAreaContainer = styled.div`
  position: relative;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;

  * {
    -moz-user-select: text;
    -webkit-user-select: text;
    -ms-user-select: text;
    user-select: text;
  }
`;

export const MessageContainer = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  gap: 8px;
`;

export const MyMessageContainer = styled(MessageContainer)`
  justify-content: flex-end;
`;

export const OpponentMessageContainer = styled(MessageContainer)`
  justify-content: flex-start;
`;

export const DayDividerContainer = styled.div`
  height: 50px;
  padding: 16px 0;
`;

export const QuickChatContainer = styled.div`
  position: relative;
  top: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px 0;
  gap: 16px;
  transform: translateY(-100%);
`;

export const Notice = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
  background: ${({ theme }) => theme.color.surface};
  border-radius: 8px;
`;

export const SpeechBubble = styled.div`
  padding: 8px 12px;
  max-width: 248px;
  width: fit-content;
  border-radius: 16px;
  word-break: break-all;
`;

export const MySpeechBubble = styled(SpeechBubble)`
  background: ${({ theme }) => theme.color.primary};
`;

export const OpponentSpeechBubble = styled(SpeechBubble)`
  background: ${({ theme }) => theme.color.onBackground};
`;

export const QuickChatSpeechBubble = styled(SpeechBubble)`
  background: ${({ theme }) => theme.color.surface};
  border: 1px solid ${({ theme }) => theme.color.onBackgroundSub};
`;

export const QuickChatSpeechBubbleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
`;

export const Form = styled.form`
  position: sticky;
  bottom: 0;
  margin-left: -16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 48px;
  padding: 4px 16px;
  box-sizing: content-box;
  gap: 8px;
  background: ${({ theme }) => theme.color.surface};
`;

export const Input = styled.input`
  flex-grow: 1;
  height: 40px;
  padding: 0 16px;
  border-radius: 16px;
  outline: none;

  ${({ theme }) => {
    const {
      color,
      typography: { body2 },
    } = theme;

    return `
      font-weight: ${body2.fontWeight};
      font-size: ${body2.fontSize};
      line-height: ${body2.lineHeight};
      color: ${color.surface};
      background: ${color.onSurface};

      &::-webkit-input-placeholder {
        font-weight: ${body2.fontWeight};
        font-size: ${body2.fontSize};
        line-height: ${body2.lineHeight};
        color: ${color.onBackgroundSub};
      }
    `;
  }}
`;

export const ButtonWrapper = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
`;

export const WarningMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 16px;
  justify-content: flex-end;
`;

export const TypingContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 4px;

  div {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: black;
  }
`;

export const NewMessageNoticeWrapper = styled.div`
  position: sticky;
  bottom: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 12px 16px;
  height: 48px;
  background: ${({ theme }) => theme.color.surface};
  border-radius: 16px;
  cursor: pointer;

  & > div {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`;
