import React from 'react';
import useGetMyPage from '../../hooks/useGetMyPage';

import { Asking, BaseContainer, Button, Card, Divider, Feedback, Typography } from '../common';

import { AreaButton, ProfileCardContainer } from './style';

function MyPage() {
  const {
    data: { goodFeedback, badFeedback, ...other },
  } = useGetMyPage();

  return (
    <BaseContainer>
      <ProfileCardContainer>
        <div>
          <Typography variant="h3">많고 많은 소환사 중에</Typography>
          <Typography variant="h3">내가 제일 잘 났지</Typography>
        </div>
        <Card {...other} />
        <Button size="lg" variant="outlined" color="onBackground">
          내 플레이 정보 수정하기
        </Button>
      </ProfileCardContainer>
      <Asking
        title="받은 긍정 플레이 리뷰"
        caption="같이 플레이한 유져중에 어쩌고 저쩌고. 긍정 플레이 ㅇ리뷰가 많으면 상위 노출 시스템????"
      >
        <Feedback feedbacks={goodFeedback} />
      </Asking>
      <Asking
        title="받은 부정 플레이 리뷰"
        caption="같이 플레이한 유져중에 어쩌고 저쩌고. 부정 플레이 리뷰가 너무 많으면 해명타임이 주어져야할짖도 몰라요. 모두가 사연이 있다고 하지만 자꾸 사건이 내 주변에서 일어나면 당신이 범인일지도 모릅니다."
      >
        <Feedback feedbacks={badFeedback} />
      </Asking>
      <div>
        <Divider />
        <AreaButton type="button">
          <Typography variant="body1">로그인</Typography>
        </AreaButton>
        <Divider />
        <AreaButton type="button">
          <Typography variant="body1">회원 탈퇴</Typography>
        </AreaButton>
        <Divider />
      </div>
    </BaseContainer>
  );
}
export default MyPage;
