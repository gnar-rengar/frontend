import React from 'react';
import { Typography } from '../common';
import { DayDividerContainer } from './style';

interface DayDividerProps {
  children: string;
}

function DayDivider({ children }: DayDividerProps) {
  return (
    <DayDividerContainer>
      <Typography variant="captionRegular" align="center" color="onBackground">
        {children}
      </Typography>
    </DayDividerContainer>
  );
}

export default DayDivider;
