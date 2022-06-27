import React from 'react';
import Typography from '../typography/Typography';
import { StyledCard } from './Card.style';

function Card({ profileImg, nickName }: { profileImg: string; nickName: string }) {
  return (
    <StyledCard>
      <img
        src={profileImg}
        width="50px"
        height="50px"
        alt="profile icon"
        style={{ borderRadius: '50%' }}
      />
      <Typography variant="body3" data-testid="nickname">
        {nickName}
      </Typography>
    </StyledCard>
  );
}

export default Card;
