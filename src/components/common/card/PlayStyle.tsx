import React from 'react';
import Chip from '../chip/Chip';

import { Ul } from './style';

interface PlayStyleProps {
  playStyles: string[];
  ulRef: React.MutableRefObject<HTMLUListElement>;
}

function PlayStyle(props: PlayStyleProps) {
  const { playStyles, ulRef } = props;

  return (
    <Ul ref={ulRef}>
      {playStyles.map((playStyle) => (
        <li key={playStyle}>
          <Chip size="sm">{playStyle}</Chip>
        </li>
      ))}
      {playStyles.length <= 3 && (
        <li>
          <Chip size="sm">...</Chip>
        </li>
      )}
    </Ul>
  );
}

export default PlayStyle;
