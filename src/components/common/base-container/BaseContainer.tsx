import React from 'react';

interface BaseContainerProps {
  children: React.ReactNode;
}

function BaseContainer({ children }: BaseContainerProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', padding: '16px 0 64px' }}>
      {children}
    </div>
  );
}

export default BaseContainer;
