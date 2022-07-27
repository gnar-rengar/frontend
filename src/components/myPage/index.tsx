import { useRouter } from 'next/router';
import React from 'react';
import dynamic from 'next/dynamic';
import useGetMyPage from '../../hooks/useGetMyPage';

import { Asking, BaseContainer, Button, Divider, Typography } from '../common';

import { AreaButton, ProfileCardContainer } from './style';

import type { ReviewProps } from '../common/review/Review';
import type { CardProps } from '../common/card/Card';

const Card = dynamic<CardProps>(() => import('../common').then((module) => module.Card), {});
const Review = dynamic<ReviewProps>(() => import('../common').then((module) => module.Review), {});

function MyPage() {
  const { data, isLoading } = useGetMyPage();
  const router = useRouter();

  if (isLoading) {
    return <div>loading...</div>;
  }

  const { goodReview, badReview, ...other } = data;

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
        <Review reviews={goodReview} />
      </Asking>
      <Asking
        title="받은 부정 플레이 리뷰"
        caption="받은 부정 플레이 리뷰는 나에게만 보여요
        피드백 삼아 더 좋은 플레이를 보여주세요!"
      >
        <Review reviews={badReview} />
      </Asking>
      <div>
        <Divider />
        <AreaButton type="button">
          <Typography variant="body1">로그아웃</Typography>
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
