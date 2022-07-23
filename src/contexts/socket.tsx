import React, { useState, createContext, useEffect } from 'react';
import { io } from 'socket.io-client';

const socket = io(process.env.NEXT_PUBLIC_BASE_URL);
export const SocketContext = createContext(null);

interface SocketProviderProps {
  children: React.ReactNode;
}

function SocketProvider({ children }: SocketProviderProps) {
  const [, setIsConnected] = useState(socket.connected);

  useEffect(() => {
    socket.on('connect', () => {
      setIsConnected(true);
    });

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
