import React from 'react';
import Image from 'next/image';

import { ProfileImgWrapper, TierAndNickname } from './style';
import { Tier as TierWrapper } from '../common/card/style';
import { Typography } from '../common';

interface ProfileImgProps {
  nickname: string;
  profileUrl: string;
  tier: string;
  rank: string;
}

function ProfileImg(props: ProfileImgProps) {
  const { nickname, profileUrl, tier, rank } = props;
  return (
    <ProfileImgWrapper>
      <Image src={profileUrl} objectFit="cover" layout="fill" quality="100" priority />
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
