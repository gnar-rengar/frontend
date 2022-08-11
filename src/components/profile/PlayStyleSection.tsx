import { useTheme } from '@emotion/react';
import Image from 'next/image';
import React from 'react';
import { positionImgMap } from '../../constant';
import { Typography } from '../common';
import { PositionContainer, Section } from './style';

import type { Position } from '../../types/api.type';

interface PlayStyleSectionProps {
  nickname: string;
  positions: Position[];
  playStyles: string[];
  myPlayStyles: string[];
}

function PlayStyleSection(props: PlayStyleSectionProps) {
  const { nickname, positions, playStyles, myPlayStyles } = props;

  const {
    icon: {
      size: { xl },
    },
  } = useTheme();

  return (
    <Section>
      <Typography variant="h3">{`${nickname}님은`}</Typography>
      <PositionContainer>
        {positions.map((position) => (
          <Image
            key={position}
            src={`/icons/${positionImgMap[position]}`}
            layout="fixed"
            width={xl}
            height={xl}
          />
        ))}
        <Typography variant="h3">를 주로 플레이하고</Typography>
      </PositionContainer>
      <div>
        {playStyles.map((playStyle, index) => (
          <Typography
            key={playStyle}
            variant="h3"
            component="span"
            color={playStyle === myPlayStyles[index] ? 'primary' : 'onBackground'}
          >
            {`#${playStyle} `}
          </Typography>
        ))}
      </div>
      <Typography variant="h3">이런 플레이를 선호하는 소환사에요</Typography>
      <Typography variant="captionRegular" color="onBackgroundSub">
        이 중에서 나랑 잘 맞는 부분은
        <Typography variant="captionRegular" component="span" color="primary">
          {' '}
          이 색
        </Typography>
        으로 표현했어요
      </Typography>
    </Section>
  );
}

export default PlayStyleSection;
