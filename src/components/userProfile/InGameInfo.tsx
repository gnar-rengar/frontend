import Image from 'next/image';
import React from 'react';
import { useTheme } from '@emotion/react';
import TextArea from './TextArea';
import type { RecentRecord } from '../../types/api.type';
import {
  AssetWrapper,
  ChampionImageWrapper,
  InGameInfoContainer,
  ItemContainer,
  ItemContainerExceptForWard,
  Left,
  NoItem,
  Right,
  RuneContainer,
  SpellContainer,
} from './style';
import ItemWrapper from './ItemWrapper';
import ImageArea from './ImageArea';

type InGameInfoProps = {
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
  champLevel: number;
  totalMinionsKilled: number;
  kills: number;
  deaths: number;
  assists: number;
  kda: number;
};

function InGameInfo(props: InGameInfoProps) {
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
    champLevel,
    totalMinionsKilled,
    kills,
    deaths,
    assists,
    kda,
  } = props;

  const {
    icon: {
      size: { lg },
    },
  } = useTheme();

  const items = [item0, item1, item2, item3, item4, item5];
  return (
    <InGameInfoContainer>
      <ImageArea />
      <TextArea />
    </InGameInfoContainer>
  );
}

export default InGameInfo;
