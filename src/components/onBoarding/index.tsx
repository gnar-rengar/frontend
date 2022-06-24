import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import useOnBoardingMutation from '../../hooks/useOnBoardingMutation';
import { OnBoardingInput } from '../../types/onBoarding.type';
import { Asking, Chip, Radio, TextField, Typography } from '../common';
=======
<<<<<<< HEAD
import { CheckBox, Chip, Typography, TextField } from '../common';
=======
import useOnBoardingMutation from '../../hooks/useOnBoardingMutation';
import { OnBoardingInput } from '../../types/onBoarding.type';
=======
import useOnBoardingMutation from '../../hooks/useOnBoardingMutation';
import { OnBoardingInput } from '../../types/onBoarding.type';
import Asking from '../common/Asking';
>>>>>>> 85794c1 (asking 컴포넌트를 이용한 리팩토링)
import Chip from '../common/Chip';
import Radio from '../common/Radio';
import { Input } from '../common/TextField.style';
import Typography from '../common/Typography';
<<<<<<< HEAD
>>>>>>> ffb96d8 (checkbox -> radio 버튼으로 변경)
>>>>>>> cd2f4e1 (checkbox -> radio 버튼으로 변경)
=======
import { CheckBox, Chip, Typography, TextField } from '../common';
>>>>>>> ea32a1f (UDFM-12 - 프론트엔드 리뷰 작성 페이지 (#25))
=======
>>>>>>> 85794c1 (asking 컴포넌트를 이용한 리팩토링)
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
    getValues,
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
  const [checkedPlayStyle, setCheckedPlayStyle] = useState<string[]>([]);
  const [checkedPosition, setCheckedPosition] = useState<string[]>([]);
  const [checkedVoice, setCheckedVoice] = useState<string[]>([]);
  const [useVoice, setUseVoice] = useState('');
  const submitMutation = useOnBoardingMutation();

  const onSubmitOnBoarding: SubmitHandler<OnBoardingInput> = (data: OnBoardingInput) => {
    console.log(data);
    submitMutation.mutate(data);
  };

  const onClickNickNameCheck = async () => {
    const nickName = getValues('nickName');
    const { data } = await axios.get(`/user/checkNick?lolNickName=${nickName}`);
    console.log(data);
    setValue('nickNameCheck', true);
    clearErrors('nickNameCheck');
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
<<<<<<< HEAD
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
          </div>
          <Typography color="error" data-testid="nickNameError" variant="caption">
            {errors?.nickName?.message || errors?.nickNameCheck?.message}
          </Typography>
=======
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
            <Typography color="error" data-testid="nickNameError" variant="caption">
              {errors?.nickName?.message}
            </Typography>
          </div>
>>>>>>> 85794c1 (asking 컴포넌트를 이용한 리팩토링)
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
                  <Chip
                    chosen={checkedPlayStyle.includes(style)}
                    onClick={(e) => onClickCheckbox(e, checkedPlayStyle, setCheckedPlayStyle)}
                    key={style}
                    htmlfor={style}
                  >
                    {style}
                  </Chip>
                  <CustomCheckbox
<<<<<<< HEAD
                    {...register('playStyle')}
=======
                    {...register('playStyle', {
                      required: onBoardingErrorMessage.checkbox,
                    })}
>>>>>>> 85794c1 (asking 컴포넌트를 이용한 리팩토링)
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
                  <Chip
                    chosen={checkedPosition.includes(pos)}
                    key={pos}
                    htmlfor={pos}
                    onClick={(e) => onClickCheckbox(e, checkedPosition, setCheckedPosition)}
                  >
                    {pos}
                  </Chip>
                  <CustomCheckbox
<<<<<<< HEAD
                    {...register('position')}
=======
                    {...register('position', {
                      required: onBoardingErrorMessage.checkbox,
                    })}
>>>>>>> 85794c1 (asking 컴포넌트를 이용한 리팩토링)
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
<<<<<<< HEAD
                {...register('useVoice')}
=======
                {...register('useVoice', {
                  required: onBoardingErrorMessage.checkbox,
                })}
>>>>>>> 85794c1 (asking 컴포넌트를 이용한 리팩토링)
              >
                사용해요
              </VoiceButton>
              <VoiceButton
<<<<<<< HEAD
                onClick={(e) => {
                  onClickVoiceButton(e, '사용하지 않아요');
                  setValue('voiceChannel', []);
                }}
=======
                onClick={(e) => onClickVoiceButton(e, '사용하지 않아요')}
>>>>>>> 85794c1 (asking 컴포넌트를 이용한 리팩토링)
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 85794c1 (asking 컴포넌트를 이용한 리팩토링)
        <Asking title="어떤 소통을 선호하시나요?" caption="부가설명 내용입니다">
          <CheckboxContainer>
            {communication.map((item) => (
              <Radio register={registerProps} label={item} key={item} />
            ))}
          </CheckboxContainer>
        </Asking>
<<<<<<< HEAD
=======
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
>>>>>>> cd2f4e1 (checkbox -> radio 버튼으로 변경)
=======
>>>>>>> 85794c1 (asking 컴포넌트를 이용한 리팩토링)
      </OnBoardingEachContainer>
      <SubmitButton active={isValid} type="submit" data-testid="submit">
        <Typography variant="body1">내 듀오 찾으러 가기</Typography>
      </SubmitButton>
    </OnBoardingContainer>
  );
}

export default OnBoarding;
