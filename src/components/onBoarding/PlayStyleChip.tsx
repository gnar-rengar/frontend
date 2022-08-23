import React from 'react';
import { UseFormRegister, UseFormWatch } from 'react-hook-form';
import { playStyleText } from '../../constant';
import { OnBoardingInput, PlayStyleType } from '../../types/api.type';
import { Typography } from '../common';
import RadioChip from '../common/chip/RadioChip';
import { PlayStyleContainer, PlayStyleRadio } from './style';

type PlayStyleKey = 'battle' | 'line' | 'champion' | 'physical';

interface PlayStyleChipProps {
  register: UseFormRegister<OnBoardingInput<PlayStyleType>>;
  watch: UseFormWatch<OnBoardingInput<PlayStyleType>>;
}

function PlayStyleChip({ register, watch }: PlayStyleChipProps) {
  return (
    <PlayStyleContainer>
      {Object.keys(playStyleText).map((style: PlayStyleKey) => (
        <PlayStyleRadio key={style}>
          <RadioChip
            name={`playStyle.${style}`}
            width="fix"
            color="primary"
            value={playStyleText[style][0]}
            htmlFor={playStyleText[style][0]}
            register={register}
            watch={watch(`playStyle.${style}`)}
          >
            {playStyleText[style][0]}
          </RadioChip>
          <Typography paragraph variant="body3" color="onBackgroundSub">
            VS
          </Typography>
          <RadioChip
            name={`playStyle.${style}`}
            color="primary"
            width="fix"
            value={playStyleText[style][1]}
            htmlFor={playStyleText[style][1]}
            register={register}
            watch={watch(`playStyle.${style}`)}
          >
            {playStyleText[style][1]}
          </RadioChip>
        </PlayStyleRadio>
      ))}
    </PlayStyleContainer>
  );
}

export default PlayStyleChip;
