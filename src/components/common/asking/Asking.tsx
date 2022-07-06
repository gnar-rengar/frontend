import React from 'react';
import Typography from '../typography/Typography';
import { AskingContainer, TitleContainer } from './Asking.style';

interface AskingProps {
  title: string;
  caption: string;
  children: React.ReactNode;
}

// TODO 컴포넌트명 변경
function Asking(props: AskingProps) {
  const { title, caption, children } = props;

  return (
    <AskingContainer>
      <TitleContainer>
        <Typography variant="h3" align="left" paragraph>
          {title}
        </Typography>
        <Typography variant="caption" paragraph>
          {caption}
        </Typography>
      </TitleContainer>
      {children}
    </AskingContainer>
  );
}

export default Asking;
