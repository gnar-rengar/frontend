/* eslint-disable react/forbid-prop-types */
import { yupResolver } from '@hookform/resolvers/yup';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useMemo, useState } from 'react';
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
import useGetOnBoarding from '../../hooks/useGetOnBoarding';
import useOnBoardingMutation from '../../hooks/useOnBoardingMutation';
import { NicknameCheckDTO, OnBoardingInput, PlayStyleType } from '../../types/api.type';
import { Asking, Button, Radio, StickyBottom, TextField, Typography } from '../common';
import CheckBoxChip from '../common/chip/CheckBoxChip';
import RadioChip from '../common/chip/RadioChip';
import {
  CheckboxContainer,
  ChipContainer,
  Container,
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

const onBoardingSchema = yup.object().shape({
  lolNickname: yup.string().required(onBoardingErrorMessage.nickName),
  nickNameCheck: yup.boolean().oneOf([true], onBoardingErrorMessage.nickNameCheck),
  position: yup
    .array(yup.string())
    .min(1, onBoardingErrorMessage.positionMin)
    .max(2, onBoardingErrorMessage.positionMax),
  useVoice: yup.boolean().typeError(onBoardingErrorMessage.useVoice),
  voiceChannel: yup.array(yup.string()).when('useVoice', {
    is: true,
    then: (schema) => schema.min(1, onBoardingErrorMessage.voiceAndCommunication),
  }),
  communication: yup.string().when('useVoice', {
    is: true,
    then: (schema) => schema.required(onBoardingErrorMessage.voiceAndCommunication),
  }),
  playStyle: yup.object({
    battle: yup.string().required(),
    line: yup.string().required(),
    champion: yup.string().required(),
    physical: yup.string().required(),
  }),
});

function OnBoarding() {
  const router = useRouter();
  const tendencyTestResult = router.query as PlayStyleType | {};
  const [queryEnabled, setQueryEnabled] = useState(false); // 사용자 로그인 정보 api 및 로직 구현 후 적용
  const userData = useGetOnBoarding(queryEnabled, setQueryEnabled);

  const playStyleDefaultValuesFn = () => {
    if (Object.values(tendencyTestResult).length === 0) {
      return {
        battle: userData?.playStyle[0],
        line: userData?.playStyle[1],
        champion: userData?.playStyle[2],
        physical: userData?.playStyle[3],
      };
    }
    return tendencyTestResult;
  };

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
    clearErrors,
    watch,
    getValues,
    setError,
  } = useForm<OnBoardingInput<PlayStyleType>>({
    defaultValues: {
      lolNickname: userData?.lolNickname || '',
      nickNameCheck: !!userData?.lolNickname,
      playStyle: playStyleDefaultValuesFn(),
      position: userData?.position || [],
      voiceChannel: userData?.voiceChannel || [],
      useVoice: userData?.useVoice || true,
      communication: userData?.communication || '',
    },
    resolver: yupResolver(onBoardingSchema),
    mode: 'onChange',
  });
  const nickNameButtonActive = watch('nickNameCheck');
  const nickNameInputActive = watch('lolNickname');
  const useVoiceValue = getValues('useVoice');
  const [summonerIcon, setSummonerIcon] = useState(userData?.profileUrl || '/icons/onBoarding.png');
  const submitMutation = useOnBoardingMutation();

  useEffect(() => {
    const errorsArr = Object.keys(errors);
    if (errorsArr.length > 0) {
      router.push(`#${errorsArr[0]}`);
    }
  }, [errors]);

  const nickNameActiveMemo = useMemo(
    () => (userData?.lolNickname ? true : nickNameInputActive && nickNameButtonActive),
    [userData?.lolNickname, nickNameInputActive, nickNameButtonActive]
  );

  const onSubmitOnBoarding: SubmitHandler<OnBoardingInput<PlayStyleType>> = (
    data: OnBoardingInput<PlayStyleType>
  ) => {
    const playStyle = Object.values(data.playStyle);
    const values = {
      ...data,
      profileUrl: summonerIcon,
      playStyle,
    };
    submitMutation.mutate(values);
  };

  const onClickNickNameCheck = async () => {
    try {
      const { data } = await axios.get<NicknameCheckDTO>(
        `/onboarding/checkNick?lolNickname=${nickNameInputActive}`
      );
      setSummonerIcon(data.profileUrl);
      setValue('nickNameCheck', true, { shouldValidate: true });
      clearErrors('nickNameCheck');
    } catch (error) {
      if (error.response.status === 404) {
        setError('nickNameCheck', { type: 'focus', message: onBoardingErrorMessage.notExist });
      }
    }
  };

  const onClickVoiceButton = (e: React.MouseEvent<HTMLButtonElement>, innerText: string) => {
    e.preventDefault();
    const value = innerText === '사용해요';
    setValue('useVoice', value, { shouldValidate: true });
  };
  return (
    <OnBoardingContainer onSubmit={handleSubmit(onSubmitOnBoarding)} id="lolNickname">
      <OnBoardingEachContainer gap id="nickNameCheck">
        <Asking
          title="소환사명을 알려주세요"
          caption={'본인 계정의 소환사명을 입력해주세요.\n타인 계정 도용 시 제재를 받을 수 있어요.'}
          whiteSpace="pre-line"
        >
          <Container>
            <IconAndNickname>
              <IconImageContainer>
                <Image src={userData?.profileUrl || summonerIcon} width={48} height={48} />
              </IconImageContainer>
              <NicknameContainer>
                <TextField
                  active={nickNameActiveMemo}
                  {...register('lolNickname')}
                  name="lolNickname"
                  placeholder="소환사명 입력"
                />
                <NickNameButton
                  onClick={onClickNickNameCheck}
                  type="button"
                  active={nickNameActiveMemo}
                >
                  <Typography whiteSpace="nowrap" variant="body4" paragraph>
                    확인
                  </Typography>
                </NickNameButton>
              </NicknameContainer>
            </IconAndNickname>
            {(errors?.lolNickname || errors?.nickNameCheck) && (
              <Typography
                color="error"
                data-testid="nickNameError"
                variant="captionRegular"
                paragraph
              >
                {errors?.lolNickname?.message || errors?.nickNameCheck?.message}
              </Typography>
            )}
          </Container>
        </Asking>
      </OnBoardingEachContainer>
      <OnBoardingEachContainer gap id="position">
        <Asking title="어느 포지션을 선호하세요?" caption="최대 두 포지션을 선택할 수 있어요">
          <Container>
            <ChipContainer>
              {position.map((pos) => (
                <React.Fragment key={pos[1]}>
                  <CheckBoxChip
                    color="primary"
                    register={register('position')}
                    key={pos[0]}
                    htmlFor={pos[0]}
                    value={pos[0]}
                    getValues={getValues('position')}
                  >
                    {pos[0]}
                  </CheckBoxChip>
                </React.Fragment>
              ))}
            </ChipContainer>
            {errors?.position && (
              <Typography color="error" variant="captionRegular" paragraph>
                {(errors?.position as any)?.message}
              </Typography>
            )}
          </Container>
        </Asking>
      </OnBoardingEachContainer>
      <OnBoardingEachContainer gap={false} id="useVoice">
        <Asking title="음성 채팅을 사용하시나요?" paragraph>
          <Container id="voiceChannel">
            <VoiceButtonContainer>
              <Button
                size="sm"
                type="button"
                onClick={(e) => onClickVoiceButton(e, '사용해요')}
                color={useVoiceValue ? 'primary' : 'disable'}
              >
                사용해요
              </Button>
              <Button
                size="sm"
                type="button"
                onClick={(e) => {
                  onClickVoiceButton(e, '사용하지 않아요');
                  setValue('voiceChannel', []);
                  setValue('communication', '');
                }}
                color={!useVoiceValue ? 'primary' : 'disable'}
              >
                사용하지 않아요
              </Button>
            </VoiceButtonContainer>
            {errors?.useVoice && (
              <Typography color="error" variant="captionRegular" paragraph>
                {(errors?.useVoice as any)?.message}
              </Typography>
            )}
          </Container>
        </Asking>
        {useVoiceValue && (
          <>
            <Container>
              <Asking title="어떤 채널을 주로 사용하시나요?" paragraph>
                <ChipContainer>
                  {voiceChannel.map((channel) => (
                    <React.Fragment key={channel[1]}>
                      <CheckBoxChip
                        color="primary"
                        key={channel[1]}
                        htmlFor={channel[1]}
                        value={channel[1]}
                        register={register('voiceChannel')}
                        getValues={getValues('voiceChannel')}
                      >
                        {channel[0]}
                      </CheckBoxChip>
                    </React.Fragment>
                  ))}
                </ChipContainer>
              </Asking>
              {errors?.voiceChannel && (
                <Typography color="error" variant="captionRegular" paragraph>
                  {(errors?.voiceChannel as any)?.message}
                </Typography>
              )}
            </Container>
            <Container>
              <Asking title="좋아하시는 소통을 알려주세요" paragraph>
                <CheckboxContainer>
                  {communication.map((item) => (
                    <Radio register={register('communication')} label={item} key={item} />
                  ))}
                </CheckboxContainer>
              </Asking>
              {errors?.communication && (
                <Typography color="error" variant="captionRegular" paragraph>
                  {(errors?.communication as any)?.message}
                </Typography>
              )}
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
        </Asking>
      </OnBoardingEachContainer>
      <StickyBottom>
        <Button size="lg" color={isValid ? 'primaryVariant' : 'disable'} type="submit">
          내 듀오 찾으러 가기
        </Button>
      </StickyBottom>
    </OnBoardingContainer>
  );
}

export default OnBoarding;
