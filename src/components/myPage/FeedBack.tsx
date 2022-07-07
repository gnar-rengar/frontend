import { useTheme } from '@emotion/react';
import Image from 'next/image';
import React from 'react';
import { Typography } from '../common';

import { PeopleCount, StyledFeedback } from './style';

interface FeedBackProps {
  feedback: {
    description: string;
    count: number;
  };
}

function FeedBack(props: FeedBackProps) {
  const {
    feedback: { description, count },
  } = props;

  const {
    icon: {
      size: { lg },
    },
  } = useTheme();

  return (
    <StyledFeedback>
      <PeopleCount>
        <Image src="/icons/people.svg" width={lg} height={lg} alt="people icon" />
        <Typography variant="body3" color="onBackgroundSub">
          {`${count}명`}
        </Typography>
      </PeopleCount>
      <Typography variant="body3" color="onSurface" paragraph>
        {description}
      </Typography>
    </StyledFeedback>
  );
}

export default FeedBack;
