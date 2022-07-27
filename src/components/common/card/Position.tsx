import Image from 'next/image';
import React from 'react';
import { useTheme } from '@emotion/react';
import { PositionContainer } from './style';

import type { Position as PositionType } from '../../../types/api.type';

const positionImgMap: { [key in PositionType]: string } = {
  탑: 'position_top.png',
  정글: 'position_jug.png',
  미드: 'position_mid.png',
  원딜: 'position_bot.png',
  서폿: 'position_sup.png',
};

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
