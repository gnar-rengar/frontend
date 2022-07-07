import Image from 'next/image';
import React from 'react';
import { Typography } from '../common';
import { MatchCardContainer, PlayTime, StartTime } from './style';

function MatchCard() {
  return (
    <MatchCardContainer>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
          padding: '12px 16px',
          gap: '8px',
          backdropFilter: 'blur(50px)',
        }}
      >
        <div style={{ display: 'flex ', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex ', alignItems: 'center', gap: '8px' }}>
            <Typography variant="body1">솔로랭크</Typography>
            <StartTime>2022/06/30 오전 1시 21분</StartTime>
          </div>
          <PlayTime>22:45</PlayTime>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '50%', overflow: 'hidden' }}>
              <Image
                src="http://ddragon.leagueoflegends.com/cdn/12.12.1/img/profileicon/588.png"
                width="64px"
                height="64px"
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div style={{ width: '24px', height: '24px', background: 'red' }}>1</div>
              <div style={{ width: '24px', height: '24px', background: 'red' }}>2</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div>
              <div>
                <Image
                  src="http://ddragon.leagueoflegends.com/cdn/12.12.1/img/profileicon/588.png"
                  width="24px"
                  height="24px"
                />
              </div>
              <div>
                <Image
                  src="http://ddragon.leagueoflegends.com/cdn/12.12.1/img/profileicon/588.png"
                  width="24px"
                  height="24px"
                />
              </div>
            </div>
            <div style={{ display: 'flex', gap: '4px', alignItems: 'flex-start' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', width: '76px', gap: '2px' }}>
                <div style={{ width: '24px', height: '24px', background: 'red' }}>1</div>
                <div style={{ width: '24px', height: '24px', background: 'red' }}>2</div>
                <div style={{ width: '24px', height: '24px', background: 'red' }}>3</div>
                <div style={{ width: '24px', height: '24px', background: 'red' }}>4</div>
                <div style={{ width: '24px', height: '24px', background: 'red' }}>5</div>
                <div style={{ width: '24px', height: '24px', background: 'red' }}>6</div>
              </div>
              <div style={{ width: '24px', height: '24px', background: 'red' }}>7</div>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <div>14</div>
            <div>레나타 글라스크</div>
          </div>
          <div>
            <div>X 169(0.2)</div>
            <div>10/10/2</div>
          </div>
        </div>
      </div>
    </MatchCardContainer>
  );
}

export default MatchCard;
