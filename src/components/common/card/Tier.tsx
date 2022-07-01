import React from 'react';
import { TierLi, Ul } from './style';

interface TierProps {
  tiers: {
    season: string;
    tier: string;
    rank: number;
    leaguePoints: number;
  }[];
}

// TODO 카드 넘어가면 ellipsis 처리하기. css로 가능한지 확인 필요

function Tier(props: TierProps) {
  const { tiers } = props;

  return (
    <Ul>
      {tiers.map((tier) => (
        <TierLi key={`${tier.season} + ${tier.leaguePoints}`}>
          <p>{`${tier.season}${tier.tier}`}</p>
        </TierLi>
      ))}
    </Ul>
  );
}

export default Tier;