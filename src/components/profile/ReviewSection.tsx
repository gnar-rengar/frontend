import React from 'react';
import { Asking, Review } from '../common';

import type { Review as ReviewType } from '../../types/api.type';

interface FeedbackSectionProps {
  goodReview: ReviewType[];
}

function ReviewSection({ goodReview }: FeedbackSectionProps) {
  return (
    <section>
      <Asking title="고수달님이 받은 칭찬">
        <Review reviews={goodReview} />
      </Asking>
    </section>
  );
}

export default ReviewSection;
