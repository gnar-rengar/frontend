import React, { Suspense, useState } from 'react';
import dynamic from 'next/dynamic';

import useGetUserProfile from '../../hooks/useGetUserProfile';

import ButtonArea from './ButtonArea';
import FeedbackSection from './FeedbackSection';
import MostChampSection from './MostChampSection';
import VoiceSection from './VoiceSection';
import PlayStyleSection from './PlayStyleSection';
import ProfileImg from './ProfileImg';
import { BaseContainer } from '../common';
import Blur from './Blur';

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

  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsLoggedIn((p) => !p)}
        style={{ position: 'absolute', top: 0, right: 0, zIndex: '100' }}
      >
        로그인
      </button>
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
      <ButtonArea />
      {isLoggedIn || <Blur />}
    </>
  );
}

export default UserProfile;
