import React from 'react';
import { Hr } from './Divider.style';

import type { ColorVariant } from '../../../types/color.type';

export interface DividerProps {
  size?: string;
  width?: string;
  color?: ColorVariant;
}

function Divider(props: DividerProps) {
  return <Hr {...props} />;
}

Divider.defaultProps = {
  size: '1px',
  width: '100%',
  color: 'surface',
};

export default Divider;
