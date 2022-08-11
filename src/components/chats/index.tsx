import React, { useCallback, useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { SocketContext } from '../../contexts/socket';

import { Divider } from '../common';
import ChatRoomCard from './ChatRoomCard';
import InValid from './InValid';
import { ChatContainer } from './style';

import type { Room } from '../../types/api.type';
import useGetAuth from '../../hooks/useGetAuth';

function Chats() {
  const { userId } = useGetAuth();
  const [rooms, setRooms] = useState<Room[]>([]);

  const socket = useContext(SocketContext);

  const handleGetChatRooms = useCallback(
    (roomsData: Room[]) => {
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
    },
    [setRooms]
  );

  useEffect(() => {
    socket.emit('getChatRooms', userId);
    socket.on('onGetChatRooms', handleGetChatRooms);
    return () => socket.off('onGetChatRooms', handleGetChatRooms);
  }, [socket]);

  if (rooms.length === 0) {
    return (
      <InValid
        title={'아직 채팅이 없어요\n듀오하고싶은 소환사와 채팅해보세요!'}
        path="/recommend/new"
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
