export interface MyPageDTO {
  success: boolean;
  profileUrl: string;
  nickname: string;
  profileOpen: true;
  goodFeedback: {
    description: string;
    count: number;
  }[];
  badFeedback: {
    description: string;
    count: number;
  }[];
}

export interface OnBoardingInput {
  nickName: string;
  nickNameCheck: boolean;
  playStyle: string[];
  position: string[];
  communication: string;
  useVoice: boolean;
  voiceChannel?: string[];
}

export interface ReviewWriteDTO {
  isJoyful: boolean;
  goodFeedback: string[];
  badFeedback: string[];
  ban: boolean;
}
