import React from 'react';
import { StyledBaseContainer } from './style';

interface BaseContainerProps {
  children: React.ReactNode;
}

function BaseContainer({ children }: BaseContainerProps) {
  return <StyledBaseContainer>{children}</StyledBaseContainer>;
}

export default BaseContainer;
