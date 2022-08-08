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
      <Asking title={`${lolNickname}님은 이런 칭찬을 받았어요`}>
        <Review reviews={goodReview} />
      </Asking>
    </section>
  );
}

export default ReviewSection;
