import React from 'react';
// import Image from 'next/image';
import Image from 'next/future/image';
import Typography from '../typography/Typography';

import { CircleImgWrapper, StyledProfile } from './style';

interface ProfileProps {
  profileUrl: string;
  nickname: string;
}

// TODO icon 크기 업데이트 되면 voice 여부에 따라 다른 아이콘 보여주기
function Profile(props: ProfileProps) {
  const { profileUrl, nickname } = props;

  return (
    <StyledProfile>
      <Image src={profileUrl} alt="profile icon" width="24" height="24" priority optim />
      <Typography variant="body1" data-testid="nickname">
        {nickname}
      </Typography>
    </StyledProfile>
  );
}

export default Profile;
