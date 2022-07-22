import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import { SocketContext } from '../../contexts/socket';
import { Divider } from '../common';
import ChatRoomCard from './ChatRoomCard';
import { ChatContainer } from './style';

const chatrooms = [
  {
    id: '1',
    profileUrl: 'http://ddragon.leagueoflegends.com/cdn/12.12.1/img/profileicon/588.png',
    name: '고수달',
    timeStamp: new Date().getTime(),
    message: '아 ㅋㅋ 유미 없냐',
    unRead: 10,
  },
  {
    id: '2',
    profileUrl: 'http://ddragon.leagueoflegends.com/cdn/12.12.1/img/profileicon/588.png',
    name: '미친놈',
    timeStamp: new Date().getTime(),
    message:
      '자기야 전화 받아 자기야 전화 받아 자기야 전화 받아 자기야 전화 받아자기야 전화 받아 자기야 전화 받아 자기야 전화 받아 자기야 전화 받아 ',
    unRead: 999,
  },
  {
    id: '3',
    profileUrl: 'http://ddragon.leagueoflegends.com/cdn/12.12.1/img/profileicon/588.png',
    name: '페부장',
    timeStamp: new Date().getTime(),
    message: '죽었다람쥐. 어.. 아닌가렌?',
    unRead: 1,
  },
];

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
    socket.emit('getChatRoom', '62d509be151f1fb3b2e0f792');

    socket.on('onGetChatRoom', (roomsData: Room[]) => {
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
