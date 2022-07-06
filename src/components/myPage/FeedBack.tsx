import Image from 'next/future/image';
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

  return (
    <StyledFeedback>
      <PeopleCount>
        <Image src="/icons/people.svg" alt="people icon" />
        <Typography variant="body3" color="onBackgroundSub">
          {`${count}명`}
        </Typography>
      </PeopleCount>
      <Typography variant="body3" color="onSurface">
        {description}
      </Typography>
    </StyledFeedback>
  );
}

export default FeedBack;
