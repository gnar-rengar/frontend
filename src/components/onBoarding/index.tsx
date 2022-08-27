/* eslint-disable react/forbid-prop-types */
import { useTheme } from '@emotion/react';
import { yupResolver } from '@hookform/resolvers/yup';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useMemo, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';
import * as yup from 'yup';
import { onBoardingState } from '../../atom';
import { axios } from '../../axios';
import { communication, onBoardingErrorMessage, position, voiceChannel } from '../../constant';
import useGetOnBoarding from '../../hooks/useGetOnBoarding';
import useOnBoardingMutation from '../../hooks/useOnBoardingMutation';
import { NicknameCheckDTO, OnBoardingInput, PlayStyleType } from '../../types/api.type';
import { Asking, Button, Radio, StickyBottom, TextField, Typography } from '../common';
import CheckBoxChip from '../common/chip/CheckBoxChip';
import ChoicePlayStyle from './ChoicePlayStyle';
import PlayStyleChip from './PlayStyleChip';
import {
  CheckboxContainer,
  ChipContainer,
  Container,
  CustomButtonContainer,
  IconAndNickname,
  IconImageContainer,
  NickNameButton,
  NicknameContainer,
  OnBoardingContainer,
  OnBoardingEachContainer,
  TitleContainer,
} from './style';

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
  choicePlayStyle: yup.boolean(),
  playStyle: yup
    .object({
      battle: yup.string(),
      line: yup.string(),
      champion: yup.string(),
      physical: yup.string(),
    })
    .when('choicePlayStyle', {
      is: false,
      then: yup.object({
        battle: yup.string().nullable(),
        line: yup.string().nullable(),
        champion: yup.string().nullable(),
        physical: yup.string().nullable(),
      }),
    }),
});

