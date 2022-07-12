import React from 'react';
import { PositionContainer } from './style';

interface PositionProps {
  positions: string[];
}

function Position(props: PositionProps) {
  const { positions } = props;

  return (
    <PositionContainer>
      {positions.map((position) => (
        <img key={position} src="http://via.placeholder.com/24x24" alt="position" />
      ))}
    </PositionContainer>
  );
}

export default Position;
