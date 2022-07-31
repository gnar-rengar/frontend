import React from 'react';
import { Typography } from '../common';
import { Section } from './style';

interface PlayStyleSectionProps {
  nickname: string;
  positions: string[];
  playStyles: string[];
}

const synergy = ['교전지향', '올라운더'];

function PlayStyleSection(props: PlayStyleSectionProps) {
  const { nickname, positions, playStyles } = props;
  return (
    <Section>
      <Typography variant="h3">{`${nickname}님은`}</Typography>
      <Typography variant="h3">{`${positions.join(', ')}를 주로 플레이하고`}</Typography>
      <div>
        {playStyles.map((playStyle) => (
          <Typography
            key={playStyle}
            variant="h3"
            component="span"
            color={synergy.includes(playStyle) ? 'primary' : 'onBackground'}
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