function OnBoarding() {
  const router = useRouter();
  const { type } = router.query;
  const userData = useGetOnBoarding();

  const getLocalStorage: () => PlayStyleType = () => {
    if (typeof window !== 'undefined') {
      return JSON.parse(localStorage.getItem('tendencyResult'));
    }
    return null;
  };

  const userDataDefaultValues = useMemo(
    () => ({
      lolNickname: userData?.lolNickname || '',
      nickNameCheck: !!userData?.lolNickname || false,
      choicePlayStyle: true,
      playStyle:
        {
          battle: userData?.playStyle[0],
          line: userData?.playStyle[1],
          champion: userData?.playStyle[2],
          physical: userData?.playStyle[3],
        } || getLocalStorage(),
      position: userData?.position || [],
      voiceChannel: userData?.voiceChannel || [],
      useVoice: !!userData?.useVoice,
      communication: userData?.communication || '',
    }),
    [userData]
  );

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
    clearErrors,
    watch,
    getValues,
    setError,
    reset,
  } = useForm<OnBoardingInput<PlayStyleType>>({
    defaultValues: {
      lolNickname: '',
      nickNameCheck: false,
      choicePlayStyle: true,
      playStyle: getLocalStorage(),
      position: [],
      voiceChannel: [],
      useVoice: false,
      communication: '',
    },
    resolver: yupResolver(onBoardingSchema),
    mode: 'onChange',
  });
  const nickNameButtonActive = watch('nickNameCheck');
  const nickNameInputActive = watch('lolNickname');
  const useVoiceValue = getValues('useVoice');
  const choicePlayStyleValue = getValues('choicePlayStyle');
  const [summonerIcon, setSummonerIcon] = useState('/icons/onBoarding.png');
  const setOnboardingData = useSetRecoilState(onBoardingState);
  const submitMutation = useOnBoardingMutation();

  const {
    icon: {
      size: { xl },
    },
  } = useTheme();

  useEffect(() => {
    if (userData.playStyle.length > 0) {
      reset(userDataDefaultValues);
    }
  }, [userData]);

  useEffect(() => {
    if (userData?.profileUrl) setSummonerIcon(userData?.profileUrl);
  }, [userData]);

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

    if (!choicePlayStyleValue) {
      setOnboardingData((prev) => ({
        ...prev,
        ...values,
      }));
      router.push('/tendency-test');
    } else {
      submitMutation.mutate(values);
    }
  };

  const nickNameCheck = async () => {
    try {
      const { data } = await axios.get<NicknameCheckDTO>(
        `/onboarding/checkNick?lolNickname=${nickNameInputActive}`
      );
      setSummonerIcon(data.profileUrl);
      setValue('nickNameCheck', true, { shouldValidate: true });
      setValue('lolNickname', data.lolNickname);
      clearErrors('nickNameCheck');
    } catch (error) {
      if (error.response.status === 404) {
        setError('nickNameCheck', { type: 'focus', message: onBoardingErrorMessage.notExist });
      }
    }
  };

  const enterNickNameCheck = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      nickNameCheck();
    }
  };

  const onClickVoiceButton = (e: React.MouseEvent<HTMLButtonElement>, innerText: string) => {
    e.preventDefault();
    const value = innerText === '사용해요';
    setValue('useVoice', value, { shouldValidate: true });
  };

  const onChoicePlayStyleButton = (e: React.MouseEvent<HTMLButtonElement>, innerText: string) => {
    e.preventDefault();
    const value = innerText === '직접 선택할게요';
    setValue('choicePlayStyle', value, { shouldValidate: true });
  };

  return (
    <>
      <OnBoardingContainer onSubmit={handleSubmit(onSubmitOnBoarding)} id="lolNickname">
        <OnBoardingEachContainer gap={false}>
          <TitleContainer>
            <Typography variant="h3">
              반가워요, 소환사님.
              <br />
              몇 가지 정보만 입력해주시면
              <br />
              찰떡궁합 듀오를 추천해드릴게요
            </Typography>
            <Image src="/icons/cat.png" width={xl} height={xl} alt="intro text" />
          </TitleContainer>
        </OnBoardingEachContainer>
        <OnBoardingEachContainer gap id="nickNameCheck">
          <Asking
            title="소환사명을 알려주세요"
            caption={
              '본인 계정의 소환사명을 입력해주세요.\n타인 계정 도용 시 제재를 받을 수 있어요.'
            }
            whiteSpace="pre-line"
          >
            <Container>
              <IconAndNickname>
                <IconImageContainer>
                  <Image src={summonerIcon} width={48} height={48} alt="summonerIcon" />
                </IconImageContainer>
                <NicknameContainer>
                  <TextField
                    active={nickNameActiveMemo}
                    {...register('lolNickname')}
                    name="lolNickname"
                    placeholder="소환사명 입력"
                    onKeyDown={enterNickNameCheck}
                  />
                  <NickNameButton onClick={nickNameCheck} type="button" active={nickNameActiveMemo}>
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
                      checkedMax={2}
                      color="primary"
                      register={register('position')}
                      key={pos[0]}
                      htmlFor={pos[0]}
                      value={pos[0]}
                      watch={watch('position')}
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
              <CustomButtonContainer>
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
              </CustomButtonContainer>
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
                      <React.Fragment key={channel}>
                        <CheckBoxChip
                          color="primary"
                          key={channel}
                          htmlFor={channel}
                          value={channel}
                          register={register('voiceChannel')}
                          watch={watch('voiceChannel')}
                        >
                          {channel}
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
          {type === 'notTest' ? (
            <ChoicePlayStyle
              onChoicePlayStyleButton={onChoicePlayStyleButton}
              choicePlayStyleValue={choicePlayStyleValue}
              register={register}
              watch={watch}
            />
          ) : (
            <Asking
              title="플레이스타일을 알려주세요"
              caption="답변을 토대로 플레이 스타일이 자동 설정되어 있어요"
            >
              <PlayStyleChip register={register} watch={watch} />
            </Asking>
          )}
        </OnBoardingEachContainer>
      </OnBoardingContainer>
      <StickyBottom>
        <Button
          size="lg"
          color={isValid ? 'primaryVariant' : 'disable'}
          onClick={handleSubmit(onSubmitOnBoarding)}
        >
          {choicePlayStyleValue ? '내 듀오 찾으러 가기' : '내 플레이 스타일 찾으러 가기'}
        </Button>
      </StickyBottom>
    </>
  );
}

export default OnBoarding;
