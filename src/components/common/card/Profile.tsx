import React from 'react';
import Typography from '../typography/Typography';

import { Img, StyledProfile } from './style';

interface ProfileProps {
  profileImg: string;
  nickname: string;
}

// TODO icon 크기 업데이트 되면 voice 여부에 따라 다른 아이콘 보여주기
function Profile(props: ProfileProps) {
  const { profileImg, nickname } = props;

  return (
    <StyledProfile>
      <Img src={profileImg} alt="profile icon" />
      <Typography variant="body1" data-testid="nickname">
        {nickname}
      </Typography>
    </StyledProfile>
  );
}

export default Profile;
