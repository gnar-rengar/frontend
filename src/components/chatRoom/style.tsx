import styled from '@emotion/styled';

export const ChatRoomContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 56px);
  height: 1px;
`;

export const MessageAreaContainer = styled.div`
  position: relative;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
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

export const QuickChatContainer = styled.div`
  position: relative;
  top: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px 0;
  gap: 16px;
  transform: translateY(-100%);
`;

export const QuickChatNotice = styled.div`
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

export const Button = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
`;
