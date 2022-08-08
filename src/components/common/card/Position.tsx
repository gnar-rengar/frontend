import Image from 'next/image';
import React from 'react';
import { useTheme } from '@emotion/react';
import { PositionContainer } from './style';

import { positionImgMap } from '../../../constant';
import type { Position as PositionType } from '../../../types/api.type';

interface PositionProps {
  positions: PositionType[];
}

function Position(props: PositionProps) {
  const { positions } = props;

  const {
    icon: {
      size: { lg },
    },
  } = useTheme();

  return (
    <PositionContainer>
      {positions.map((position) => (
        <Image
          key={position}
          src={`/icons/${positionImgMap[position]}`}
          width={lg}
          height={lg}
          alt="position"
        />
      ))}
    </PositionContainer>
  );
}

export default Position;
