import React from 'react';
import Chip from '../chip/Chip';

import { Ul } from './style';

interface PlayStyleProps {
  playStyles: string[];
}

function PlayStyle(props: PlayStyleProps) {
  const { playStyles } = props;

  return (
    <Ul>
      {playStyles.map((playStyle) => (
        <Chip key={playStyle} size="sm">
          {playStyle}
        </Chip>
      ))}
    </Ul>
  );
}

export default PlayStyle;
