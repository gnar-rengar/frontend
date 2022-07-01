import React from 'react';
import Typography from '../typography/Typography';

import { TierLi, Ul } from './style';

interface TierProps {
  tiers: any;
}

function Tier(props: TierProps) {
  const { tiers } = props;
  return (
    <Ul>
      {tiers.map((tier) => (
        <TierLi>
          <Typography variant="body3" nowrap>{`${tier.season}${tier.tier}`}</Typography>
        </TierLi>
      ))}
    </Ul>
  );
}

export default Tier;
