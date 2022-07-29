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
    tier,
    rank,
    playStyle,
    position,
    useVoice,
    voiceChannel,
    communication,
    mostChampion,
    goodReview,
    roomId,
  } = useGetProfile(userId as string);

  return (
    <>
      <ProfileImg nickname={lolNickname} tier={tier} rank={rank} />
      <BaseContainer>
        <PlayStyleSection nickname={lolNickname} positions={position} playStyles={playStyle} />
        <VoiceSection
          isVoiceOn={useVoice}
          voiceChannel={voiceChannel}
          communication={communication}
        />
        <MostChampSection mostChamps={mostChampion} />
        <Suspense fallback="loading">
          <MatchSection userId={userId} />
        </Suspense>
        <ReviewSection goodReview={goodReview} lolNickname={lolNickname} />
      </BaseContainer>
      <ButtonArea userId={userId} lolNickname={lolNickname} roomId={roomId} />
    </>
  );
}

export default UserProfile;
