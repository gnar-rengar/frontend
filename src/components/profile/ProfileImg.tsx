import React from 'react';
import Image from 'next/image';

import { ProfileImgWrapper, TierAndNickname } from './style';
import { Tier as TierWrapper } from '../common/card/style';
import { Typography } from '../common';

interface ProfileImgProps {
  nickname: string;
  tier: string;
  rank: string;
}

function ProfileImg(props: ProfileImgProps) {
  const { nickname, tier, rank } = props;

  return (
    <ProfileImgWrapper>
      <Image
        src="http://ddragon.leagueoflegends.com/cdn/12.12.1/img/profileicon/1210.png"
        objectFit="cover"
        layout="fill"
        quality="100"
        priority
      />
      <TierAndNickname>
        <TierWrapper>{`${tier} ${rank}`}</TierWrapper>
        <Typography variant="h2" color="onSurface">
          {nickname}
        </Typography>
      </TierAndNickname>
    </ProfileImgWrapper>
  );
}

export default ProfileImg;
