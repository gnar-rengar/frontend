import { useTheme } from '@emotion/react';
import Image from 'next/image';
import React, { useState } from 'react';
import { Typography } from '../common';
import PlayStyle from '../common/card/PlayStyle';
import Position from '../common/card/Position';
import { NameVoice, NameVoiceAndPosition, Tier } from '../common/card/style';
import {
  InfoBottomContainer,
  InfoTopContainer,
  RecommandCardContainer,
  RecommandInfoContainer,
} from './style';

function RecommandCard() {
  const voice = true;
  const positions = ['top', 'jg'];
  const playStyle = ['공격적', '무지성', '안전추구'];
  const [imageUrl, setImageUrl] = useState(
    'http://ddragon.leagueoflegends.com/cdn/12.12.1/img/profileicon/588.png'
  );

  const {
    icon: {
      size: { sm },
    },
  } = useTheme();

  return (
    <RecommandCardContainer>
      <Image src={imageUrl} layout="fill" />
      <RecommandInfoContainer>
        <InfoTopContainer>
          <div>
            <Tier>Diamond 1</Tier>
          </div>
          <NameVoiceAndPosition>
            <NameVoice>
              <Typography variant="body1" data-testid="nickname">
                고수달
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
          <PlayStyle playStyles={playStyle} />
        </InfoBottomContainer>
      </RecommandInfoContainer>
      {/* <Test /> */}
    </RecommandCardContainer>
  );
}

export default RecommandCard;
