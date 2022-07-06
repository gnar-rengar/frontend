import React from 'react';
import { Typography } from '../common';
import People from '../icons/People';

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
        <People />
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
