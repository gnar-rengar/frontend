import React from 'react';

import PlayStyle from './PlayStyle';
import Position from './Position';
import Typography from '../typography/Typography';

import VoiceOff from '../../icons/VoiceOff';
import Voice from '../../icons/Voice';

import { Bottom, NameVoiceAndPosition, NameVoice, StyledInfoArea, Tier, Top } from './style';

import type { CardProps } from './Card';

type InfoAreaProps = Omit<CardProps, 'profileUrl'>;

function InfoArea(props: InfoAreaProps) {
  const { tier, nickname, positions, playStyles, voice } = props;

  return (
    <StyledInfoArea>
      <Top>
        <Tier>{`${tier.tier} ${tier.rank}`}</Tier>
        <NameVoiceAndPosition>
          <NameVoice>
            <Typography variant="body1" data-testid="nickname">
              {nickname}
            </Typography>
            {voice ? <Voice /> : <VoiceOff />}
          </NameVoice>
          <Position positions={positions} />
        </NameVoiceAndPosition>
      </Top>
      <Bottom>
        <PlayStyle playStyles={playStyles} />
      </Bottom>
    </StyledInfoArea>
  );
}

export default InfoArea;
