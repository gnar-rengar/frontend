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
  primaryStyle: string;
  subStyle: string;
  spell1: string;
  spell2: string;
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
    primaryStyle,
    subStyle,
    spell1,
    spell2,
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
            src={`https://ddragon.leagueoflegends.com/cdn/12.12.1/img/champion/${championName}.png`}
            width="64px"
            height="64px"
          />
        </ChampionImageWrapper>
        <RuneContainer>
          <AssetWrapper>
            <Image src={primaryStyle} width={lg} height={lg} />
          </AssetWrapper>
          <AssetWrapper>
            <Image src={subStyle} width={lg} height={lg} />
          </AssetWrapper>
        </RuneContainer>
      </Left>
      <Right>
        <SpellContainer>
          <AssetWrapper>
            <Image
              src={`http://ddragon.leagueoflegends.com/cdn/12.12.1/img/spell/${spell1}.png`}
              width={lg}
              height={lg}
            />
          </AssetWrapper>
          <AssetWrapper>
            <Image
              src={`http://ddragon.leagueoflegends.com/cdn/12.12.1/img/spell/${spell2}.png`}
              width={lg}
              height={lg}
            />
          </AssetWrapper>
        </SpellContainer>
        <ItemContainer>
          <ItemContainerExceptForWard>
            {items.map((item) => (
              <ItemWrapper item={item} />
            ))}
          </ItemContainerExceptForWard>
          <ItemWrapper item={item6} />
        </ItemContainer>
      </Right>
    </div>
  );
}

export default ImageArea;
