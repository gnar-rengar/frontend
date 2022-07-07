import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import useGetUserProfile from '../../hooks/useGetUserProfile';
import { Typography } from '../common';
import MatchCard from './MatchCard';

const synergy = ['교전지향', '에이징 커브'];
const playStyles = ['교전지향', '합류를 잘하는', '에이징 커브', '뇌지컬'];

function UserProfile() {
  const { userId } = useRouter().query;

  const { data } = useGetUserProfile(userId as string);

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
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '16px 0' }}>
        <Typography variant="h3">고수달님은</Typography>
        <Typography variant="h3">X X 를 주로 플레이하고</Typography>
        <div>
          {playStyles.map((playStyle) => (
            <Typography
              variant="h3"
              component="span"
              color={synergy.includes(playStyle) ? 'primary' : 'onBackground'}
            >
              {`#${playStyle} `}
            </Typography>
          ))}
        </div>
        <Typography variant="h3">이런 플레이를 선호하는 소환사에요</Typography>
        <Typography variant="caption">
          이 중에서 나랑 잘 맞는 부분은
          <Typography variant="caption" component="span" color="primary">
            {' '}
            민트색
          </Typography>
          으로 표현했어요
        </Typography>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '16px 0' }}>
        <Typography variant="h3">주로 롤 인보이스에서</Typography>
        <Typography variant="h3">텐션 높게, 즐겁게 얘기하는</Typography>
        <Typography variant="h3">플레이를 좋아해요</Typography>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '16px 0' }}>
        <Typography variant="h3">숙련도가 가장 높은 챔피언은</Typography>
        <Typography variant="h3">X X X고요</Typography>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '16px 0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h3">최근 전적은 아래와 같아요</Typography>
          <Typography variant="caption">더보기 &gt;</Typography>
        </div>
        <MatchCard />
      </div>
    </div>
  );
}

export default UserProfile;
