/* eslint-disable react/forbid-prop-types */
import { yupResolver } from '@hookform/resolvers/yup';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { axios } from '../../axios';
import {
  communication,
  onBoardingErrorMessage,
  playStyleText,
  position,
  voiceChannel,
} from '../../constant';
import useOnBoardingMutation from '../../hooks/useOnBoardingMutation';
import { NicknameCheckDTO, OnBoardingInput } from '../../types/api.type';
import { Asking, Button, Radio, TextField, Typography } from '../common';
import CheckBoxChip from '../common/chip/CheckBoxChip';
import RadioChip from '../common/chip/RadioChip';
import {
  CheckboxContainer,
  ChipContainer,
  Container,
  CustomInputBox,
  IconAndNickname,
  IconImageContainer,
  NickNameButton,
  NicknameContainer,
  OnBoardingContainer,
  OnBoardingEachContainer,
  PlayStyleContainer,
  PlayStyleRadio,
  VoiceButtonContainer,
} from './style';

type PlayStyleKey = 'battle' | 'line' | 'champion' | 'physical';

const validationSchema = yup.object().shape({
  lolNickname: yup.string().required(onBoardingErrorMessage.nickName),
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
  playStyle: yup.object({
    battle: yup.string().required(),
    line: yup.string().required(),
    champion: yup.string().required(),
    physical: yup.string().required(),
  }),
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
      lolNickname: '',
      nickNameCheck: false,
      position: [],
      voiceChannel: [],
      useVoice: null,
      communication: '',
    },
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
  });
  const router = useRouter();
  const nickNameButtonActive = watch('nickNameCheck');
  const nickNameInputActive = watch('lolNickname');
  const registerProps = register('communication');
  const [useVoice, setUseVoice] = useState('');
  const [summonerIcon, setSummonerIcon] = useState('/icons/onBoarding.png');
  const [nickNameCheck, setNicknameCheck] = useState(false);
  const [radioChecked, setRadioChecked] = useState('');
  const submitMutation = useOnBoardingMutation();

  useEffect(() => {
    const errorsArr = Object.keys(errors);
    if (errorsArr.length > 0) {
      router.push(`#${errorsArr[0]}`);
    }
  }, [errors]);

  const onSubmitOnBoarding: SubmitHandler<OnBoardingInput> = (data: OnBoardingInput) => {
    // const playStyle = Object.values(data.playStyle);
    // const values = {
    //   ...data,
    //   profileImage: summonerIcon,
    //   playStyle,
    // };
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
    <OnBoardingContainer onSubmit={handleSubmit(onSubmitOnBoarding)} id="lolNickname">
      <OnBoardingEachContainer gap id="nickNameCheck">
        <Asking
          title="소환사명을 알려주세요"
          caption={'본인 계정의 소환사명을 입력해주세요.\n타인 계정 도용 시 제재를 받을 수 있어요.'}
          space="pre-line"
        >
          <Container>
            <IconAndNickname>
              <IconImageContainer>
                <Image src={summonerIcon} width={48} height={48} />
              </IconImageContainer>
              <NicknameContainer>
                <TextField
                  active={nickNameInputActive && nickNameCheck}
                  {...register('lolNickname')}
                  name="lolNickname"
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
              {errors?.lolNickname?.message || errors?.nickNameCheck?.message}
            </Typography>
          </Container>
        </Asking>
      </OnBoardingEachContainer>
      <OnBoardingEachContainer gap id="position">
        <Asking title="어느 포지션을 선호하세요?" caption="최대 두 포지션을 선택할 수 있어요">
          <Container>
            <ChipContainer>
              {position.map((pos) => (
                <React.Fragment key={pos[1]}>
                  <CheckBoxChip color="primary" value={pos[0]} key={pos[0]} htmlFor={pos[0]}>
                    {pos[0]}
                  </CheckBoxChip>
                  <CustomInputBox
                    {...register('position')}
                    key={`${pos[1]} 온보딩`}
                    type="checkbox"
                    id={pos[0]}
                    value={pos[1]}
                  />
                </React.Fragment>
              ))}
            </ChipContainer>
            <Typography color="error" variant="caption" paragraph>
              {(errors?.position as any)?.message}
            </Typography>
          </Container>
        </Asking>
      </OnBoardingEachContainer>
      <OnBoardingEachContainer gap={false} id="useVoice">
        <Asking title="음성 채팅을 사용하시나요?" paragraph>
          <Container id="voiceChannel">
            <VoiceButtonContainer>
              <Button
                size="md"
                type="button"
                onClick={(e) => onClickVoiceButton(e, '사용해요')}
                color={voiceButtonIsState('사용해요') ? 'primary' : 'disable'}
              >
                사용해요
              </Button>
              <Button
                size="md"
                type="button"
                onClick={(e) => {
                  onClickVoiceButton(e, '사용하지 않아요');
                  setValue('voiceChannel', []);
                }}
                color={voiceButtonIsState('사용하지 않아요') ? 'primary' : 'disable'}
              >
                사용하지 않아요
              </Button>
            </VoiceButtonContainer>
            {errors?.useVoice && (
              <Typography color="error" variant="caption" paragraph>
                {(errors?.useVoice as any)?.message}
              </Typography>
            )}
          </Container>
        </Asking>
        {useVoice === '사용해요' && (
          <>
            <Container>
              <Asking title="어떤 채널을 주로 사용하시나요?" paragraph>
                <ChipContainer>
                  {voiceChannel.map((channel) => (
                    <React.Fragment key={channel[1]}>
                      <CheckBoxChip
                        color="primary"
                        value={channel[1]}
                        key={channel[1]}
                        htmlFor={channel[1]}
                      >
                        {channel[0]}
                      </CheckBoxChip>
                      <CustomInputBox
                        value={channel[1]}
                        key={`${channel} 온보딩`}
                        type="checkbox"
                        id={channel[1]}
                        {...register('voiceChannel')}
                      />
                    </React.Fragment>
                  ))}
                </ChipContainer>
              </Asking>
              {errors?.voiceChannel && (
                <Typography color="error" variant="caption" paragraph>
                  {(errors?.voiceChannel as any)?.message}
                </Typography>
              )}
            </Container>
            <Container>
              <Asking title="좋아하시는 소통을 알려주세요" paragraph>
                <CheckboxContainer>
                  {communication.map((item) => (
                    <Radio register={registerProps} label={item} key={item} />
                  ))}
                </CheckboxContainer>
              </Asking>
            </Container>
          </>
        )}
      </OnBoardingEachContainer>
      <OnBoardingEachContainer gap id="playStyle">
        <Asking
          title="플레이스타일을 알려주세요"
          caption="답변을 토대로 플레이 스타일이 자동 설정되어 있어요"
        >
          <PlayStyleContainer>
            {Object.keys(playStyleText).map((style: PlayStyleKey) => (
              <PlayStyleRadio key={style}>
                <RadioChip
                  name={style}
                  width="fix"
                  color="primary"
                  value={playStyleText[style][0]}
                  htmlFor={playStyleText[style][0]}
                  radioChecked={radioChecked}
                  setRadioChecked={setRadioChecked}
                  register={register}
                  watch={watch}
                >
                  {playStyleText[style][0]}
                </RadioChip>
                <Typography paragraph variant="body3" color="onBackgroundSub">
                  VS
                </Typography>
                <RadioChip
                  name={style}
                  color="primary"
                  width="fix"
                  value={playStyleText[style][1]}
                  htmlFor={playStyleText[style][1]}
                  radioChecked={radioChecked}
                  setRadioChecked={setRadioChecked}
                  register={register}
                  watch={watch}
                >
                  {playStyleText[style][1]}
                </RadioChip>
              </PlayStyleRadio>
            ))}
          </PlayStyleContainer>
        </Asking>
      </OnBoardingEachContainer>
      <Button size="lg" color={isValid ? 'primaryVariant' : 'disable'} type="submit">
        내 듀오 찾으러 가기
      </Button>
    </OnBoardingContainer>
  );
}

export default OnBoarding;
