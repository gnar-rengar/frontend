import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';

import useGetUserProfile from '../../hooks/useGetUserProfile';

import ButtonArea from './ButtonArea';
import FeedbackSection from './FeedbackSection';
import MostChampSection from './MostChampSection';
import VoiceSection from './VoiceSection';
import PlayStyleSection from './PlayStyleSection';
import ProfileImg from './ProfileImg';
import { BaseContainer } from '../common';

const MatchSection = dynamic(() => import('./MatchSection'), {
  ssr: false,
});

function UserProfile({ userId }: { userId: string }) {
  const { data } = useGetUserProfile(userId as string);
  const {
    nickname,
    tier,
    playStyles,
    positions,
    voice,
    voiceChannel,
    communication,
    mostChamps,
    goodFeedback,
  } = data;

  return (
    <>
      <ProfileImg nickname={nickname} tier={tier} />
      <BaseContainer>
        <PlayStyleSection nickname={nickname} positions={positions} playStyles={playStyles} />
        <VoiceSection isVoiceOn={voice} voiceChannel={voiceChannel} communication={communication} />
        <MostChampSection mostChamps={mostChamps} />
        <Suspense fallback="loading">
          <MatchSection userId={userId} />
        </Suspense>
        <FeedbackSection goodFeedback={goodFeedback} />
      </BaseContainer>
      {/**
       * 버튼 아래 영역이 너무 넓어서 답답해 보이는 것 같기도?
       * 위에 그레디언트 부분도 너무 밑에까지 내려온듯함.
       * 예지님한테 보여드리고 재 확인 필요.
       * 개인적으로는 위아래 패딩을 줄이고 버튼들이 검은 영역의 가운데에 위치하는게 어떨까 생각
       */}
      <ButtonArea />
    </>
  );
}

export default UserProfile;
