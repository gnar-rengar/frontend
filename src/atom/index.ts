import { atom } from 'recoil';
import { OnBoardingInput, PlayStyleType } from '../types/api.type';

export const onBoardingState = atom<OnBoardingInput<PlayStyleType | string[]>>({
  key: 'onBoarding',
  default: {
    lolNickname: '',
    profileUrl: '',
    nickNameCheck: false,
    choicePlayStyle: true,
    playStyle: null,
    position: [],
    voiceChannel: [],
    useVoice: false,
    communication: '',
  },
});
