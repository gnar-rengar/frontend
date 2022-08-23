import { useRouter } from 'next/router';
import React from 'react';
import { UseFormRegister, UseFormWatch } from 'react-hook-form';
import { OnBoardingInput, PlayStyleType } from '../../types/api.type';
import { Asking, Button } from '../common';
import PlayStyleChip from './PlayStyleChip';
import { CustomButtonContainer } from './style';

interface ChoicePlayStyleProps {
  onChoicePlayStyleButton: (e: React.MouseEvent<HTMLButtonElement>, innerText: string) => void;
  choicePlayStyleValue: boolean;
  register: UseFormRegister<OnBoardingInput<PlayStyleType>>;
  watch: UseFormWatch<OnBoardingInput<PlayStyleType>>;
}

function ChoicePlayStyle(props: ChoicePlayStyleProps) {
  const { onChoicePlayStyleButton, choicePlayStyleValue, register, watch } = props;
  const router = useRouter();
  return (
    <Asking title="플레이 스타일은 어떤가요?" paragraph>
      <CustomButtonContainer>
        <Button
          size="sm"
          type="button"
          onClick={(e) => {
            onChoicePlayStyleButton(e, '직접 선택할게요');
            router.push('?type=notTest&schema=true');
          }}
          color={choicePlayStyleValue ? 'primary' : 'disable'}
        >
          직접 선택할게요
        </Button>
        <Button
          size="sm"
          type="button"
          onClick={(e) => {
            router.push('?type=notTest&schema=false');
            onChoicePlayStyleButton(e, '테스트 해볼게요');
          }}
          color={!choicePlayStyleValue ? 'primary' : 'disable'}
        >
          테스트 해볼게요
        </Button>
      </CustomButtonContainer>
      {choicePlayStyleValue && <PlayStyleChip register={register} watch={watch} />}
    </Asking>
  );
}

export default ChoicePlayStyle;
