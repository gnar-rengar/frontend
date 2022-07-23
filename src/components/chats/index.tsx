import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import { SocketContext } from '../../contexts/socket';
import { Divider } from '../common';
import ChatRoomCard from './ChatRoomCard';
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

function Chats() {
  const [rooms, setRooms] = useState<Room[]>([]);

  const socket = useContext(SocketContext);

  useEffect(() => {
    socket.emit('getChatRooms', '62d509be151f1fb3b2e0f792');

    socket.on('onGetChatRooms', (roomsData: Room[]) => {
      setRooms(roomsData);
    });
  }, [socket]);

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
