import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { playStyle, position, voiceChannel } from '../../dictionary';
import Chip from '../common/Chip';
import { Input } from '../common/TextField.style';
import Typography from '../common/Typography';
import {
  ChipContainer,
  NickNameButton,
  OnBoardingContainer,
  OnBoardingEachContainer,
  SubmitButton,
  VoiceButton,
  VoiceButtonContainer,
} from './style';

interface OnBoardingInput {
  nickname: string;
}

function OnBoarding() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<OnBoardingInput>();

  const onSubmitOnBoarding: SubmitHandler<OnBoardingInput> = (data: OnBoardingInput) => {
    console.log(data);
  };

  console.log(errors);
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
        <div className="nickNameContainer">
          <div className="flexContainer">
            <Input
              {...register('nickname', {
                required: '소환사명을 입력해주세요.',
              })}
              name="nickName"
              placeholder="정확한 소환사명을 입력해주세요"
            />
            <NickNameButton>
              <Typography variant="body4">확인</Typography>
            </NickNameButton>
          </div>
          <Typography variant="caption">{errors?.nickname?.message}</Typography>
        </div>
      </OnBoardingEachContainer>
      <OnBoardingEachContainer>
        <div className="titleContainer">
          <Typography variant="h3" align="left">
            소환사님의 플레이스타일은? 우리가 좋은 듀오 구해드릴게~
          </Typography>
          <Typography variant="caption">부가설명 내용입니다</Typography>
        </div>
        <ChipContainer>
          {playStyle.map((style) => (
            <Chip key={style}>{style}</Chip>
          ))}
        </ChipContainer>
      </OnBoardingEachContainer>
      <OnBoardingEachContainer>
        <div className="titleContainer">
          <Typography variant="h3" align="left">
            선호하는 포지션을 알려주세요
          </Typography>
          <Typography variant="caption">부가설명 내용입니다</Typography>
        </div>
        <ChipContainer>
          {position.map((pos) => (
            <Chip key={pos}>{pos}</Chip>
          ))}
        </ChipContainer>
      </OnBoardingEachContainer>
      <OnBoardingEachContainer>
        <div className="titleContainer">
          <Typography variant="h3" align="left">
            음성 채팅을 사용하시나요?
          </Typography>
          <Typography variant="caption">부가설명 내용입니다</Typography>
        </div>
        <VoiceButtonContainer>
          <VoiceButton>사용해요</VoiceButton>
          <VoiceButton>사용하지 않아요</VoiceButton>
        </VoiceButtonContainer>
        <div className="titleContainer">
          <Typography variant="caption">어떤 채널을 주로 사용하시는지도 알려주세요.</Typography>
          <ChipContainer>
            {voiceChannel.map((channel) => (
              <Chip key={channel}>{channel}</Chip>
            ))}
          </ChipContainer>
        </div>
      </OnBoardingEachContainer>
      <OnBoardingEachContainer>
        <div className="titleContainer">
          <Typography variant="h3" align="left">
            어떤 소통을 선호하시나요?
          </Typography>
          <Typography variant="caption">부가설명 내용입니다</Typography>
        </div>
      </OnBoardingEachContainer>
      <SubmitButton type="submit">
        <Typography variant="body1">내 듀오 찾으러 가기</Typography>
      </SubmitButton>
    </OnBoardingContainer>
  );
}

export default OnBoarding;
