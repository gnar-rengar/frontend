import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';

import useGetProfile from '../../hooks/useGetProfile';

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
  const {
    lolNickname,
    profileUrl,
    tier,
    rank,
    playStyle,
    position,
    useVoice,
    voiceChannel,
    communication,
    mostChampion,
    goodReview,
  } = useGetProfile(userId as string);

  return (
    <>
      <ProfileImg nickname={lolNickname} profileUrl={profileUrl} tier={tier} rank={rank} />
      <BaseContainer>
        <PlayStyleSection nickname={lolNickname} positions={position} playStyles={playStyle} />
        <VoiceSection
          isVoiceOn={useVoice}
          voiceChannel={voiceChannel}
          communication={communication}
        />
        <MostChampSection mostChamps={mostChampion} />
        <ReviewSection goodReview={goodReview} lolNickname={lolNickname} />
        <Suspense fallback="loading">
          <MatchSection userId={userId} />
        </Suspense>
      </BaseContainer>
      <ButtonArea userId={userId} lolNickname={lolNickname} />
    </>
  );
}

export default UserProfile;
