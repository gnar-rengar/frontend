import { useRouter } from 'next/router';
import React from 'react';
import useGetMyPage from '../../hooks/useGetMyPage';

import { Asking, BaseContainer, Button, Card, Divider, Feedback, Typography } from '../common';

import { AreaButton, ProfileCardContainer } from './style';

function MyPage() {
  const router = useRouter();
  const { goodFeedback, badFeedback, ...other } = useGetMyPage();

  return (
    <BaseContainer>
      <ProfileCardContainer>
        <div>
          <Typography variant="h3">많고 많은 소환사 중에</Typography>
          <Typography variant="h3">내가 제일 잘 났지</Typography>
        </div>
        <Card {...other} />
        <Button
          onClick={() => router.push('/on-boarding')}
          size="lg"
          variant="outlined"
          color="onBackground"
        >
          내 플레이 정보 수정하기
        </Button>
      </ProfileCardContainer>
      <Asking title="받은 긍정 플레이 리뷰">
        <Feedback feedbacks={goodFeedback} />
      </Asking>
      <Asking
        title="받은 부정 플레이 리뷰"
        caption="받은 부정 플레이 리뷰는 나에게만 보여요
        피드백 삼아 더 좋은 플레이를 보여주세요!"
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
