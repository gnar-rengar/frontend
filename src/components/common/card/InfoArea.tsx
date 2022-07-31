import React from 'react';

import Image from 'next/image';
import { useTheme } from '@emotion/react';
import PlayStyle from './PlayStyle';
import Position from './Position';
import Typography from '../typography/Typography';

import { Bottom, NameVoiceAndPosition, NameVoice, StyledInfoArea, Tier, Top } from './style';

import type { CardProps } from './Card';

type InfoAreaProps = Omit<CardProps, 'profileUrl'>;

function InfoArea(props: InfoAreaProps) {
  const { lolNickname, useVoice, tier, rank, playStyle, position } = props;

  const {
    icon: {
      size: { sm },
    },
  } = useTheme();

  return (
    <StyledInfoArea>
      <Top>
        <Tier>
          {tier} {rank}
        </Tier>
        <NameVoiceAndPosition>
          <NameVoice>
            <Typography variant="body1" data-testid="nickname">
              {lolNickname}
            </Typography>
            {useVoice ? (
              <Image src="/icons/voice.svg" width={sm} height={sm} alt="voice on" />
            ) : (
              <Image src="/icons/voice-off.svg" width={sm} height={sm} alt="voice off" />
            )}
          </NameVoice>
          <Position positions={position} />
        </NameVoiceAndPosition>
      </Top>
      <Bottom>
        <PlayStyle playStyles={playStyle} />
      </Bottom>
    </StyledInfoArea>
  );
}

export default InfoArea;
