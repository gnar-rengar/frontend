import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';

import useGetUserProfile from '../../hooks/useGetProfile';

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
    lolNickname,
    tier,
    rank,
    playStyle,
    position,
    useVoice,
    voiceChannel,
    communication,
    mostChamps,
    goodReview,
  } = data;

  console.log(useVoice, voiceChannel, communication);

  return (
    <>
      <ProfileImg nickname={lolNickname} tier={tier} rank={rank} />
      <BaseContainer>
        {/* <PlayStyleSection nickname={lolNickname} positions={position} playStyles={playStyle} /> */}
        {/* <VoiceSection
          isVoiceOn={useVoice}
          voiceChannel={voiceChannel}
          communication={communication}
        /> */}
        {/* <MostChampSection mostChamps={mostChamps} />
        <Suspense fallback="loading">
          <MatchSection userId={userId} />
        </Suspense>
        <ReviewSection goodFeedback={goodReview} /> */}
      </BaseContainer>
      <ButtonArea />
    </>
  );
}

export default UserProfile;
