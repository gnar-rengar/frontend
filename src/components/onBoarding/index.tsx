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
import { Asking, Button, Radio, TextField, Typography, StickyBottom } from '../common';
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

const validationSchema = yup.object().shape({
  lolNickname: yup.string().required(onBoardingErrorMessage.nickName),
  nickNameCheck: yup.boolean().oneOf([true], onBoardingErrorMessage.nickNameCheck),
  position: yup
    .array(yup.string())
    .min(1, onBoardingErrorMessage.position)
    .max(2, onBoardingErrorMessage.position),
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
  const [queryEnabled, setQueryEnabled] = useState(false); // ????????? ????????? ?????? api ??? ?????? ?????? ??? ??????
  const userData = useGetOnBoarding(queryEnabled, setQueryEnabled);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
    clearErrors,
    watch,
    getValues,
  } = useForm<OnBoardingInput<PlayStyleType>>({
    defaultValues: {
      lolNickname: userData?.lolNickname || '',
      nickNameCheck: !!userData?.lolNickname,
      playStyle:
        {
          battle: userData?.playStyle[0],
          line: userData?.playStyle[1],
          champion: userData?.playStyle[2],
          physical: userData?.playStyle[3],
        } || null,
      position: userData?.position || [],
      voiceChannel: userData?.voiceChannel || [],
      useVoice: userData?.useVoice || true,
      communication: userData?.communication || '',
    },
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
  });
  const router = useRouter();
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
      // console.error(error);
    }
  };

  const onClickVoiceButton = (e: React.MouseEvent<HTMLButtonElement>, innerText: string) => {
    e.preventDefault();
    const value = innerText === '????????????';
    setValue('useVoice', value, { shouldValidate: true });
  };

  return (
    <OnBoardingContainer onSubmit={handleSubmit(onSubmitOnBoarding)} id="lolNickname">
      <OnBoardingEachContainer gap id="nickNameCheck">
        <Asking
          title="??????????????? ???????????????"
          caption={'?????? ????????? ??????????????? ??????????????????.\n?????? ?????? ?????? ??? ????????? ?????? ??? ?????????.'}
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
                  placeholder="???????????? ??????"
                />
                <NickNameButton
                  onClick={onClickNickNameCheck}
                  type="button"
                  active={nickNameActiveMemo}
                >
                  <Typography whiteSpace="nowrap" variant="body4" paragraph>
                    ??????
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
        <Asking title="?????? ???????????? ????????????????" caption="?????? ??? ???????????? ????????? ??? ?????????">
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
        <Asking title="?????? ????????? ???????????????????" paragraph>
          <Container id="voiceChannel">
            <VoiceButtonContainer>
              <Button
                size="sm"
                type="button"
                onClick={(e) => onClickVoiceButton(e, '????????????')}
                color={useVoiceValue ? 'primary' : 'disable'}
              >
                ????????????
              </Button>
              <Button
                size="sm"
                type="button"
                onClick={(e) => {
                  onClickVoiceButton(e, '???????????? ?????????');
                  setValue('voiceChannel', []);
                  setValue('communication', '');
                }}
                color={!useVoiceValue ? 'primary' : 'disable'}
              >
                ???????????? ?????????
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
              <Asking title="?????? ????????? ?????? ???????????????????" paragraph>
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
              <Asking title="??????????????? ????????? ???????????????" paragraph>
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
          title="????????????????????? ???????????????"
          caption="????????? ????????? ????????? ???????????? ?????? ???????????? ?????????"
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
          ??? ?????? ????????? ??????
        </Button>
      </StickyBottom>
    </OnBoardingContainer>
  );
}

export default OnBoarding;
