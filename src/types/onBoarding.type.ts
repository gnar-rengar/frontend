export interface OnBoardingInput {
  nickName: string;
  nickNameCheck: boolean;
  playStyle: string[];
  position: string[];
  communication: string;
  useVoice: boolean;
  voiceChannel?: string[];
}
