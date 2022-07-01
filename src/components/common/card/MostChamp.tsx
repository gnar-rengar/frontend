import React from 'react';
import { Img, Ul } from './style';

interface MostChampProps {
  mostChamps: string[];
}

function MostChamp(props: MostChampProps) {
  const { mostChamps } = props;

  return (
    <Ul>
      {mostChamps.map((mostChamp) => (
        <Img key={mostChamp} src="http://via.placeholder.com/24x24" alt="most-champion" />
      ))}
    </Ul>
  );
}

export default MostChamp;
