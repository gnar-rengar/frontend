import React from 'react';
import { CardProps } from '../../../types/card.type';

import ImageArea from './ImageArea';
import InfoArea from './InfoArea';

import { StyledCard } from './style';

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
