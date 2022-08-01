import { useTheme } from '@emotion/react';
import Image from 'next/image';
import React from 'react';
import { Typography } from '..';
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
import { Position as PositionType } from '../../../types/api.type';

export interface CardProps {
  leaguePoints: string;
  lolNickname: string;
  playStyle: string[];
  position: PositionType[];
  profileUrl: string;
  rank: string;
  tier: string;
  useVoice: boolean;
  _id?: string;
}

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
          <PlayStyle type="recommand" playStyles={playStyle} />
        </InfoBottomContainer>
      </RecommandInfoContainer>
    </RecommandCardContainer>
  );
}

export default LargeCard;
