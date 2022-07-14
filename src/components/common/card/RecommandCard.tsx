import { useTheme } from '@emotion/react';
import Image from 'next/image';
import React from 'react';
import { Typography } from '..';
import { CardProps } from './Card';
import PlayStyle from './PlayStyle';
import Position from './Position';
import {
  InfoBottomContainer,
  InfoTopContainer,
  NameVoice,
  NameVoiceAndPosition,
  RecommandCardContainer,
  RecommandInfoContainer,
  Tier,
} from './style';

function RecommandCard(props: CardProps) {
  const { profileUrl, tier, nickname, positions, playStyles, voice } = props;

  const {
    icon: {
      size: { sm },
    },
  } = useTheme();

  return (
    <RecommandCardContainer>
      <Image src={profileUrl} layout="fill" />
      <RecommandInfoContainer>
        <InfoTopContainer>
          <div>
            <Tier>{`${tier.tier} ${tier.rank}`}</Tier>
          </div>
          <NameVoiceAndPosition>
            <NameVoice>
              <Typography variant="body1" data-testid="nickname">
                {nickname}
              </Typography>
              {voice ? (
                <Image src="/icons/voice.svg" width={sm} height={sm} alt="voice on" />
              ) : (
                <Image src="/icons/voice-off.svg" width={sm} height={sm} alt="voice off" />
              )}
            </NameVoice>
            <Position positions={positions} />
          </NameVoiceAndPosition>
        </InfoTopContainer>
        <InfoBottomContainer>
          <PlayStyle playStyles={playStyles} />
        </InfoBottomContainer>
      </RecommandInfoContainer>
    </RecommandCardContainer>
  );
}

export default RecommandCard;
