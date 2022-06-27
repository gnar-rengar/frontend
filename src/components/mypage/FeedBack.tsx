import React from 'react';
import { Typography } from '../common';
import People from '../icons/People';
import { StyledFeedback } from './style';

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
      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
        <People />
        <Typography variant="body3" color="onBackgroundSub">
          {`${count}명`}
        </Typography>
      </div>
      <div>
        <Typography variant="body3" color="onSurface">
          {description}
        </Typography>
      </div>
    </StyledFeedback>
  );
}

export default FeedBack;
