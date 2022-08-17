import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';

import Image from 'next/image';
import useGetProfile from '../../hooks/useGetProfile';
import useGetAuth from '../../hooks/useGetAuth';

import ButtonArea from './ButtonArea';
import ReviewSection from './ReviewSection';
import MostChampSection from './MostChampSection';
import VoiceSection from './VoiceSection';
import PlayStyleSection from './PlayStyleSection';
import ProfileImg from './ProfileImg';
import Blur from './Blur';
import { BaseContainer } from '../common';

const MatchSection = dynamic(() => import('./MatchSection'), {
  ssr: false,
});

interface UserProfileProps {
  userId: string;
  isAuth: boolean;
}

function UserProfile(props: UserProfileProps) {
  const { userId, isAuth } = props;
  const me = isAuth
    ? useGetAuth()
    : {
        userId: '',
        lolNickname: '',
        profileURL: '',
        isOnBoarded: true,
        playStyle: ['', '', '', ''],
      };

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
        <PlayStyleSection
          nickname={lolNickname}
          positions={position}
          playStyles={playStyle}
          myPlayStyles={me.playStyle}
        />
        <VoiceSection
          isVoiceOn={useVoice}
          voiceChannel={voiceChannel}
          communication={communication}
        />
        <MostChampSection mostChamps={mostChampion} />
        <ReviewSection goodReview={goodReview} lolNickname={lolNickname} />
        <Suspense
          fallback={
            <div>
              <Image src="/icons/loading.svg" width="24px" height="24px" />
            </div>
          }
        >
          <MatchSection userId={userId} />
        </Suspense>
      </BaseContainer>
      <ButtonArea userId={userId} lolNickname={lolNickname} isMe={me?.userId === userId} />
      {isAuth ? me.isOnBoarded || <Blur type="onBoarding" /> : <Blur type="login" />}
    </>
  );
}

export default UserProfile;
