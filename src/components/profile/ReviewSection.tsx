import React from 'react';
import { Asking, Review, Typography } from '../common';

import type { Review as ReviewType } from '../../types/api.type';
import { Section } from './style';

interface ReviewSectionProps {
  goodReview: ReviewType[];
  lolNickname: string;
}

function ReviewSection(props: ReviewSectionProps) {
  const { goodReview, lolNickname } = props;

  return (
    <Section>
      {goodReview.length > 0 ? (
        <Asking title={`${lolNickname}님은 이런 칭찬을 받았어요`}>
          <Review reviews={goodReview} />
        </Asking>
      ) : (
        <Typography
          variant="h3"
          whiteSpace="pre-line"
        >{`${lolNickname}님은 아직 \n받은 리뷰가 없어요`}</Typography>
      )}
    </Section>
  );
}

export default ReviewSection;
