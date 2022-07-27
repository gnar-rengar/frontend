import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';

import useGetUserProfile from '../../hooks/useGetUserProfile';

import ButtonArea from './ButtonArea';
import ReviewSection from './ReviewSection';
import MostChampSection from './MostChampSection';
import VoiceSection from './VoiceSection';
import PlayStyleSection from './PlayStyleSection';
import ProfileImg from './ProfileImg';
import { BaseContainer } from '../common';

const MatchSection = dynamic(() => import('./MatchSection'), {
  ssr: false,
});

function UserProfile({ userId }: { userId: string }) {
  const data = useGetUserProfile(userId as string);
  const {
    nickname,
    tier,
    playStyles,
    positions,
    voice,
    voiceChannel,
    communication,
    mostChamps,
    goodReview,
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
        <ReviewSection goodFeedback={goodReview} />
      </BaseContainer>
      <ButtonArea />
    </>
  );
}

export default UserProfile;
