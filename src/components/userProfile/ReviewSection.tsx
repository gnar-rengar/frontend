import React from 'react';
import { Asking, Review } from '../common';

import type { Review as FeedbackType } from '../../types/api.type';

interface FeedbackSectionProps {
  goodFeedback: FeedbackType[];
}

function FeedbackSection({ goodFeedback }: FeedbackSectionProps) {
  return (
    <section>
      <Asking title="고수달님이 받은 칭찬">
        <Review reviews={goodFeedback} />
      </Asking>
    </section>
  );
}

export default FeedbackSection;
