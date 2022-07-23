import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { SocketContext } from '../../contexts/socket';
import { Divider } from '../common';
import ChatRoomCard from './ChatRoomCard';
import InValid from './InValid';
import { ChatContainer } from './style';

type Room = {
  roomId: string;
  userId: string;
  lolNickname: string;
  profileUrl: string;
  lastMessageText: string;
  lastMessagedTime: string;
  unRead: number;
};

const isLoggedIn = true;

function Chats() {
  const [rooms, setRooms] = useState<Room[]>([]);

  const socket = useContext(SocketContext);

  useEffect(() => {
    socket.emit('getChatRooms', '62d509be151f1fb3b2e0f792');

    socket.on('onGetChatRooms', (roomsData: Room[]) => {
      roomsData.sort((room1, room2) => {
        if (!room1.unRead && room2.unRead) {
          return 1;
        }
        if (room1.unRead && !room2.unRead) {
          return -1;
        }

        return (
          new Date(room2.lastMessagedTime).getTime() - new Date(room1.lastMessagedTime).getTime()
        );
      });

      setRooms(roomsData);
    });
  }, [socket]);

  if (!isLoggedIn) {
    return (
      <InValid title={'로그인 후\n채팅 목록을 확인해보세요!'} path="/login" buttonText="로그인" />
    );
  }

  if (rooms.length === 0) {
    return (
      <InValid
        title={'아직 채팅이 없어요\n듀오하고싶은 소환사와 채팅해보세요!'}
        path="/"
        buttonText="듀오 찾으러 가기"
      />
    );
  }

  return (
    <ChatContainer>
      <Divider />
      {rooms.map((room) => (
        <React.Fragment key={room.roomId}>
          <Link href={`chats/${room.roomId}`}>
            <a>
              <ChatRoomCard room={room} />
            </a>
          </Link>
          <Divider />
        </React.Fragment>
      ))}
    </ChatContainer>
  );
}

export default Chats;
