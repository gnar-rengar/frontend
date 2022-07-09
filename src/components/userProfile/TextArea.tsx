import React from 'react';
import { Typography } from '../common';

import { KDA, KDAAndMinionKilled, Level, LevelAndChampionName, TextAreaContainer } from './style';

function TextArea(props) {
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
          <Typography variant="caption">{`${totalMinionsKilled}(분당개수)`}</Typography>
        </div>
      </KDAAndMinionKilled>
    </TextAreaContainer>
  );
}

export default TextArea;
