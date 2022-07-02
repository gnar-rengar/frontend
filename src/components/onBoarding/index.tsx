import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import {
  communication,
  onBoardingErrorMessage,
  playStyle,
  position,
  voiceChannel,
} from '../../constant';
import useOnBoardingMutation from '../../hooks/useOnBoardingMutation';
import { OnBoardingInput } from '../../types/dto/onBoarding.type';
import { Radio, TextField, Typography, Asking } from '../common';
import SelectChip from '../common/chip/SelectChip';
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

const validationSchema = yup.object().shape({
  nickName: yup.string().required(onBoardingErrorMessage.nickName),
  nickNameCheck: yup.boolean().oneOf([true], onBoardingErrorMessage.nickNameCheck),
  playStyle: yup.array(yup.string()).min(1, onBoardingErrorMessage.checkbox),
  position: yup.array(yup.string()).min(1, onBoardingErrorMessage.checkbox),
  communication: yup.string().required(onBoardingErrorMessage.checkbox),
  useVoice: yup.boolean().typeError(onBoardingErrorMessage.checkbox),
  voiceChannel: yup.array(yup.string()).when('useVoice', {
    is: true,
    then: (schema) => schema.min(1, onBoardingErrorMessage.checkbox),
  }),
});

function OnBoarding() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
    clearErrors,
  } = useForm<OnBoardingInput>({
    defaultValues: {
      nickName: '',
      nickNameCheck: false,
      playStyle: [],
      position: [],
      communication: '',
      voiceChannel: [],
    },
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
  });

  const registerProps = register('communication');
  const [useVoice, setUseVoice] = useState('');
  const submitMutation = useOnBoardingMutation();

  const onSubmitOnBoarding: SubmitHandler<OnBoardingInput> = (data: OnBoardingInput) => {
    submitMutation.mutate(data);
  };

  const onClickNickNameCheck = async () => {
    // const nickName = getValues('nickName');
    // const { data } = await axios.get(`https://api.duo-duo/user/checkNick?lolNickName=${nickName}`);
    setValue('nickNameCheck', true);
    clearErrors('nickNameCheck');
  };
  const voiceButtonIsState = (innerText: string) => {
    if (useVoice === innerText) return true;
    return false;
  };

  const onClickVoiceButton = (e: React.MouseEvent<HTMLButtonElement>, innerText: string) => {
    e.preventDefault();
    const value = innerText === '사용해요';
    setUseVoice(innerText);
    setValue('useVoice', value);
  };

  return (
    <OnBoardingContainer onSubmit={handleSubmit(onSubmitOnBoarding)}>
      <OnBoardingEachContainer>
        <Asking
          title="소환사명을 알려주세요"
          caption="정확한 소환사명을 알려줘야지 남의 계정으로 하면 서비스 사용에 제재를 받을 수 있다고 알리기!!! 혹은 상대가 너를 찾을 수 없어요"
        >
          <div className="container">
            <div className="flexContainer">
              <TextField
                {...register('nickName')}
                name="nickName"
                placeholder="정확한 소환사명을 입력해주세요"
              />
              <NickNameButton onClick={onClickNickNameCheck} type="button">
                <Typography nowrap variant="body4">
                  확인
                </Typography>
              </NickNameButton>
            </div>
            <Typography color="error" data-testid="nickNameError" variant="caption">
              {errors?.nickName?.message || errors?.nickNameCheck?.message}
            </Typography>
          </div>
        </Asking>
      </OnBoardingEachContainer>
      <OnBoardingEachContainer>
        <Asking
          title="소환사님의 플레이스타일은? 우리가 좋은 듀오 구해드릴게~"
          caption="부가설명 내용입니다"
        >
          <div className="container">
            <ChipContainer>
              {playStyle.map((style) => (
                <React.Fragment key={style}>
                  <SelectChip value={style} key={style} htmlFor={style}>
                    {style}
                  </SelectChip>
                  <CustomCheckbox
                    {...register('playStyle')}
                    key={`${style} 온보딩`}
                    type="checkbox"
                    id={style}
                    value={style}
                  />
                </React.Fragment>
              ))}
            </ChipContainer>
            <Typography color="error" variant="caption">
              {(errors?.playStyle as any)?.message}
            </Typography>
          </div>
        </Asking>
      </OnBoardingEachContainer>
      <OnBoardingEachContainer>
        <Asking title="선호하는 포지션을 알려주세요" caption="부가설명 내용입니다">
          <div className="container">
            <ChipContainer>
              {position.map((pos) => (
                <React.Fragment key={pos}>
                  <SelectChip value={pos} key={pos} htmlFor={pos}>
                    {pos}
                  </SelectChip>
                  <CustomCheckbox
                    {...register('position')}
                    key={`${pos} 온보딩`}
                    type="checkbox"
                    id={pos}
                    value={pos}
                  />
                </React.Fragment>
              ))}
            </ChipContainer>
            <Typography color="error" variant="caption">
              {(errors?.position as any)?.message}
            </Typography>
          </div>
        </Asking>
      </OnBoardingEachContainer>
      <OnBoardingEachContainer>
        <Asking title="음성 채팅을 사용하시나요?" caption="부가설명 내용입니다">
          <div className="container">
            <VoiceButtonContainer>
              <VoiceButton
                data-testid="useVoice"
                onClick={(e) => onClickVoiceButton(e, '사용해요')}
                active={voiceButtonIsState('사용해요')}
                {...register('useVoice')}
              >
                사용해요
              </VoiceButton>
              <VoiceButton
                onClick={(e) => {
                  onClickVoiceButton(e, '사용하지 않아요');
                  setValue('voiceChannel', []);
                }}
                active={voiceButtonIsState('사용하지 않아요')}
              >
                사용하지 않아요
              </VoiceButton>
            </VoiceButtonContainer>
            <Typography color="error" variant="caption">
              {(errors?.useVoice as any)?.message}
            </Typography>
          </div>
          {useVoice === '사용해요' && (
            <div className="container">
              <Typography data-testid="useVoiceTitle" variant="caption">
                어떤 채널을 주로 사용하시는지도 알려주세요.
              </Typography>
              <ChipContainer>
                {voiceChannel.map((channel) => (
                  <React.Fragment key={channel}>
                    <SelectChip value={channel} key={channel} htmlFor={channel}>
                      {channel}
                    </SelectChip>
                    <CustomCheckbox
                      value={channel}
                      key={`${channel} 온보딩`}
                      type="checkbox"
                      id={channel}
                      {...register('voiceChannel')}
                    />
                  </React.Fragment>
                ))}
              </ChipContainer>
              <Typography color="error" variant="caption">
                {(errors?.voiceChannel as any)?.message}
              </Typography>
            </div>
          )}
        </Asking>
      </OnBoardingEachContainer>
      <OnBoardingEachContainer>
        <Asking title="어떤 소통을 선호하시나요?" caption="부가설명 내용입니다">
          <CheckboxContainer>
            {communication.map((item) => (
              <Radio register={registerProps} label={item} key={item} />
            ))}
          </CheckboxContainer>
        </Asking>
      </OnBoardingEachContainer>
      <SubmitButton active={isValid} type="submit" data-testid="submit">
        <Typography variant="body1">내 듀오 찾으러 가기</Typography>
      </SubmitButton>
    </OnBoardingContainer>
  );
}

export default OnBoarding;
