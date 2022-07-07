import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import Image from 'next/image';
import { axios } from '../../axios';
import {
  communication,
  onBoardingErrorMessage,
  position,
  voiceChannel,
  playStyle,
} from '../../constant';
import useOnBoardingMutation from '../../hooks/useOnBoardingMutation';
import { NicknameCheckDTO, OnBoardingInput } from '../../types/api.type';
import { Asking, Radio, TextField, Typography } from '../common';
import {
  CheckboxContainer,
  ChipContainer,
  CustomInputBox,
  IconAndNickname,
  IconImageContainer,
  NickNameButton,
  NicknameContainer,
  OnBoardingContainer,
  OnBoardingEachContainer,
  PlayStyleContainer,
  PlayStyleRadio,
  SubmitButton,
  VoiceButton,
  VoiceButtonContainer,
} from './style';
import CheckBoxChip from '../common/chip/CheckBoxChip';
import RadioChip from '../common/chip/RadioChip';

const validationSchema = yup.object().shape({
  nickName: yup.string().required(onBoardingErrorMessage.nickName),
  nickNameCheck: yup.boolean().oneOf([true], onBoardingErrorMessage.nickNameCheck),
  position: yup
    .array(yup.string())
    .min(1, onBoardingErrorMessage.checkbox)
    .max(2, onBoardingErrorMessage.checkbox),
  useVoice: yup.boolean().typeError(onBoardingErrorMessage.checkbox),
  voiceChannel: yup.array(yup.string()).when('useVoice', {
    is: true,
    then: (schema) => schema.min(1, onBoardingErrorMessage.checkbox),
  }),
  communication: yup.string().when('useVoice', {
    is: true,
    then: (schema) => schema.required(onBoardingErrorMessage.checkbox),
  }),
  playStyle: yup.array(yup.string()).min(4, onBoardingErrorMessage.checkbox),
});

