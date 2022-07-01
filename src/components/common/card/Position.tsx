import React from 'react';
import { Ul } from './style';

interface PositionProps {
  positions: string[];
}

function Position(props: PositionProps) {
  const { positions } = props;

  return (
    <Ul>
      {positions.map((position) => (
        <img key={position} src="http://via.placeholder.com/24x24" alt="position" />
      ))}
    </Ul>
  );
}

export default Position;
