export interface OnBoardingInput {
  nickName: string;
  nickNameCheck: boolean;
  position: string[];
  communication: string;
  useVoice: boolean;
  voiceChannel?: string[];
}
