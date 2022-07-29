import React from 'react';
import { useTheme } from '@emotion/react';
import Image from 'next/image';
import Typography from '../typography/Typography';
import { PeopleCount, ReviewContainer, StyledReview } from './style';

export interface ReviewProps {
  reviews: {
    description: string;
    count: number;
  }[];
}

function Review(props: ReviewProps) {
  const { reviews } = props;

  const {
    icon: {
      size: { lg },
    },
  } = useTheme();

  return (
    <ReviewContainer>
      {reviews.map((review) => (
        <StyledReview key={review.description}>
          <PeopleCount>
            <Image src="/icons/people.svg" width={lg} height={lg} alt="people icon" />
            <Typography variant="body3" color="onBackgroundSub">
              {`${review.count}명`}
            </Typography>
          </PeopleCount>
          <Typography variant="body3" color="onSurface" paragraph>
            {review.description}
          </Typography>
        </StyledReview>
      ))}
    </ReviewContainer>
  );
}

export default Review;
