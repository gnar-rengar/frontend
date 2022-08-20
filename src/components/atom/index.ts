import { atom } from 'recoil';

export const testState = atom({
  key: 'test',
  default: {
    lolNickname: '',
    nickNameCheck: false,
    playStyle: null,
    position: [],
    voiceChannel: [],
    useVoice: false,
    communication: '',
  },
});
