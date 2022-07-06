import React from 'react';
import { MyPageDTO } from '../../../types/api.type';

import ImageArea from './ImageArea';
import InfoArea from './InfoArea';

import { StyledCard } from './style';

export type CardProps = Omit<MyPageDTO, 'goodFeedback' | 'badFeedback'>;

function Card(props: CardProps) {
  const { profileUrl, ...other } = props;

  return (
    <StyledCard>
      <ImageArea profileUrl={profileUrl} />
      <InfoArea {...other} />
    </StyledCard>
  );
}

export default Card;
