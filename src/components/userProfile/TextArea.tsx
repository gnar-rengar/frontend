import React from 'react';
import { Typography } from '../common';

import { Level, LevelAndChampionName, MinionKilledAndKDA, TextAreaContainer } from './style';

function TextArea() {
  return (
    <TextAreaContainer>
      <LevelAndChampionName>
        <Level>
          <Typography variant="caption">14</Typography>
        </Level>
        <Typography variant="captionBold">레나타 글라스크</Typography>
      </LevelAndChampionName>
      <MinionKilledAndKDA>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <div>X</div>
          <Typography variant="caption">169(0.2)</Typography>
        </div>
        <Typography variant="caption">10/10/2 (1.2)</Typography>
      </MinionKilledAndKDA>
    </TextAreaContainer>
  );
}

export default TextArea;
