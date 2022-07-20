import React, { useState, createContext, useEffect } from 'react';
import { useQueryClient } from 'react-query';
import { io } from 'socket.io-client';

const socket = io(process.env.NEXT_PUBLIC_BASE_URL);
export const SocketContext = createContext(null);

const roomId = '62d565601115b1eb5763d761';

const userId1 = '62d509be151f1fb3b2e0f792';
const userId2 = '62d266524bca7feb901a2eac';

function SocketProvider({ children }) {
  const [isConnected, setIsConnected] = useState(socket.connected);

  const queryClient = useQueryClient();

  useEffect(() => {
    socket.on('connect', () => {
      setIsConnected(true);
    });

    // socket.emit('makeChatRoom', userId1, userId2);

    // socket.emit('sendMessage', roomId, userId1, '썩은김치 짱짱맨');

    socket.on('onGetChatRom', (data) => console.log(data));

    queryClient.setQueryData('chatRoom', {
      roomId: '62d565601115b1eb5763d761',
      userId1: '62d509be151f1fb3b2e0f792',
      userId2: '62d266524bca7feb901a2eac',
    });

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
