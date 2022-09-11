import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { modalState } from '../../atom';

import useGetAuth from '../../hooks/useGetAuth';
import useGetMyPage from '../../hooks/useGetMyPage';
import useGTagOnMount from '../../hooks/useGTagOnMount';
import useLogoutMutation from '../../hooks/useLogoutMutation';
import usePatchSMSAgree from '../../hooks/usePatchSMSAgree';

import { Asking, BaseContainer, Button, Card, Divider, Review, Typography } from '../common';
import Modal from '../common/modal';
import Toggle from '../common/toggle';

import { AreaButton, ProfileCardContainer } from './style';

function MyPage() {
  const me = useGetAuth();
  const {
    data: { goodReview, badReview, registerPhone, agreeSMS, ...other },
  } = useGetMyPage();
  const logoutMutation = useLogoutMutation();
  const router = useRouter();

  const onClickLogout = () => {
    logoutMutation.mutate();
  };

  useGTagOnMount('menu_my');

  const [modalType, setModalType] = useState<'contact' | 'notification'>('contact');
  const [toggleOn, setToggleOn] = useState(agreeSMS);

  const [portalState, setPortalState] = useRecoilState(modalState);

  const handleClickContactButton = () => {
    setPortalState(true);
    setModalType('contact');
  };

  const { mutate } = usePatchSMSAgree();

  const handleClickNotiToggle = () => {
    if (toggleOn) {
      setModalType('notification');
      setPortalState(true);
    } else {
      mutate(true);
      setPortalState(false);
    }
    setToggleOn((p) => !p);
  };

  return (
    <BaseContainer>
      {portalState && <Modal type={modalType} />}
      <ProfileCardContainer>
        <div>
          <Typography variant="h3">많고 많은 소환사 중에</Typography>
          <Typography variant="h3">내가 제일 잘 났지</Typography>
        </div>
        <div
          onClick={() => router.push(`/profile/${me?.userId}`)}
          onKeyDown={(e) => e.currentTarget.focus()}
          role="button"
          tabIndex={0}
        >
          <Card {...other} />
        </div>
        <Button
          onClick={() => router.push('/on-boarding')}
          size="lg"
          variant="outlined"
          color="onBackground"
        >
          내 정보 수정하기
        </Button>
      </ProfileCardContainer>
      <Asking title="받은 긍정 플레이 리뷰">
        <Review reviews={goodReview} />
      </Asking>
      <Asking
        title="받은 부정 플레이 리뷰"
        caption={
          badReview.length > 0 &&
          '받은 부정 플레이 리뷰는 나에게만 보여요 피드백 삼아 더 좋은 플레이를 보여주세요!'
        }
      >
        <Review reviews={badReview} />
      </Asking>
      <div>
        {registerPhone ? (
          <>
            <Divider />
            <AreaButton type="button" onClick={handleClickContactButton}>
              <Typography variant="body1" color="onBackground">
                연락처 수정하기
              </Typography>
            </AreaButton>
            <Divider />
            <AreaButton
              style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
              type="button"
              onClick={handleClickNotiToggle}
            >
              <Typography variant="body1" color="onBackground">
                채팅 알림
              </Typography>
              <Toggle on={toggleOn} />
            </AreaButton>
          </>
        ) : (
          <>
            <Divider />
            <AreaButton type="button" onClick={handleClickContactButton}>
              <Typography variant="body1" color="primary">
                연락처 등록하고 채팅 알림 받아보기
              </Typography>
            </AreaButton>
          </>
        )}
        <Divider />
        <AreaButton type="button" onClick={onClickLogout}>
          <Typography variant="body1">로그아웃</Typography>
        </AreaButton>
        <Divider />
        <AreaButton type="button" onClick={() => router.replace('/withdrawal')}>
          <Typography variant="body1">회원 탈퇴</Typography>
        </AreaButton>
        <Divider />
      </div>
    </BaseContainer>
  );
}
export default MyPage;
