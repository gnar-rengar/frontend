import React, { useCallback, useEffect, useRef, useState } from 'react';

import Image from 'next/image';
import { useTheme } from '@emotion/react';
import PlayStyle from './PlayStyle';
import Position from './Position';
import Typography from '../typography/Typography';

import { Bottom, NameVoiceAndPosition, NameVoice, StyledInfoArea, Tier, Top } from './style';
import { CardProps } from '../../../types/card.type';

type InfoAreaProps = Omit<CardProps, 'profileUrl'>;

const ellipseWidth = 25.88;

function InfoArea(props: InfoAreaProps) {
  const { lolNickname, useVoice, tier, rank, playStyle, position } = props;

  const [playStyles, setPlayStyles] = useState(playStyle);
  const [breakPoints, setBreakPoints] = useState([]);
  const [bpIndex, setBpIndex] = useState(3);

  const lastWidth = useRef(0);

  const {
    icon: {
      size: { sm },
    },
  } = useTheme();

  const containerRef = useRef<HTMLDivElement>(null);
  const ulRef = useRef<HTMLUListElement>(null);

  const gap = 6;

  const handleResize = useCallback(() => {
    const width = containerRef.current.clientWidth - 32; // 32는 좌우 패딩을 의미
    const direction = lastWidth.current - width;

    if (!direction) return;
    if (direction > 0 && breakPoints[bpIndex] > width) {
      setPlayStyles((ps) => [...ps.slice(0, bpIndex)]);
      setBpIndex((p) => p - 1);
    }
    if (bpIndex < 3 && direction < 0 && breakPoints[bpIndex + 1] < width) {
      setPlayStyles((ps) => [...ps, playStyle[bpIndex + 1]]);
      setBpIndex((p) => p + 1);
    }

    lastWidth.current = width;
  }, [breakPoints, bpIndex, lastWidth]);

  useEffect(() => {
    const widths = [...ulRef.current.childNodes].map((child: HTMLDivElement) => child.clientWidth);
    const bps = widths.reduce((a, b, i) => {
      if (i === 0) {
        a.push(b);
        return a;
      }
      a.push(a[a.length - 1] + b + gap);
      return a;
    }, []);

    const bpsWithEllipse = bps.map((bp, i) => {
      if (i < bps.length - 1) {
        return bp + gap + ellipseWidth;
      }
      return bp;
    });
    setBreakPoints(bpsWithEllipse);

    const defaultBpIndex = bpsWithEllipse.findIndex(
      (bp) => bp > containerRef.current.clientWidth - 32
    );

    if (defaultBpIndex > 0) {
      setBpIndex(defaultBpIndex);
      setPlayStyles((ps) => [...ps.slice(0, bpIndex - 1)]);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  return (
    <StyledInfoArea ref={containerRef}>
      <Top>
        <Tier>
          {tier} {rank}
        </Tier>
        <NameVoiceAndPosition>
          <NameVoice>
            <Typography variant="body1" data-testid="nickname">
              {lolNickname}
            </Typography>
            {useVoice ? (
              <Image src="/icons/voice.svg" width={sm} height={sm} alt="voice on" />
            ) : (
              <Image src="/icons/voice-off.svg" width={sm} height={sm} alt="voice off" />
            )}
          </NameVoice>
          <Position positions={position} />
        </NameVoiceAndPosition>
      </Top>
      <Bottom>
        <PlayStyle playStyles={playStyles} ulRef={ulRef} />
      </Bottom>
    </StyledInfoArea>
  );
}

export default InfoArea;
