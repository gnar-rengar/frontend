import React from 'react';

import { Asking, Feedback } from '../common';

import type { Feedback as FeedbackType } from '../../types/api.type';

interface FeedbackSectionProps {
  goodFeedback: FeedbackType[];
}

function FeedbackSection({ goodFeedback }: FeedbackSectionProps) {
  return (
    <section>
      <Asking title="고수달님이 받은 칭찬">
        <Feedback feedbacks={goodFeedback} />
      </Asking>
    </section>
  );
}

export default FeedbackSection;
