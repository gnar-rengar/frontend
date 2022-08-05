/* eslint-disable operator-linebreak */
import React, { useCallback, useEffect, useRef } from 'react';
import Chip from '../chip/Chip';

import { Ul } from './style';

interface PlayStyleProps {
  playStyles: string[];
  type?: 'card' | 'recommand';
  ulRef: React.MutableRefObject<HTMLUListElement>;
}

function PlayStyle(props: PlayStyleProps) {
  const { playStyles, type = 'card', ulRef } = props;

  // const copyPlaystyles =
  //   type === 'card' ? [...playStyles.slice(0, 3)] : [...playStyles.slice(0, 3), '...'];

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
