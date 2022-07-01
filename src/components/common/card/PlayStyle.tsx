import React from 'react';
import Chip from '../chip/Chip';

import { Ul } from './style';

function PlayStyle(props) {
  const { playStyles } = props;

  return (
    <Ul>
      {playStyles.map((playStyle) => (
        <Chip size="sm">{playStyle}</Chip>
      ))}
    </Ul>
  );
}

export default PlayStyle;
