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

export interface LoginDTO {
  success: boolean;
  token: string;
  refreshToken: string;
  nickname: string;
  userId: string;
  rtokenExpireTime: string;
  tokenExpireTime: string;
}

export interface UserProfileDTO {
  nickname: string;
  profileOpen: boolean;
  profileUrl: string;
  goodFeedback: Feedback[];
  tier: Tier;
  playStyles: string[];
  positions: string[];
  voice: boolean;
  voiceChannel: string[];
}

export interface MyPageDTO {
  nickname: string;
  profileUrl: string;
  voice: boolean;
  tier: Tier;
  positions: string[];
  playStyles: string[];
  goodFeedback: Feedback[];
  badFeedback: Feedback[];
}

interface Feedback {
  description: string;
  count: number;
}

interface Tier {
  tier: string;
  rank: number;
}
