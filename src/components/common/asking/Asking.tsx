import React from 'react';
import Typography from '../typography/Typography';
import { AskingContainer, TitleContainer } from './Asking.style';

interface AskingProps {
  title: string;
  caption: string;
  children: React.ReactNode;
}

function Asking(props: AskingProps) {
  const { title, caption, children } = props;

  return (
    <AskingContainer>
      <TitleContainer>
        <Typography variant="h3" align="left">
          {title}
        </Typography>
        <Typography variant="caption">{caption}</Typography>
      </TitleContainer>
      {children}
    </AskingContainer>
  );
}

export default Asking;
