import React from 'react';
import Chip from '../chip/Chip';

import { Img, Ul } from './style';

function MostChamp(props) {
  const { mostChamps } = props;

  return (
    <Ul>
      {mostChamps.map((position) => (
        <Img src="http://via.placeholder.com/24x24" alt="most-champion" />
      ))}
    </Ul>
  );
}

export default MostChamp;
