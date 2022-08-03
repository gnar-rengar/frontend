import React from 'react';
import { Asking, Review } from '../common';

import type { Review as ReviewType } from '../../types/api.type';

interface ReviewSectionProps {
  goodReview: ReviewType[];
  lolNickname: string;
}

function ReviewSection(props: ReviewSectionProps) {
  const { goodReview, lolNickname } = props;

  return (
    <section>
      <Asking title={`${lolNickname}님이 받은 칭찬`}>
        <Review reviews={goodReview} />
      </Asking>
    </section>
  );
}

export default ReviewSection;
