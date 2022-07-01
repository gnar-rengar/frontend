import React from 'react';
import { TierLi, Ul } from './style';

interface TierProps {
  tiers: any;
}

// TODO 카드 넘어가면 ellipsis 처리하기. css로 가능한지 확인 필요
function Tier(props: TierProps) {
  const { tiers } = props;

  return (
    <Ul>
      {tiers.map((tier) => (
        <TierLi>
          <p style={{ fontWeight: '700', fontSize: '9px', lineHeight: '12px' }}>
            {`${tier.season}${tier.tier}`}
          </p>
        </TierLi>
      ))}
    </Ul>
  );
}

export default Tier;
