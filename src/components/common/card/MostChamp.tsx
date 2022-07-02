import Image from 'next/image';
import React from 'react';
import { CircleImgWrapper, Ul } from './style';

interface MostChampProps {
  mostChamps: string[];
}

function MostChamp(props: MostChampProps) {
  const { mostChamps } = props;

  return (
    <Ul>
      {mostChamps.map((mostChamp) => (
        <CircleImgWrapper>
          <Image
            key={mostChamp}
            src="http://via.placeholder.com/24x24"
            alt="most-champion"
            width="24"
            height="24"
            loading="eager"
          />
        </CircleImgWrapper>
      ))}
    </Ul>
  );
}

export default MostChamp;
