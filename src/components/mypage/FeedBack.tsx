import React from 'react';
import { Typography } from '../common';
import People from '../icons/People';

interface FeedBackProps {
  feedback: {
    [key in string]: number;
  };
}

function FeedBack(props: FeedBackProps) {
  const { feedback } = props;

  const [description, count] = Object.entries(feedback)[0];

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
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
    </div>
  );
}

export default FeedBack;
