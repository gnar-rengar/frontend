import Link from 'next/link';
import React from 'react';
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
    id: '1',
    profileUrl: 'http://ddragon.leagueoflegends.com/cdn/12.12.1/img/profileicon/588.png',
    name: '미친놈',
    timeStamp: new Date().getTime(),
    message:
      '자기야 전화 받아 자기야 전화 받아 자기야 전화 받아 자기야 전화 받아자기야 전화 받아 자기야 전화 받아 자기야 전화 받아 자기야 전화 받아 ',
    unRead: 999,
  },
  {
    id: '1',
    profileUrl: 'http://ddragon.leagueoflegends.com/cdn/12.12.1/img/profileicon/588.png',
    name: '페부장',
    timeStamp: new Date().getTime(),
    message: '죽었다람쥐. 어.. 아닌가렌?',
    unRead: 1,
  },
];

function Chats() {
  return (
    <ChatContainer>
      <Divider />
      {chatrooms.map((room) => (
        <>
          <Link href={`chat/${room.id}`}>
            <a>
              <ChatRoomCard room={room} />
            </a>
          </Link>
          <Divider />
        </>
      ))}
    </ChatContainer>
  );
}

export default Chats;
