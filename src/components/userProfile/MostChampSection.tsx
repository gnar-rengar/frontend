import React from 'react';
import Image from 'next/image';
import { useTheme } from '@emotion/react';
import { Typography } from '../common';

import { MostChamps, Section } from './style';

interface MostChampSectionProps {
  mostChamps: string[];
}

function MostChampSection({ mostChamps }: MostChampSectionProps) {
  const {
    icon: {
      size: { xl },
    },
  } = useTheme();

  return (
    <Section>
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
    </Section>
  );
}

export default MostChampSection;
