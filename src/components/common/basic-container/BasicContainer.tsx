import React from 'react';

interface BasicContainerProps {
  children: React.ReactNode;
}

function BasicContainer({ children }: BasicContainerProps) {
  return <div style={{ padding: '16px 0' }}>{children}</div>;
}

export default BasicContainer;
