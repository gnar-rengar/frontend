import React from 'react';
import { ImgWrapper, Ul } from './style';

interface MostChampProps {
  mostChamps: { name: string; url: string }[];
}

function MostChamp(props: MostChampProps) {
  const { mostChamps } = props;

  return (
    <Ul>
      {mostChamps.map((mostChamp) => (
        <ImgWrapper>
          <img
            key={mostChamp.name}
            src={mostChamp.url}
            alt="most-champion"
            width="24"
            height="24"
          />
        </ImgWrapper>
      ))}
    </Ul>
  );
}

export default MostChamp;
