import React from 'react';
import { useTheme } from '@emotion/react';
import Image from 'next/image';
import ItemWrapper from './ItemWrapper';

import {
  AssetWrapper,
  ChampionImageWrapper,
  ItemContainer,
  ItemContainerExceptForWard,
  Left,
  Right,
  RuneContainer,
  SpellContainer,
} from './style';

interface ImageAreaProps {
  championName: string;
  spell1: string;
  spell2: string;
  perk1: string;
  perk2: string;
  item0: number;
  item1: number;
  item2: number;
  item3: number;
  item4: number;
  item5: number;
  item6: number;
}

function ImageArea(props: ImageAreaProps) {
  const {
    championName,
    spell1,
    spell2,
    perk1,
    perk2,
    item0,
    item1,
    item2,
    item3,
    item4,
    item5,
    item6,
  } = props;

  const {
    icon: {
      size: { lg },
    },
  } = useTheme();

  const items = [item0, item1, item2, item3, item4, item5];

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Left>
        <ChampionImageWrapper>
          <Image
            src={`${process.env.NEXT_PUBLIC_RIOT_CHAMPION_IMG_URL}/${championName}.png`}
            width="64px"
            height="64px"
          />
        </ChampionImageWrapper>
        <RuneContainer>
          <AssetWrapper>
            <Image
              src={`${process.env.NEXT_PUBLIC_RIOT_PERK_IMG_URL}/${perk1}`}
              width={lg}
              height={lg}
            />
          </AssetWrapper>
          <AssetWrapper>
            <Image
              src={`${process.env.NEXT_PUBLIC_RIOT_PERK_IMG_URL}/${perk2}`}
              width={lg}
              height={lg}
            />
          </AssetWrapper>
        </RuneContainer>
      </Left>
      <Right>
        <SpellContainer>
          <AssetWrapper>
            <Image
              src={`${process.env.NEXT_PUBLIC_RIOT_SPELL_IMG_URL}/${spell1}.png`}
              width={lg}
              height={lg}
            />
          </AssetWrapper>
          <AssetWrapper>
            <Image
              src={`${process.env.NEXT_PUBLIC_RIOT_SPELL_IMG_URL}/${spell2}.png`}
              width={lg}
              height={lg}
            />
          </AssetWrapper>
        </SpellContainer>
        <ItemContainer>
          <ItemContainerExceptForWard>
            {items.map((item, index) => (
              <ItemWrapper item={item} key={item.toString() + (index * 192).toString()} />
            ))}
          </ItemContainerExceptForWard>
          <ItemWrapper item={item6} />
        </ItemContainer>
      </Right>
    </div>
  );
}

export default ImageArea;
