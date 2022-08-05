import React, { useCallback, useEffect, useRef, useState } from 'react';

import Image from 'next/image';
import { useTheme } from '@emotion/react';
import PlayStyle from './PlayStyle';
import Position from './Position';
import Typography from '../typography/Typography';

import { Bottom, NameVoiceAndPosition, NameVoice, StyledInfoArea, Tier, Top } from './style';
import { CardProps } from '../../../types/card.type';

type InfoAreaProps = Omit<CardProps, 'profileUrl'>;

function InfoArea(props: InfoAreaProps) {
  const { lolNickname, useVoice, tier, rank, playStyle, position } = props;

  const [playStyles, setPlayStyles] = useState(playStyle);
  const [breakPoints, setBreakPoints] = useState([]);
  const [bpIndex, setBpIndex] = useState(2);

  const lastWidth = useRef(0);

  const {
    icon: {
      size: { sm },
    },
  } = useTheme();

  const containerRef = useRef<HTMLDivElement>(null);
  const ulRef = useRef<HTMLUListElement>(null);

  const gap = 6;

  // if (containerRef.current.clientWidth - 32 <= ulRef.current.clientWidth) {
  // setPlayStyles((playStyles) => [...playStyles.slice(0, playStyles.length - 1)]);
  // }

  const handleResize = useCallback(() => {
    const width = containerRef.current.clientWidth - 32;
    const direction = lastWidth.current - width;

    if (!direction) return;
    if (direction > 0 && breakPoints[breakPoints.length - 1] > width) {
      setPlayStyles((playStyles) => [...playStyles.slice(0, playStyles.length - 1)]);
      setBpIndex((p) => p - 1);
    }
    if (bpIndex < 2 && direction < 0 && breakPoints[bpIndex + 1] < width) {
      setPlayStyles((playStyles) => [...playStyles, playStyle[bpIndex + 2]]);
      setBpIndex((p) => p + 1);
    }

    lastWidth.current = width;
  }, [breakPoints, bpIndex, lastWidth]);

  // useEffect(() => {
  //   [...ulRef.current.childNodes]
  //     .map((child: HTMLDivElement) => child.clientWidth)
  //     .reduce((a, b) => {
  //       const newBreakPoint = a + b + gap;
  //       setBreakPoints((bp) => [...bp, newBreakPoint]);
  //       return newBreakPoint;
  //     });
  // }, [bpIndex]);

  useEffect(() => {
    const widths = [...ulRef.current.childNodes].map((child: HTMLDivElement) => child.clientWidth);
    const newBreakPoints: number[] = [];

    widths.reduce((a, b) => {
      const bp = a + b + gap;
      newBreakPoints.push(bp);
      return bp;
    });

    setBreakPoints(newBreakPoints);
  }, [bpIndex]);

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
