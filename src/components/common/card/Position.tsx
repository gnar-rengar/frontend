import React from 'react';

import { Ul } from './style';

function Position(props) {
  const { positions } = props;

  return (
    <Ul>
      {positions.map((position) => (
        <img src="http://via.placeholder.com/24x24" alt="position" />
      ))}
    </Ul>
  );
}

export default Position;
