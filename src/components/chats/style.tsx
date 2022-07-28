import styled from '@emotion/styled';

export const ChatContainer = styled.div`
  padding: 16px 0;
`;

export const ChatRoomCardContainer = styled.div`
  display: flex;
  padding: 16px 0;
  width: 100%;
  gap: 16px;
  cursor: pointer;

  & > span {
    flex-shrink: 0;
    border-radius: 50%;
  }
`;

export const InfoArea = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  white-space: nowrap;
`;

export const NameAndTime = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MessageAndCount = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
`;

export const Message = styled.div`
  overflow: hidden;
`;

export const RecentMessageCount = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${({ theme: { color } }) => color.surface};
`;

export const InValidContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 24px;
  transform: translate(-50%, -50%);
`;
