import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  communication,
  onBoardingErrorMessage,
  playStyle,
  position,
  voiceChannel,
} from '../../constant';
import useOnBoardingMutation from '../../hooks/useOnBoardingMutation';
import { OnBoardingInput } from '../../types/onBoarding.type';
import Chip from '../common/Chip';
import Radio from '../common/Radio';
import { Input } from '../common/TextField.style';
import Typography from '../common/Typography';
import {
  CheckboxContainer,
  ChipContainer,
  CustomCheckbox,
  NickNameButton,
  OnBoardingContainer,
  OnBoardingEachContainer,
  SubmitButton,
  VoiceButton,
  VoiceButtonContainer,
} from './style';

function OnBoarding() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OnBoardingInput>();
  const registerProps = register('communication');
  const [checkedPlayStyle, setCheckedPlayStyle] = useState<string[]>([]);
  const [checkedPosition, setCheckedPosition] = useState<string[]>([]);
  const [checkedVoice, setCheckedVoice] = useState<string[]>([]);
  const [useVoice, setVoice] = useState('');
  const submitMutation = useOnBoardingMutation();

  const onSubmitOnBoarding: SubmitHandler<OnBoardingInput> = (data: OnBoardingInput) => {
    submitMutation.mutate(data);
  };

  const onClickCheckbox = (
    e: React.MouseEvent<HTMLLabelElement>,
    state: string[],
    setState: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    const target = e.target as HTMLElement;
    const value = target.innerText;

    if (state.includes(value)) {
      setState((prev) => prev.filter((item) => item !== value));
    } else setState((prev) => [...prev, value]);
  };

  const voiceButtonIsState = (innerText: string) => {
    if (useVoice === innerText) return true;
    return false;
  };

  const onClickVoiceButton = (e: React.MouseEvent<HTMLButtonElement>, innerText: string) => {
    e.preventDefault();
    setVoice(innerText);
  };

  return (
    <OnBoardingContainer onSubmit={handleSubmit(onSubmitOnBoarding)}>
      <OnBoardingEachContainer>
        <div className="titleContainer">
          <Typography variant="h3" align="left">
            소환사명을 알려주세요
          </Typography>
          <Typography variant="caption">
            정확한 소환사명을 알려줘야지 남의 계정으로 하면 서비스 사용에 제재를 받을 수 있다고
            알리기!!!! 혹은 상대가 너를 찾을 수 없어요
          </Typography>
        </div>
        <div className="container">
          <div className="flexContainer">
            <Input
              {...register('nickName', {
                required: onBoardingErrorMessage.nickName,
              })}
              name="nickName"
              placeholder="정확한 소환사명을 입력해주세요"
            />
            <NickNameButton>
              <Typography variant="body4">확인</Typography>
            </NickNameButton>
          </div>
          <Typography variant="caption">{errors?.nickName?.message}</Typography>
        </div>
      </OnBoardingEachContainer>
      <OnBoardingEachContainer>
        <div className="titleContainer">
          <Typography variant="h3" align="left">
            소환사님의 플레이스타일은? 우리가 좋은 듀오 구해드릴게~
          </Typography>
          <Typography variant="caption">부가설명 내용입니다</Typography>
        </div>
        <div className="container">
          <ChipContainer>
            {playStyle.map((style) => (
              <React.Fragment key={style}>
                <Chip
                  chosen={checkedPlayStyle.includes(style)}
                  onClick={(e) => onClickCheckbox(e, checkedPlayStyle, setCheckedPlayStyle)}
                  key={style}
                  htmlfor={style}
                >
                  {style}
                </Chip>
                <CustomCheckbox
                  {...register('playStyle', {
                    required: onBoardingErrorMessage.checkbox,
                  })}
                  key={`${style} 온보딩`}
                  type="checkbox"
                  id={style}
                  value={style}
                />
              </React.Fragment>
            ))}
          </ChipContainer>
          <Typography variant="caption">{(errors?.playStyle as any)?.message}</Typography>
        </div>
      </OnBoardingEachContainer>
      <OnBoardingEachContainer>
        <div className="titleContainer">
          <Typography variant="h3" align="left">
            선호하는 포지션을 알려주세요
          </Typography>
          <Typography variant="caption">부가설명 내용입니다</Typography>
        </div>
        <div className="container">
          <ChipContainer>
            {position.map((pos) => (
              <React.Fragment key={pos}>
                <Chip
                  chosen={checkedPosition.includes(pos)}
                  key={pos}
                  htmlfor={pos}
                  onClick={(e) => onClickCheckbox(e, checkedPosition, setCheckedPosition)}
                >
                  {pos}
                </Chip>
                <CustomCheckbox
                  {...register('position', {
                    required: onBoardingErrorMessage.checkbox,
                  })}
                  key={`${pos} 온보딩`}
                  type="checkbox"
                  id={pos}
                  value={pos}
                />
              </React.Fragment>
            ))}
          </ChipContainer>
          <Typography variant="caption">{(errors?.position as any)?.message}</Typography>
        </div>
      </OnBoardingEachContainer>
      <OnBoardingEachContainer>
        <div className="titleContainer">
          <Typography variant="h3" align="left">
            음성 채팅을 사용하시나요?
          </Typography>
          <Typography variant="caption">부가설명 내용입니다</Typography>
        </div>
        <VoiceButtonContainer>
          <VoiceButton
            data-testid="useVoice"
            onClick={(e) => {
              onClickVoiceButton(e, '사용해요');
            }}
            active={voiceButtonIsState('사용해요')}
          >
            사용해요
          </VoiceButton>
          <VoiceButton
            onClick={(e) => onClickVoiceButton(e, '사용하지 않아요')}
            active={voiceButtonIsState('사용하지 않아요')}
          >
            사용하지 않아요
          </VoiceButton>
        </VoiceButtonContainer>
        {useVoice === '사용해요' && (
          <div className="titleContainer">
            <Typography data-testid="useVoiceTitle" variant="caption">
              어떤 채널을 주로 사용하시는지도 알려주세요.
            </Typography>
            <div className="container">
              <ChipContainer>
                {voiceChannel.map((channel) => (
                  <React.Fragment key={channel}>
                    <Chip
                      chosen={checkedVoice.includes(channel)}
                      onClick={(e) => onClickCheckbox(e, checkedVoice, setCheckedVoice)}
                      key={channel}
                      htmlfor={channel}
                    >
                      {channel}
                    </Chip>
                    <CustomCheckbox
                      value={channel}
                      key={`${channel} 온보딩`}
                      type="checkbox"
                      id={channel}
                      {...register('voiceChannel', {
                        required: onBoardingErrorMessage.checkbox,
                      })}
                    />
                  </React.Fragment>
                ))}
              </ChipContainer>

              <Typography variant="caption">{(errors?.voiceChannel as any)?.message}</Typography>
            </div>
          </div>
        )}
      </OnBoardingEachContainer>
      <OnBoardingEachContainer>
        <div className="titleContainer">
          <Typography variant="h3" align="left">
            어떤 소통을 선호하시나요?
          </Typography>
          <Typography variant="caption">부가설명 내용입니다</Typography>
        </div>
        <CheckboxContainer>
          {communication.map((item) => (
            <Radio register={registerProps} label={item} key={item} />
          ))}
        </CheckboxContainer>
      </OnBoardingEachContainer>
      <SubmitButton type="submit" data-testid="submit">
        <Typography variant="body1">내 듀오 찾으러 가기</Typography>
      </SubmitButton>
    </OnBoardingContainer>
  );
}

export default OnBoarding;
