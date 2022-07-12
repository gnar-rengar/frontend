import { useTheme } from '@emotion/react';
import Image from 'next/image';
import React from 'react';
import Typography from '../typography/Typography';

import { FeedbackContainer, PeopleCount, StyledFeedback } from './style';

interface FeedbackProps {
  feedbacks: {
    description: string;
    count: number;
  }[];
}

function Feedback(props: FeedbackProps) {
  const { feedbacks } = props;

  const {
    icon: {
      size: { lg },
    },
  } = useTheme();

  return (
    <FeedbackContainer>
      {feedbacks.map((feedback) => (
        <StyledFeedback key={feedback.description}>
          <PeopleCount>
            <Image src="/icons/people.svg" width={lg} height={lg} alt="people icon" />
            <Typography variant="body3" color="onBackgroundSub">
              {`${feedback.count}명`}
            </Typography>
          </PeopleCount>
          <Typography variant="body3" color="onSurface" paragraph>
            {feedback.description}
          </Typography>
        </StyledFeedback>
      ))}
    </FeedbackContainer>
  );
}

export default Feedback;
