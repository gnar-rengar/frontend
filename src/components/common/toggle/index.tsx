import React from 'react';
import { Circle, ToggleContainer } from './style';

interface ToggleProps {
  on?: boolean;
  onClick?: () => void;
}

function Toggle(props: ToggleProps) {
  const { on = false, onClick } = props;

  return (
    <ToggleContainer on={on} onClick={onClick}>
      <Circle on={on} />
    </ToggleContainer>
  );
}

export default Toggle;
