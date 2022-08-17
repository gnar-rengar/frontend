import React from 'react';
import { Typography } from '../common';

import { KDA, KDAAndMinionKilled, Level, LevelAndChampionName, TextAreaContainer } from './style';

interface TextAreaProps {
  championNameKR: string;
  champLevel: number;
  totalMinionsKilled: number;
  kills: number;
  deaths: number;
  assists: number;
  kda: number;
  playTimeMinute: number;
}

function TextArea(props: TextAreaProps) {
  const {
    championNameKR,
    champLevel,
    totalMinionsKilled,
    kills,
    deaths,
    assists,
    kda,
    playTimeMinute,
  } = props;

  const minionPerMinute = (totalMinionsKilled / playTimeMinute).toFixed(1);

  return (
    <TextAreaContainer>
      <LevelAndChampionName>
        <Level>
          <Typography variant="captionRegular">{champLevel}</Typography>
        </Level>
        <Typography variant="captionBold">{championNameKR}</Typography>
      </LevelAndChampionName>
      <KDAAndMinionKilled>
        <KDA>
          <Typography variant="captionRegular" component="span">
            {kills}
          </Typography>
          <Typography variant="captionRegular" component="span">
            /
          </Typography>
          <Typography variant="captionBold" component="span" color="error">
            {deaths}
          </Typography>
          <Typography variant="captionRegular" component="span">
            /
          </Typography>
          <Typography variant="captionRegular" component="span">
            {assists}
          </Typography>
          <Typography variant="captionRegular" component="span">
            {kda === -1 ? ' Perfect' : `(${kda.toFixed(1)})`}
          </Typography>
        </KDA>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <div>X</div>
          <Typography variant="captionRegular">{`${totalMinionsKilled}(${minionPerMinute})`}</Typography>
        </div>
      </KDAAndMinionKilled>
    </TextAreaContainer>
  );
}

export default TextArea;
