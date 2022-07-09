import { useTheme } from '@emotion/react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import React, { Suspense } from 'react';
import useGetUserProfile from '../../hooks/useGetUserProfile';
import { Typography } from '../common';
import ButtonArea from './ButtonArea';
import FeedbackSection from './FeedbackSection';
import { MostChamps } from './style';

const MatchSection = dynamic(() => import('./MatchSection'), {
  ssr: false,
});

const synergy = ['교전지향', '에이징 커브'];

function UserProfile({ userId }: { userId: string }) {
  const { data } = useGetUserProfile(userId as string);

  const {
    icon: {
      size: { xl },
    },
  } = useTheme();
  const {
    nickname,
    playStyles,
    positions,
    voice,
    voiceChannel,
    communication,
    mostChamps,
    goodFeedback,
    ...other
  } = data;

  return (
    <div>
      <div style={{ position: 'relative', left: '-16px', width: '375px', height: '375px' }}>
        <Image
          src="http://ddragon.leagueoflegends.com/cdn/12.12.1/img/profileicon/588.png"
          objectFit="cover"
          layout="fill"
          quality="100"
          priority
        />
      </div>
      <section>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '16px 0' }}>
          <Typography variant="h3">{`${nickname}님은`}</Typography>
          <Typography variant="h3">{`${positions.join(', ')}를 주로 플레이하고`}</Typography>
          <div>
            {playStyles.map((playStyle) => (
              <Typography
                key={playStyle}
                variant="h3"
                component="span"
                color={synergy.includes(playStyle) ? 'primary' : 'onBackground'}
              >
                {`#${playStyle} `}
              </Typography>
            ))}
          </div>
          <Typography variant="h3">이런 플레이를 선호하는 소환사에요</Typography>
          <Typography variant="caption" color="onBackgroundSub">
            이 중에서 나랑 잘 맞는 부분은
            <Typography variant="caption" component="span" color="primary">
              {' '}
              민트색
            </Typography>
            으로 표현했어요
          </Typography>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '16px 0' }}>
          <Typography variant="h3">{`주로 ${voiceChannel.join(', ')}에서`}</Typography>
          <Typography variant="h3">{communication}</Typography>
          <Typography variant="h3">플레이를 좋아해요</Typography>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '16px 0' }}>
          <Typography variant="h3">숙련도가 가장 높은 챔피언은</Typography>
          <Typography variant="h3">
            <MostChamps>
              {mostChamps.map((mostChamp) => (
                <li>
                  <Image
                    src={`https://ddragon.leagueoflegends.com/cdn/12.12.1/img/champion/${mostChamp}.png`}
                    layout="fixed"
                    width={xl}
                    height={xl}
                    key={mostChamp}
                  />
                </li>
              ))}
            </MostChamps>
            {' 고요'}
          </Typography>
        </div>
      </section>
      <Suspense fallback="loading">
        <MatchSection userId={userId} />
      </Suspense>
      <FeedbackSection goodFeedback={goodFeedback} />
      {/**
       * 버튼 아래 영역이 너무 넓어서 답답해보임.
       * 위에 그레디언트 부분도 너무 밑에까지 내려온듯함.
       * 예지님한테 보여드리고 재 확인 필요.
       * 개인적으로는 위아래 패딩을 줄이고 버튼들이 검은 영역의 가운데에 위치하는게 어떨까 생각
       */}
      <ButtonArea />
    </div>
  );
}

export default UserProfile;
