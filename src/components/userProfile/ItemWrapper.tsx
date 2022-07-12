import { useTheme } from '@emotion/react';
import Image from 'next/image';
import React from 'react';

import { AssetWrapper, NoItem } from './style';

interface ItemWrapperProps {
  item: number;
}

function ItemWrapper({ item }: ItemWrapperProps) {
  const {
    icon: {
      size: { lg },
    },
  } = useTheme();

  return (
    <AssetWrapper>
      {item ? (
        <Image
          src={`http://ddragon.leagueoflegends.com/cdn/12.12.1/img/item/${item}.png`}
          height={lg}
          width={lg}
        />
      ) : (
        <NoItem />
      )}
    </AssetWrapper>
  );
}

export default ItemWrapper;
