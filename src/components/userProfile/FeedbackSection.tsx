import React from 'react';
import { Typography } from '../common';

import type { Feedback } from '../../types/api.type';
import FeedBack from '../myPage/FeedBack';

interface FeedbackSectionProps {
  goodFeedback: Feedback[];
}

function FeedbackSection({ goodFeedback }: FeedbackSectionProps) {
  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        padding: '16px 0',
      }}
    >
      <Typography variant="h3">고수달님이 받은 칭찬</Typography>
      {goodFeedback.map((feedback) => (
        <FeedBack feedback={feedback} />
      ))}
      <div />
    </section>
  );
}

export default FeedbackSection;
