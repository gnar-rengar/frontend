import React from 'react';
import { StickyBottomContainer } from './style';

interface StickyBottomProps {
  children: React.ReactNode;
}

function StickyBottom({ children }: StickyBottomProps) {
  return <StickyBottomContainer>{children}</StickyBottomContainer>;
}

export default StickyBottom;
