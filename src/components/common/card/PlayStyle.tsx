import React from 'react';
import Chip from '../chip/Chip';

import { Ul } from './style';

interface PlayStyleProps {
  playStyles: string[];
}

function PlayStyle(props: PlayStyleProps) {
  const { playStyles } = props;

  const threePlaystyles = playStyles.slice(0, 3);

  return (
    <Ul>
      {threePlaystyles.map((playStyle) => (
        <li key={playStyle}>
          <Chip size="sm">{playStyle}</Chip>
        </li>
      ))}
    </Ul>
  );
}

export default PlayStyle;
