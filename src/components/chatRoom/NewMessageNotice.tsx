import React from 'react';
import { useTheme } from '@emotion/react';
import Image from 'next/image';

import { Typography } from '../common';
import { NewMessageNoticeWrapper } from './style';

interface NewMessageNoticeProps {
  setIsNewMsgNoticeShown: React.Dispatch<React.SetStateAction<boolean>>;
  scrollToBottom: () => void;
  children: string;
}

function NewMessageNotice(props: NewMessageNoticeProps) {
  const { setIsNewMsgNoticeShown, scrollToBottom, children } = props;

  const {
    icon: {
      size: { lg },
    },
  } = useTheme();

  const handleClick = () => {
    setIsNewMsgNoticeShown(false);
    scrollToBottom();
  };

  return (
    <NewMessageNoticeWrapper onClick={handleClick}>
      <Typography variant="body2" color="onSurface">
        {children}
      </Typography>
      <Image src="/icons/chevron-down.svg" width={lg} height={lg} />
    </NewMessageNoticeWrapper>
  );
}

export default NewMessageNotice;
