import Image from 'next/image';
import React, { useState } from 'react';
import { RecommandCardContainer, Test } from './style';

function RecommandCard() {
  const [imageUrl, setImageUrl] = useState(
    'http://ddragon.leagueoflegends.com/cdn/12.12.1/img/profileicon/588.png'
  );

  return (
    <RecommandCardContainer>
      <Image src={imageUrl} layout="fill" />
      <Test />
    </RecommandCardContainer>
  );
}

export default RecommandCard;