function OnBoarding() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
    clearErrors,
    watch,
  } = useForm<OnBoardingInput>({
    defaultValues: {
      nickName: '',
      nickNameCheck: false,
      position: [],
      voiceChannel: [],
      useVoice: null,
      communication: '',
      playStyle: [],
    },
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
  });
  const router = useRouter();
  const nickNameButtonActive = watch('nickNameCheck');
  const nickNameInputActive = watch('nickName');
  const registerProps = register('communication');
  const [useVoice, setUseVoice] = useState('');
  const [summonerIcon, setSummonerIcon] = useState('/icons/onBoarding.png');
  const [nickNameCheck, setNicknameCheck] = useState(false);
  const submitMutation = useOnBoardingMutation();

  useEffect(() => {
    const errorsArr = Object.keys(errors);
    if (errorsArr.length > 0) {
      router.push(`#${errorsArr[0]}`);
    }
  }, [errors]);

  const onSubmitOnBoarding: SubmitHandler<OnBoardingInput> = (data: OnBoardingInput) => {
    submitMutation.mutate(data);
  };

  const onClickNickNameCheck = async () => {
    try {
      const { data } = await axios.get<NicknameCheckDTO>(
        `/user/checkNick?lolNickName=${nickNameInputActive}`
      );
      setNicknameCheck(data.success);
      setSummonerIcon(data.profileUrl);
      setValue('nickNameCheck', true, { shouldValidate: true });
      clearErrors('nickNameCheck');
    } catch (error) {
      // console.error(error);
    }
  };
  const voiceButtonIsState = (innerText: string) => {
    if (useVoice === innerText) return true;
    return false;
  };

  const onClickVoiceButton = (e: React.MouseEvent<HTMLButtonElement>, innerText: string) => {
    e.preventDefault();
    const value = innerText === '사용해요';
    setUseVoice(innerText);
    setValue('useVoice', value, { shouldValidate: true });
  };

  return (
    <OnBoardingContainer onSubmit={handleSubmit(onSubmitOnBoarding)} id="nickName">
      <OnBoardingEachContainer id="nickNameCheck">
        <Asking
          title="소환사명을 알려주세요"
          caption={'본인 계정의 소환사명을 입력해주세요.\n타인 계정 도용 시 제재를 받을 수 있어요.'}
          space="pre-line"
        >
          <div className="container">
            <IconAndNickname>
              <IconImageContainer>
                <Image src={summonerIcon} width={48} height={48} />
              </IconImageContainer>
              <NicknameContainer>
                <TextField
                  active={nickNameInputActive && nickNameCheck}
                  {...register('nickName')}
                  name="nickName"
                  placeholder="소환사명 입력"
                />
                <NickNameButton
                  onClick={onClickNickNameCheck}
                  type="button"
                  active={nickNameButtonActive && nickNameCheck}
                >
                  <Typography space="nowrap" variant="body4" paragraph>
                    확인
                  </Typography>
                </NickNameButton>
              </NicknameContainer>
            </IconAndNickname>
            <Typography color="error" data-testid="nickNameError" variant="caption" paragraph>
              {errors?.nickName?.message || errors?.nickNameCheck?.message}
            </Typography>
          </div>
        </Asking>
      </OnBoardingEachContainer>
      <OnBoardingEachContainer id="position">
        <Asking title="어느 포지션을 선호하세요?" caption="최대 두 포지션을 선택할 수 있어요">
          <div className="container">
            <ChipContainer>
              {position.map((pos) => (
                <React.Fragment key={pos}>
                  <CheckBoxChip colorProp="primary" value={pos} key={pos} htmlFor={pos}>
                    {pos}
                  </CheckBoxChip>
                  <CustomInputBox
                    {...register('position')}
                    key={`${pos} 온보딩`}
                    type="checkbox"
                    id={pos}
                    value={pos}
                  />
                </React.Fragment>
              ))}
            </ChipContainer>
            <Typography color="error" variant="caption" paragraph>
              {(errors?.position as any)?.message}
            </Typography>
          </div>
        </Asking>
      </OnBoardingEachContainer>
      <OnBoardingEachContainer id="useVoice">
        <Asking title="음성 채팅을 사용하시나요?" paragraph>
          <div className="container" id="vocieChannel">
            <VoiceButtonContainer>
              <VoiceButton
                data-testid="useVoice"
                onClick={(e) => onClickVoiceButton(e, '사용해요')}
                active={voiceButtonIsState('사용해요')}
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
            <Typography color="error" variant="caption" paragraph>
              {(errors?.useVoice as any)?.message}
            </Typography>
          </div>
          {useVoice === '사용해요' && (
            <div className="container">
              <Typography data-testid="useVoiceTitle" variant="caption" paragraph>
                어떤 채널을 주로 사용하시는지도 알려주세요.
              </Typography>
              <ChipContainer>
                {voiceChannel.map((channel) => (
                  <React.Fragment key={channel}>
                    <CheckBoxChip
                      colorProp="primary"
                      value={channel}
                      key={channel}
                      htmlFor={channel}
                    >
                      {channel}
                    </CheckBoxChip>
                    <CustomInputBox
                      value={channel}
                      key={`${channel} 온보딩`}
                      type="checkbox"
                      id={channel}
                      {...register('voiceChannel')}
                    />
                  </React.Fragment>
                ))}
              </ChipContainer>
              <Typography color="error" variant="caption" paragraph>
                {(errors?.voiceChannel as any)?.message}
              </Typography>
              <Typography data-testid="useVoiceTitle" variant="caption">
                어떤 소통을 선호하시는지도 알려주세요.
              </Typography>
              <CheckboxContainer>
                {communication.map((item) => (
                  <Radio register={registerProps} label={item} key={item} />
                ))}
              </CheckboxContainer>
            </div>
          )}
        </Asking>
      </OnBoardingEachContainer>
      <OnBoardingEachContainer id="playStyle">
        <Asking
          title="플레이스타일을 알려주세요"
          caption="답변을 토대로 플레이 스타일이 자동 설정되어 있어요"
        >
          <PlayStyleContainer>
            {playStyle.map((style) => (
              <PlayStyleRadio key={style[0] + style[1]}>
                <RadioChip
                  name={style[0] + style[1]}
                  width="fix"
                  colorProp="primary"
                  value={style[0]}
                  htmlFor={style[0]}
                >
                  {style[0]}
                </RadioChip>
                <CustomInputBox
                  value={style[0]}
                  type="radio"
                  id={style[0]}
                  name={style[0] + style[1]}
                  {...register('playStyle')}
                />
                <Typography paragraph variant="body3" color="onBackgroundSub">
                  VS
                </Typography>
                <RadioChip
                  name={style[0] + style[1]}
                  width="fix"
                  colorProp="primary"
                  value={style[1]}
                  htmlFor={style[1]}
                >
                  {style[1]}
                </RadioChip>
                <CustomInputBox
                  value={style[1]}
                  type="radio"
                  id={style[1]}
                  name={style[0] + style[1]}
                  {...register('playStyle')}
                />
              </PlayStyleRadio>
            ))}
          </PlayStyleContainer>
        </Asking>
      </OnBoardingEachContainer>
      <SubmitButton active={isValid} type="submit" data-testid="submit">
        <Typography variant="body1">내 듀오 찾으러 가기</Typography>
      </SubmitButton>
    </OnBoardingContainer>
  );
}

export default OnBoarding;
