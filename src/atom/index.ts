import { atom } from 'recoil';
import { v1 } from 'uuid';
import { OnBoardingInput, PlayStyleType } from '../types/api.type';

export const onBoardingState = atom<OnBoardingInput<PlayStyleType | string[]>>({
  key: `onBoarding/${v1()}`,
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

export const modalState = atom<boolean>({
  key: `modal/${v1()}`,
  default: false,
});
