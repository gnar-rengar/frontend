import React, { useState, createContext, useEffect } from 'react';
import { io } from 'socket.io-client';

const socket = io(process.env.NEXT_PUBLIC_BASE_URL);
export const SocketContext = createContext(null);

const roomId = '62d565601115b1eb5763d761';

interface SocketProviderProps {
  children: React.ReactNode;
}

function SocketProvider({ children }: SocketProviderProps) {
  const [, setIsConnected] = useState(socket.connected);

  useEffect(() => {
    socket.on('connect', () => {
      setIsConnected(true);
    });

    // TODO socket.on('onGetChatRoom', (data) => console.log(data));

    // TODO socket.on('getChatRooms')

    socket.emit('enterChatRoom', roomId);

    socket.on('disconnect', () => {
      setIsConnected(false);
    });

    return () => {
      socket.off('connect');
      socket.off('disconnect');
    };
  }, [socket]);

  return <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>;
}

export default SocketProvider;
