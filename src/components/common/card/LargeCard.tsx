import { useTheme } from '@emotion/react';
import Image from 'next/image';
import React from 'react';
import { Typography } from '..';
import { CardProps } from '../../../types/card.type';
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

function LargeCard(props: CardProps) {
  const { profileUrl, tier, rank, lolNickname, position, playStyle, useVoice } = props;
  const {
    icon: {
      size: { sm },
    },
  } = useTheme();

  return (
    <RecommandCardContainer>
      <Image src={profileUrl} layout="fill" alt="summoner icon" />
      <RecommandInfoContainer>
        <InfoTopContainer>
          <div>
            <Tier>
              {tier} {rank}
            </Tier>
          </div>
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
        </InfoTopContainer>
        <InfoBottomContainer>
          <PlayStyle playStyles={playStyle} />
        </InfoBottomContainer>
      </RecommandInfoContainer>
    </RecommandCardContainer>
  );
}

export default LargeCard;
