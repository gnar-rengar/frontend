import React from 'react';

interface PositionProps {
  positions: string[];
}

function Position(props: PositionProps) {
  const { positions } = props;

  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      {positions.map((position) => (
        <img key={position} src="http://via.placeholder.com/24x24" alt="position" />
      ))}
    </div>
  );
}

export default Position;
