import React from 'react';
import { Typography } from '../common';

import { KDA, KDAAndMinionKilled, Level, LevelAndChampionName, TextAreaContainer } from './style';

interface TextAreaProps {
  championName: string;
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
    championName,
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
          <Typography variant="caption">{champLevel}</Typography>
        </Level>
        <Typography variant="captionBold">{championName}</Typography>
      </LevelAndChampionName>
      <KDAAndMinionKilled>
        <KDA>
          <Typography variant="caption" component="span">
            {kills}
          </Typography>
          <Typography variant="caption" component="span">
            /
          </Typography>
          <Typography variant="captionBold" component="span" color="error">
            {deaths}
          </Typography>
          <Typography variant="caption" component="span">
            /
          </Typography>
          <Typography variant="caption" component="span">
            {assists}
          </Typography>
          <Typography variant="caption" component="span">
            {`(${kda.toFixed(1)})`}
          </Typography>
        </KDA>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <div>X</div>
          <Typography variant="caption">{`${totalMinionsKilled}(${minionPerMinute})`}</Typography>
        </div>
      </KDAAndMinionKilled>
    </TextAreaContainer>
  );
}

export default TextArea;
