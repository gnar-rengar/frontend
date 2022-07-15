/* eslint-disable operator-linebreak */
import React from 'react';
import Chip from '../chip/Chip';

import { Ul } from './style';

interface PlayStyleProps {
  playStyles: string[];
  type?: 'card' | 'recommand';
}

function PlayStyle(props: PlayStyleProps) {
  const { playStyles, type = 'card' } = props;

  const copyPlaystyles =
    type === 'card' ? [...playStyles.slice(0, 3)] : [...playStyles.slice(0, 3), '...'];

  return (
    <Ul>
      {copyPlaystyles.map((playStyle) => (
        <li key={playStyle}>
          <Chip size="sm">{playStyle}</Chip>
        </li>
      ))}
    </Ul>
  );
}

export default PlayStyle;
